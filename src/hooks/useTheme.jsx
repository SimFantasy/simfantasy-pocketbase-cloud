import React, { useState, useEffect } from 'react'

const useTheme = () => {
  const [theme, setTheme] = useState('light')
  const rootElement = document.documentElement

  useEffect(() => {
    const localTheme = localStorage.getItem('sim-fantasy-theme')
    if (localTheme) {
      setTheme(localTheme)
      rootElement.setAttribute('data-color-mode', localTheme)
    } else {
      setTheme('light')
      rootElement.setAttribute('data-color-mode', 'light')
    }
  }, [])

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem('sim-fantasy-theme', 'dark')
      rootElement.setAttribute('data-color-mode', 'dark')
    } else {
      setTheme('light')
      localStorage.setItem('sim-fantasy-theme', 'light')
      rootElement.setAttribute('data-color-mode', 'light')
    }
  }

  return { theme, toggleTheme }
}

export default useTheme
