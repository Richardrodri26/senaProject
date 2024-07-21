"use client"

import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { Role } from "@prisma/client"
import { getQueryClient } from "@/config"
import { deleteRoleById, editRole } from "@/actions"
import { toast } from "sonner"
import { useMutation } from "@tanstack/react-query"
import { updateRoleSchemaType } from "./schema"

type ComponentProps = {
  data: Role[]
}

export function RoleGridAlternative({ data }: ComponentProps) {
  const [editingRole, setEditingRole] = useState<Role | null>(null)
  const queryClient = getQueryClient()

  const mutation = useMutation({
    mutationFn: async (data: updateRoleSchemaType) => {
      try {
        toast.info("Editando rol...")
        const user = await editRole(data)
        if (!user) {
          toast.error('Oops hubo un error en la consulta')
          return
        }

        toast.success("Rol editado con exito")
        queryClient.refetchQueries({ queryKey: ['role'] })

      } catch (error) {
        toast.error('Oops hubo un error en la consulta')
      }
    }
  })

  const handleEditRole = (role: Role) => {
    setEditingRole(role)
  }

  const handleSaveRole = async (role: Role) => {
    if (editingRole) {
      await mutation.mutate({
        id: editingRole.id,
        description: editingRole.description || role.description || '',
        name: editingRole.name || role.name
      })
      setEditingRole(null)
    }
  }

  const handleDeleteRole = async (id: string) => {
    try {
      const resMutation = deleteRoleById(id)
      if(!resMutation) {
        toast.error('Oops, hubo un error al eliminar el rol')
        return 
      }
      queryClient.refetchQueries({ queryKey: ['role'] })
      
    } catch (error) {
      toast.error('Oops, hubo un error al eliminar el rol')
    }
  }

  return (
    <div className="">
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Rol</TableHead>
              <TableHead>Descripcion</TableHead>
              <TableHead>Acciones </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((role) => (
              <TableRow key={role.id}>
                <TableCell>
                  {editingRole?.id === role.id ? (
                    <Input
                      value={editingRole.name}
                      onChange={(e) => setEditingRole({ ...editingRole, name: e.target.value })}
                    />
                  ) : (
                    role.name
                  )}
                </TableCell>
                <TableCell>
                  {editingRole?.id === role.id ? (
                    <Textarea
                      value={editingRole.description || ""}
                      onChange={(e) =>
                        setEditingRole({
                          ...editingRole,
                          description: e.target.value,
                        })
                      }
                    />
                  ) : (
                    role.description
                  )}
                </TableCell>
                <TableCell>
                  {editingRole?.id === role.id ? (
                    <>
                      <Button variant="outline" className="mr-2" onClick={() => handleSaveRole(role)}>
                        Guardar
                      </Button>
                      <Button variant="outline" onClick={() => setEditingRole(null)}>
                        Cancelar
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="outline" className="mr-2" onClick={() => handleEditRole(role)}>
                        Editar
                      </Button>
                      <Button variant="outline" color="danger" onClick={() => handleDeleteRole(role.id)}>
                        Eliminar
                      </Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
