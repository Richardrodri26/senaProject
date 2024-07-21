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

/**
 * Pauses execution for a specified amount of time.
 * @param milliseconds The number of milliseconds to sleep.
 * @returns A Promise that resolves after the specified time.
 */
export function sleep(milliseconds: number = 1000): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

/**
 * Checks if a given string is a valid UUID.
 * @param str The string to check.
 * @returns True if the string is a valid UUID, false otherwise.
 */
export function isUUID(str: string): boolean {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(str);
}