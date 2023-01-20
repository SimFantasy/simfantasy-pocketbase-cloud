import React, { memo } from 'react'
import { SpinWrap } from './style'

const Spin = () => {
  return (
    <SpinWrap>
      <div className='loading'>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </SpinWrap>
  )
}

export default memo(Spin)
