'use client'
import { ThemeProvider } from "next-themes"

const darkModeProvider = ({children}:{children?:React.ReactNode}) => {
  return (
    <ThemeProvider attribute="class">{children}</ThemeProvider>
  )
}

export default darkModeProvider