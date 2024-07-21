'use client'

import { BasicFormProviderZod, ButtonForm } from "@/components/Form"
import { createUserSchema, createUserSchemaType } from "../schemas"
import { useMutation } from "@tanstack/react-query"
import { createUser } from "@/actions"
import { toast } from "sonner"
import { Role } from "@prisma/client"
import { useRouter } from "next/navigation"
import { revalidatePath } from "next/cache"
import { getQueryClient } from "@/config"



export const CreateUserForm = ({ children, defaultValue }: { children: React.ReactNode, defaultValue?: any }) => {
  const queryClient = getQueryClient()
  const router = useRouter()
  const mutation = useMutation({
    mutationFn: async (data: createUserSchemaType) => {
      try {
        toast.info("Creando usuario...")
        const user = await createUser(data)
        if (!user) {
          toast.error('Oops hubo un error en la consulta')
          return
        }

        toast.success("Usuario creado con exito")

        queryClient.refetchQueries({ queryKey: ['users'] })
        router.push("/home/users")
        // revalidatePath('/home/users', 'page')
      } catch (error) {
        console.log("error createUser")
        toast.error('Oops hubo un error en la consulta')
      }
    }
  })

  const onSubmit = (data: createUserSchemaType) => {
    mutation.mutateAsync(data)
  }

  return (
    <>
      <BasicFormProviderZod className="p-0" defaultValue={defaultValue || { role: [], isActive: false }} submit={onSubmit} schema={createUserSchema}>
        {children}
        <ButtonForm disabled={mutation.isPending}>Guardar</ButtonForm>
      </BasicFormProviderZod>
    </>
  )
}