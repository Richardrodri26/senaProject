import { Toaster } from "sonner"
import { ThemeProvider } from "./ThemeProvider"
import { QueryProvider } from "./QueryProvider"


export const GeneralProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryProvider>

        {children}

      </QueryProvider>
      <Toaster richColors />
    </ThemeProvider>
  )
}
