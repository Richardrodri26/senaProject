import { IMultiSelectFormInterface, MultiSelectForm, SelectForm, SelectFormInterface } from "@/composables/FormInputs"
import prisma from "@/lib/prisma"



export const RoleSelect = async ({ name, ...restProps }: Omit<IMultiSelectFormInterface, 'options'>) => {
  const roles = await prisma.role.findMany()

  // const rolesOptions = roles.map(role => ({ key: role.id, value: role.name })) || []

  const rolesOptions = roles.map(role => ({ value: role.id, label: role.name })) || []

  return (
    // <SelectForm name={name} options={rolesOptions} {...restProps} />
    <MultiSelectForm name={name} options={rolesOptions} {...restProps} />

  )
}
