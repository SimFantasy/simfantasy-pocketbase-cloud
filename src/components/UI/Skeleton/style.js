import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import s from '@/styles/global.style'

const skeletonLoading = keyframes`
  from,to {
    opacity: 0.4;
  }
  50% {
    opacity: 1;
  }
`

export const SkeletonWrap = styled.div`
  margin: ${props => props.m || 'initial'};
  width: ${props => props.w || '100%'};
  height: ${props => props.h || '8px'};
  border-radius: ${props => props.r || '4px'};
  /* background-color: #dee2e6; */
  background-color: var(--sim-divider);
  animation: ${skeletonLoading} 1.2s linear infinite;
`
