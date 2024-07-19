import { type User } from "@prisma/client";
import { createColumnHelper } from "@tanstack/react-table";
import { UsersTdActions } from "./elements/ClientElements";



const columnHelperUsers = createColumnHelper<User>();

export const userColumns = [
  columnHelperUsers.accessor('name', {
    header: "Nombre del usuario"
  }),
  columnHelperUsers.accessor('email', {
    header: "Email del usuario"
  }),
  columnHelperUsers.accessor('role', {
    header: "Rol del usuario"
  }),

  columnHelperUsers.display({
    id: 'actions',
    cell: ({ row }) => <UsersTdActions data={row.original} />
  })

]