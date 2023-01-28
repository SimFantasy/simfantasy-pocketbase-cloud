import React from 'react'

const Maybe = ({ state, children }) => {
  return state ? <>{children}</> : null
}

export default Maybe
