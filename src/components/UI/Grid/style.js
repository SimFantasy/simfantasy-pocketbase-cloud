import styled from '@emotion/styled'
import s from '@/styles/global.style'

export const GridWrap = styled.div`
  box-sizing: ${props => props.box || 'content-box'};
  display: grid;
  gap: ${props => props.gap || 0};
  grid-template-columns: repeat(${props => props.col || 1}, minmax(0, 1fr));
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
