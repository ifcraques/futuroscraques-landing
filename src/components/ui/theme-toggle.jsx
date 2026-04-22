import { useTheme } from '@/hooks/useTheme'

function ArrowUpIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M6 10V2M2 6l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function handleScrollTop() {
  window.scroll({ top: 0, behavior: 'smooth' })
}

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center justify-center">
      <div
        className="flex items-center gap-1 rounded-full border border-dotted border-neutral-300 dark:border-neutral-700 px-1 py-1"
      >
        {/* Light */}
        <button
          onClick={() => setTheme('light')}
          aria-label="Modo claro"
          className={`rounded-full p-2 transition-all duration-200 ${
            theme === 'light'
              ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
              : 'text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300'
          }`}
        >
          <SunIcon />
        </button>

        {/* Scroll to top */}
        <button
          type="button"
          onClick={handleScrollTop}
          aria-label="Voltar ao topo"
          className="p-2 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
        >
          <ArrowUpIcon />
        </button>

        {/* Dark */}
        <button
          onClick={() => setTheme('dark')}
          aria-label="Modo escuro"
          className={`rounded-full p-2 transition-all duration-200 ${
            theme === 'dark'
              ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
              : 'text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300'
          }`}
        >
          <MoonIcon />
        </button>
      </div>
    </div>
  )
}
