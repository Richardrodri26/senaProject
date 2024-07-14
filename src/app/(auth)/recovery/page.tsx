
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { RecoveryForm } from "@/features/auth"

export default function RecoveryPage() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Recuperacion de credenciales</CardTitle>
        <CardDescription>
          Ingresa la informacion para recuperar un usuario
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RecoveryForm />
      </CardContent>
    </Card>
    </div>
  );
}



