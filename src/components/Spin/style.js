import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import s from '@/styles/global.style'

const ballBeat = keyframes`
  50% {
    opacity: 0.2;
    transform: scale(0.75);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`

export const SpinWrap = styled.div`
  box-sizing: border-box;
  ${s.flex('center', 'center')};
  padding: var(--sim-space-md);
  width: 100%;
  height: 100%;
  min-height: 16vh;
  .loading,
  .loading > div {
    position: relative;
    box-sizing: border-box;
  }

  .loading {
    display: block;
    font-size: 0;
    color: var(--sim-gray);
  }

  .loading > div {
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor;
  }

  .loading {
    width: 54px;
    height: 18px;
  }

  .loading > div {
    width: 10px;
    height: 10px;
    margin: 4px;
    border-radius: 100%;
    animation: ${ballBeat} 0.7s -0.15s infinite linear;
  }
  .loading > div:nth-last-of-type(2n-1) {
    animation-delay: -0.5s;
  }
`
