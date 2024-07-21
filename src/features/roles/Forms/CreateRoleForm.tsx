'use client'

import { BasicFormProviderZod, ButtonForm } from "@/components/Form"
import { useMutation } from "@tanstack/react-query"
import { createRole } from "@/actions"
import { toast } from "sonner"
import { getQueryClient } from "@/config"
import { createRoleSchema, createRoleSchemaType } from "../schema"

export const CreateRoleForm = ({ children, defaultValue }: { children: React.ReactNode, defaultValue?: any }) => {
  const queryClient = getQueryClient()
  const mutation = useMutation({
    mutationFn: async (data: createRoleSchemaType) => {
      try {
        toast.info("Creando rol...")
        const role = await createRole(data)
        if (!role) {
          toast.error('Oops hubo un error en la consulta')
          return
        }

        toast.success("Usuario creado con exito")

        queryClient.refetchQueries({ queryKey: ['role'] })
      } catch (error) {
        toast.error('Oops hubo un error en la consulta')
      }
    }
  })

  const onSubmit = (data: createRoleSchemaType) => {
    mutation.mutateAsync(data)
  }

  return (
    <>
      <BasicFormProviderZod className="p-0" defaultValue={defaultValue} submit={onSubmit} schema={createRoleSchema}>
        {children}
        <ButtonForm type="submit" resetForm disabled={mutation.isPending}>Guardar</ButtonForm>
      </BasicFormProviderZod>
    </>
  )
}