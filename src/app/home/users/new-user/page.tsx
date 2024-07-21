import {
  ChevronLeft,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { HeaderPageAddUser } from "@/features/users/elements/HeaderPage"
import Link from "next/link"
import { CreateUserForm } from "@/features/users/Forms/CreateUserForm"
import { CheckBoxForm, InputForm } from "@/composables/FormInputs"
import { RoleSelect } from "@/features/generalFeatures"

export default function NewUserPage() {
  return (
    <div className="flex w-full flex-col h-full">
      <div className="flex flex-col sm:gap-4 sm:py-4">
        <HeaderPageAddUser />


        <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4 w-[90%]">
          <CreateUserForm>

            <div className="flex items-center gap-4 mb-2">
              <Button asChild variant="outline" size="icon" className="h-7 w-7">

                <Link href="/home/users"><ChevronLeft className="h-4 w-4" /></Link>
              </Button>

              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Agregar usuario
              </h1>
              
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-0">
                  <CardHeader>
                    <CardTitle>Informacion del usuario</CardTitle>
                    <CardDescription>
                      Rellena la informacion minima necesaria para poder crear el usuario deseado
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <InputForm name="name" label={'Nombre del usuario'} placeholder="Ej: Richard" />
                      <InputForm name="email" label={'Email del usuario'} placeholder="Ej: correo@gmail.com" />

                      
                    </div>
                  </CardContent>
                </Card>

              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-3">
                  <CardHeader>
                    <CardTitle>Estado del usuario</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <CheckBoxForm name={"isActive"} label={'Usuario Activo?'} />
                  </CardContent>
                </Card>

                <Card x-chunk="dashboard-07-chunk-4">
                  <CardHeader>
                    <CardTitle>Roles del usuario</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <RoleSelect name="role" />
                    </div>
                  </CardContent>
                </Card>

              </div>
            </div>
            </CreateUserForm>
            <div className="flex items-center justify-center gap-2 md:hidden">
              <Button variant="outline" size="sm">
                Discard
              </Button>
              <Button size="sm">Save Product</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

