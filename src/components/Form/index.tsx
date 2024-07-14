import { useForm, UseFormReturn, SubmitErrorHandler, useFormContext } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { HTMLAttributes } from 'react';
import { Form } from '../ui/form';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '../ui/button';

// Definimos un tipo auxiliar para DeepPartial que trabaje mejor con Zod
type DeepPartialWithZod<T extends z.ZodObject<any, any>> = {
    [K in keyof T]?: T[K] extends z.ZodObject<any, any> ? DeepPartialWithZod<T[K]> : T[K];
  };
  
  interface ISubmitModulesFormZod<T extends z.ZodObject<any, any> = z.ZodObject<any, any>> {
    children: React.ReactNode;
    schema?: T;
    submit?: (data: T['_input']) => void;
    onError?: SubmitErrorHandler<DeepPartialWithZod<T>>; // Ajustamos el tipo de la función de manejo de errores
    // defaultValue?: DefaultValues<DeepPartialWithZod<T>>;
    defaultValue?: any;
    values?: any;
    className?: string;
  }
  
  export function BasicFormProviderZod<T extends z.ZodObject<any, any>>({ children, submit, onError, defaultValue, values, schema, className = 'p-10' }: ISubmitModulesFormZod<T>) {
    // hooks
    const currentMethods = useForm({
      defaultValues: defaultValue,
      mode: 'onTouched',
      reValidateMode: 'onChange',
      resolver: schema ? zodResolver(schema) : undefined,
    });
  
    return (
      <form onSubmit={submit ? currentMethods.handleSubmit(data => submit(data), onError) : undefined} className={className}>
        <Form  {...currentMethods}>
          {children}
        </Form>
      </form>
    );
  }

  export const RowForm = (props: HTMLAttributes<HTMLDivElement>) => {
    return <div className={cn('mb-2.5 flex w-full flex-1 gap-2.5', props.className)} {...props} />;
  };

  export const ButtonForm = ({ ...rest }: ButtonProps) => {
    const { formState: { isValid } } = useFormContext()
    return (
      <Button disabled={!isValid} {...rest}  />
    )
  }