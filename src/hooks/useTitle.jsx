import React, { useRef, useEffect } from 'react'
import { siteName } from '@/constants/settings'

const useTitle = title => {
  const prevTitleRef = useRef(document.title)
  const titlebar = title ? `${title} - ${siteName}` : siteName
  useEffect(() => {
    document.title = titlebar
    return () => {
      document.title = prevTitleRef.current
    }
  }, [title])
}

export default useTitle
