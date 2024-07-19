import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getInitials(fullName: string): string {
  // Divide el nombre completo en partes
  const nameParts = fullName.trim().split(/\s+/);
  
  // Si no hay nombres, retorna una cadena vacía
  if (nameParts.length === 0) {
    return '';
  }

  // Toma la primera inicial
  let initials = nameParts[0][0].toUpperCase();

  // Si hay más de un nombre, toma la inicial del segundo nombre también
  if (nameParts.length > 1) {
    initials += nameParts[1][0].toUpperCase();
  }

  return initials;
}