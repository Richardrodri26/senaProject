"use client"

import { BasicFormProviderZod, ButtonForm } from "@/components/Form"
import Link from "next/link"
import { registerSchema, registerSchemaType } from "../schemas"
import { useMutation } from '@tanstack/react-query'
import { registerUser } from "@/actions"
import { toast } from "sonner"
import { InputForm, InputPasswordForm } from "@/composables/FormInputs"
import { useRouter } from "next/navigation"


export const RegisterForm = () => {
  const router = useRouter()
  const mutation = useMutation({
    mutationFn: async (data: registerSchemaType) => {

      try {
        await registerUser(data.name, data.email, data.password)

        router.push("/home")
      } catch (error) {
        toast.error('Oops, hubo un error al crear el usuario')
      }

    }
  })

  const onSubmit = async (data: registerSchemaType) => {
    mutation.mutate(data)
  }



  return (
    <BasicFormProviderZod className="p-0" submit={onSubmit} schema={registerSchema}>
      <div className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">

          <InputForm name="name" label={'Nombre'} placeholder="Ej: Juan" />
          <InputForm name="email" label={'Correo electronico'} placeholder="Ej: correo@gmail.com" />

          
        </div>
          <InputPasswordForm name="password" label={'Contraseña'} />
          <InputPasswordForm name="confirmPassword" label={'Confirmar contraseña'} />
        
        <ButtonForm disabled={mutation.isPending} className="w-full">
          Registrar usuario
        </ButtonForm>
      </div>
      <div className="mt-4 text-center text-sm">
        Ya tienes una cuenta?{" "}
        <Link href="/" className="underline">
          Iniciar sesion
        </Link>
      </div>
    </BasicFormProviderZod>
  )
}
