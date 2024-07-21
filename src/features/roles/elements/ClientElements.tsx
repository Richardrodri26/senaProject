"use client"

import { deleteRoleById } from "@/actions"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { getQueryClient } from "@/config"
import { Role } from "@prisma/client"
import { MoreHorizontal } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"



export const RoleTdActions = ({ data }: { data: Role }) => {
  const queryClient = getQueryClient()
  const router = useRouter()

  const deleteUser = async () => {
    try {
      const resMutation = deleteRoleById(data.id)
      if(!resMutation) {
        toast.error('Oops, hubo un error al eliminar el rol')
        return 
      }
      queryClient.refetchQueries({ queryKey: ['role'] })
      
    } catch (error) {
      toast.error('Oops, hubo un error al eliminar el rol')
    }
  }

  const onEdit = () => {
    router.push(`/home/roles/edit-role/${data.id}`)
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