"use client"

import { createUser, deleteUserById } from "@/actions"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { getQueryClient } from "@/config"
import { User } from "@prisma/client"
import { MoreHorizontal } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"



export const UsersTdActions = ({ data }: { data: User }) => {
  const queryClient = getQueryClient()
  const router = useRouter()

  const deleteUser = async () => {
    try {
      const resMutation = deleteUserById(data.id)
      if(!resMutation) {
        toast.error('Oops, hubo un error al eliminar el usuario')
        return 
      }
      queryClient.refetchQueries({ queryKey: ['users'] })
      
    } catch (error) {
      toast.error('Oops, hubo un error al eliminar el usuario')
    }
  }

  const onEdit = () => {
    router.push(`/home/users/edit-user/${data.id}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          aria-haspopup="true"
          size="icon"
          variant="ghost"
        >
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
        <DropdownMenuItem onClick={onEdit}>Editar</DropdownMenuItem>
        <DropdownMenuItem onClick={deleteUser}>Eliminar</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}