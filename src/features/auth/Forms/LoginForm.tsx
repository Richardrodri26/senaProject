"use client"
import { BasicFormProviderZod, ButtonForm } from "@/components/Form"
import { loginSchema, loginSchemaType } from "../schemas"
import { InputForm } from "@/composables/FormInputs"
import { Label } from "@radix-ui/react-label"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { authenticate } from "@/actions"
import { registerUser } from "@/actions/auth/register"


export const LoginForm = () => {
  const router = useRouter()
  const pathname = usePathname()

  const onSubmit = async (data: loginSchemaType) => {
    // await authenticate("", { ...data, callbackUrl: pathname })
    // await authenticate({ ...data, callbackUrl: pathname })
    await registerUser("Richard", "richard@gmail.com", "123456")

    // router.push("/home")
  }

  return (
    <BasicFormProviderZod submit={onSubmit} schema={loginSchema} className="mx-auto grid w-[350px] gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Inicio de sesión</h1>
        <p className="text-balance text-muted-foreground">
          Ingresa tu correo para acceder a tu cuenta
        </p>
      </div>
      <div className="grid gap-4">



        <InputForm name="email" label="Email" />

        <InputForm name="password" type="password" label={<div className="flex items-center">
          <Label htmlFor="password">Contraseña</Label>
          <Link
            href="/recovery"
            className="ml-auto inline-block text-sm underline"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>} />

        <ButtonForm className="w-full">
          Iniciar sesión
        </ButtonForm>

      </div>
      <div className="mt-4 text-center text-sm">
        ¿No tienes una cuenta?{" "}
        <Link href="/register" className="underline">
          Registrate
        </Link>
      </div>
    </BasicFormProviderZod>
  )
}