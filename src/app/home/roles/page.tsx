import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { InputForm, TextareaForm } from "@/composables/FormInputs";
import { CreateRoleForm } from "@/features/roles";
import { AllRolesGrid } from "@/features/roles/Grids";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function RolesPage() {
  return (
    <div className="flex flex-col gap-5 pt-5">

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