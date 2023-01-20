import styled from '@emotion/styled'
import s from '@/styles/global.style'

export const LayoutWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  min-height: 100vh;

  .layout-main {
    flex: 1;
    padding-top: var(--sim-space-2xl);
    padding-bottom: var(--sim-space-4xl);
  }
`
