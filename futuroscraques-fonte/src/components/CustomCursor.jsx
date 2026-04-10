import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })

      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }

      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top = e.clientY + 'px'
      }
    }

    const handleMouseEnter = () => {
      if (cursorRef.current) cursorRef.current.classList.add('active')
      if (dotRef.current) dotRef.current.classList.add('active')
    }

    const handleMouseLeave = () => {
      if (cursorRef.current) cursorRef.current.classList.remove('active')
      if (dotRef.current) dotRef.current.classList.remove('active')
    }

    const handleHoverStart = (e) => {
      if (e.target.closest('a, button, [role="button"], .btn-secondary, .cta-btn, .projeto-item, .lei-card')) {
        setIsHovering(true)
        if (cursorRef.current) {
          cursorRef.current.style.width = '35px'
          cursorRef.current.style.height = '35px'
          cursorRef.current.style.borderWidth = '2.5px'
          cursorRef.current.style.borderColor = 'var(--accent)'
          cursorRef.current.style.background = 'rgba(0, 162, 232, 0.15)'
          cursorRef.current.style.boxShadow = '0 0 0 4px rgba(0, 162, 232, 0.25), 0 0 16px rgba(0, 162, 232, 0.5), 0 0 32px rgba(0, 162, 232, 0.3)'
        }
      }
    }

    const handleHoverEnd = (e) => {
      if (!e.target.closest('a, button, [role="button"], .btn-secondary, .cta-btn, .projeto-item, .lei-card')) {
        setIsHovering(false)
        if (cursorRef.current) {
          cursorRef.current.style.width = '20px'
          cursorRef.current.style.height = '20px'
          cursorRef.current.style.borderWidth = '2px'
          cursorRef.current.style.borderColor = 'var(--accent)'
          cursorRef.current.style.background = 'transparent'
          cursorRef.current.style.boxShadow = '0 0 0 3px rgba(0, 162, 232, 0.2), 0 0 12px rgba(0, 162, 232, 0.4), 0 0 24px rgba(0, 162, 232, 0.2)'
        }
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseover', handleHoverStart)
    document.addEventListener('mouseout', handleHoverEnd)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', handleHoverStart)
      document.removeEventListener('mouseout', handleHoverEnd)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  )
}
