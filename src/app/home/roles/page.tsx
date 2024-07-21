import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { InputForm, TextareaForm } from "@/composables/FormInputs";
import { CreateRoleForm } from "@/features/roles";
import { AllRolesGrid } from "@/features/roles/Grids";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function RolesPage() {
  return (
    <div className="flex flex-col gap-5">
       <div className="py-2 w-full flex justify-end items-center gap-2">
       
        <Link href={'/home/roles/new-role'} className={buttonVariants({ size: 'sm', })}>
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Añadir rol
          </span>
        </Link>
      </div>

      <AllRolesGrid />

      <Card x-chunk="dashboard-07-chunk-0">
        <CardHeader>
          <CardTitle>Agregar rol</CardTitle>
          <CardDescription>
            Agrega un rol cumpliendo los datos solicitados.
          </CardDescription>
        </CardHeader>
        <CardContent>

        <CreateRoleForm>
          <InputForm name="name" placeholder="Ej: admin" label={'Nombre del rol'} />
          <TextareaForm name="description" placeholder="Ej: Role con todos los permisos del sistema" label={'Descripcion del rol'} />
        </CreateRoleForm>

        </CardContent>
        <CardFooter>
          
        </CardFooter>
      </Card>


    </div>
  );
}