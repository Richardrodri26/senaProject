'use client'
import { DataTable } from "@/components/TableElements/SimpleTable"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { columnsRole } from "./columns"
import { PaginationTable } from "@/components/TableElements"
import { getAllRoles } from "@/actions"

const takeValue = 10

export const AllRolesGrid = () => {
  const [skip, setSkip] = useState(0)

  const { data, isLoading } = useQuery({
    queryKey: ['role', `${skip}-${takeValue}`],
    queryFn: async () => {
      const roleData = await getAllRoles({ pagination: { skip, take: takeValue } })

      return roleData
    }
  })

  return (
    <>
      <Card x-chunk="dashboard-06-chunk-0">
        <CardHeader>
          <CardTitle>Roles</CardTitle>
          <CardDescription>
            Gestiona los roles del sistema.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={columnsRole as any} data={data?.roles || []} isLoading={!data && isLoading} />
        </CardContent>
        <CardFooter>
          {!data && isLoading
            ? (null)
            : (
              <PaginationTable skipState={{ value: skip, setValue: setSkip }} metaDataPagination={{ currentPage: data?.currentPage || 0, totalPages: data?.totalPages || 0 }} takeValue={takeValue} />

            )
          }
        </CardFooter>
      </Card>


    </>
  )
}