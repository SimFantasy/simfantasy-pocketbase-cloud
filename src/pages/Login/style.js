import styled from '@emotion/styled'
import s from '@/styles/global.style'

export const LoginWrap = styled.section`
  ${s.flex('center', 'center')};
  width: 100vw;
  height: 100vh;

  .login-container {
    display: flex;
    flex-direction: column;
    gap: var(--sim-space-2xl);
    margin-bottom: var(--sim-space-5xl);
    width: 400px;

    .login-titlebar {
      ${s.flex('center', 'center')};
      gap: var(--sim-space-sm);
      height: 48px;

      svg {
        font-size: var(--sim-text-4xl);
        color: var(--sim-title);
      }

      .logo-text {
        font-size: var(--sim-text-2xl);
        color: var(--sim-text);
        font-weight: 700;
      }
    }

    .login-form {
      display: flex;
      flex-direction: column;
      gap: var(--sim-space-md);
    }
  }
`
