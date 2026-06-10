import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'ifc-theme'
const EVENT_NAME = 'ifc-theme-change'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  // primeiro acesso: respeita a preferência do sistema
  return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches
    ? 'dark'
    : 'light'
}

export function useTheme() {
  const [theme, setThemeState] = useState(getInitialTheme)

  // aplica a classe `dark` no <html> e persiste
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  // mantém todas as instâncias do hook sincronizadas (menu, header, globo...)
  useEffect(() => {
    const onChange = (e) => setThemeState(e.detail)
    window.addEventListener(EVENT_NAME, onChange)
    return () => window.removeEventListener(EVENT_NAME, onChange)
  }, [])

  const setTheme = useCallback((next) => {
    setThemeState(next)
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: next }))
  }, [])

  return { theme, setTheme }
}
