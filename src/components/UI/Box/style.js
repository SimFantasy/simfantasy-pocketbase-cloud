import styled from '@emotion/styled'
import s from '@/styles/global.style'

export const BoxWrap = styled.div`
  box-sizing: ${props => props.box || 'content-box'};
  display: ${props => props.display || 'block'};
  justify-content: ${props => props.justify || 'initial'};
  align-items: ${props => props.align || 'initial'};
  flex-direction: ${props => props.col || 'row'};
  flex-wrap: ${props => props.wrap || 'wrap'};
  gap: ${props => props.gap || '0'};
  flex: ${props => props.flex || 'initial'};
  position: ${props => props.position || 'initial'};
  top: ${props => props.top || 'initial'};
  right: ${props => props.right || 'initial'};
  bottom: ${props => props.bottom || 'initial'};
  left: ${props => props.left || 'initial'};
  z-index: ${props => props.zindex || 'initial'};
  margin: ${props => props.m || 'initial'};
  padding: ${props => props.p || 'initial'};
  width: ${props => props.w || '100%'};
  height: ${props => props.h || '100%'};
  border: ${props => props.b || 'none'};
  border-radius: ${props => props.radius || '0'};
  background-color: ${props => props.bg || 'transparent'};
  font-size: ${props => props.fz || '14px'};
  font-weight: ${props => props.fw || 'normal'};
  color: ${props => props.c || '#777'};
  opacity: ${props => props.opacity || '1'};
`
