import React, { memo } from 'react'
import { GridWrap } from './style'

const Grid = ({
  children,
  props,
  box,
  col,
  gap,
  m,
  p,
  w,
  h,
  b,
  radius,
  bg,
  fz,
  fw,
  c,
  opacity
}) => {
  return (
    <GridWrap
      box={box}
      col={col}
      gap={gap}
      m={m}
      p={p}
      w={w}
      h={h}
      b={b}
      radius={radius}
      bg={bg}
      fz={fz}
      fw={fw}
      c={c}
      opacity={opacity}
      {...props}
    >
      {children}
    </GridWrap>
  )
}

export default memo(Grid)
