import { Role } from "@prisma/client";
import { createColumnHelper } from "@tanstack/react-table";
import { RoleTdActions } from "./elements/ClientElements";


const columnHelperRoles = createColumnHelper<Role>();

export const columnsRole = [
  columnHelperRoles.accessor('name', {
    header: "Nombre del rol"
  }),
  columnHelperRoles.accessor('description', {
    header: "Descripcion del rol"
  }),

  columnHelperRoles.display({
    id: 'actions',
    cell: ({ row }) => <RoleTdActions data={row.original} />
  })
]