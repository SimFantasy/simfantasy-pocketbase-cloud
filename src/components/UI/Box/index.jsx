import React, { memo } from 'react'
import { BoxWrap } from './style'

const Box = ({
  children,
  props,
  box,
  display,
  justify,
  gap,
  align,
  col,
  wrap,
  flex,
  position,
  top,
  right,
  bottom,
  left,
  zindex,
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
    <BoxWrap
      box={box}
      display={display}
      justify={justify}
      align={align}
      gap={gap}
      col={col}
      wrap={wrap}
      flex={flex}
      position={position}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      zindex={zindex}
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
    </BoxWrap>
  )
}

export default memo(Box)
