import { ThemeProvider } from "./ThemeProvider"




export const GeneralProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >{children}</ThemeProvider>
  )
}
