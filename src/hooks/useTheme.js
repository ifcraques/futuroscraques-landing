import { useState, useEffect } from 'react'

export function useTheme() {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    return localStorage.getItem('ifc-theme') || 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('ifc-theme', theme)
  }, [theme])

  const setTheme = (newTheme) => setThemeState(newTheme)

  return { theme, setTheme }
}
