'use client'

import { getAllUsers } from "@/actions/users/getUsers"
import { DataTable } from "@/components/TableElements/SimpleTable"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { userColumns } from "./columns"
import { PaginationTable } from "@/components/TableElements"

const takeValue = 10

export const AllUsersGrid = () => {
  const [skip, setSkip] = useState(0)

  const { data, isLoading } = useQuery({
    queryKey: ['users', `${skip}-${takeValue}`],
    queryFn: async () => {
      const usersData = await getAllUsers({ pagination: { skip, take: takeValue } })

      return usersData
    }
  })

  return (
    <>
      <Card x-chunk="dashboard-06-chunk-0">
        <CardHeader>
          <CardTitle>Usuarios</CardTitle>
          <CardDescription>
            Gestiona los usuarios del sistema.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={userColumns as any} data={data?.users || []} isLoading={!data && isLoading} />
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