'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitch = ({children,className}:{children :React.ReactNode,className?:string}) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  const buttonClick = (e:React.MouseEvent) => {
    e.stopPropagation()
    theme == "dark"? setTheme('light'): setTheme("dark")
  }
  return (
    <button
    onClick={buttonClick}
    className={`${className}`}>
        {children}
    </button>
  )
}

export default ThemeSwitch