import { createColumnHelper } from "@tanstack/react-table";
import { UsersTdActions } from "./elements/ClientElements";
import { Role, User, UserRole } from "@prisma/client";
import { Badge } from "@/components/ui/badge";


interface IRoleGrid extends UserRole {
  role: Role
}
export interface UsersGrid extends User {
  roles: IRoleGrid[]
}

const columnHelperUsers = createColumnHelper<UsersGrid>();

export const userColumns = [
  columnHelperUsers.accessor('name', {
    header: "Nombre del usuario"
  }),
  columnHelperUsers.accessor('email', {
    header: "Email del usuario"
  }),
  columnHelperUsers.accessor('roles', {
    header: "Rol del usuario",
    cell: ({ getValue }) => getValue().slice(0,3).map((role, index) => <Badge className="mr-2" key={index}>{role?.role?.name}</Badge>)
  }),

  columnHelperUsers.display({
    id: 'actions',
    cell: ({ row }) => <UsersTdActions data={row.original} />
  })

]