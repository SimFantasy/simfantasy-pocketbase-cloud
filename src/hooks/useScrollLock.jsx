import React, { useState, useEffect } from 'react'

const useScrollLock = () => {
  const [lockState, setLockState] = useState(false)
  const body = document.body

  const lock = () => {
    body.style.overflow = 'hidden'
    setLockState(true)
  }

  const unLock = () => {
    body.style.overflow = null
    setLockState(false)
  }

  const toggleLock = () => {
    lockState ? unLock() : lock()
  }

  useEffect(() => {
    lockState ? lock() : unLock()
  }, [lockState])

  return { lockState, toggleLock }
}

export default useScrollLock
