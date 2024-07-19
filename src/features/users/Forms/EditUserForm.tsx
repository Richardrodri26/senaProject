'use client'

import { BasicFormProviderZod, ButtonForm } from "@/components/Form"
import { useMutation } from "@tanstack/react-query"
import { editUser } from "@/actions"
import { toast } from "sonner"
import { Role } from "@prisma/client"
import { useRouter } from "next/navigation"
import { editUserSchema, editUserSchemaType } from "../schemas"
import { getQueryClient } from "@/config"



export const EditUserForm = ({ children, defaultValue }: { children: React.ReactNode, defaultValue?: any }) => {
  const queryClient = getQueryClient()

  const router = useRouter()
  const mutation = useMutation({
    mutationFn: async (data: editUserSchemaType) => {
      try {
        toast.info("Editando usuario...")
        const user = await editUser(data)
        if (!user) {
          toast.error('Oops hubo un error en la consulta')
          return
        }

        toast.success("Usuario editado con exito")
        queryClient.refetchQueries({ queryKey: ['users'] })

        router.push("/home/users")
      } catch (error) {
        toast.error('Oops hubo un error en la consulta')
      }
    }
  })

  const onSubmit = (data: editUserSchemaType) => {
    mutation.mutate(data)
  }

  return (
    <>
      <BasicFormProviderZod className="p-0" defaultValue={defaultValue || { role: Role.user }} submit={onSubmit} schema={editUserSchema}>
        {children}
        <ButtonForm disabled={mutation.isPending}>Guardar</ButtonForm>
      </BasicFormProviderZod>
    </>
  )
}