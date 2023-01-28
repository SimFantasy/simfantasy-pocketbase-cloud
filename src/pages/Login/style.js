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
export const LoginErrorMessage = styled.div`
  ${s.flex('space-between', 'center')};
  width: auto;
  height: 40px;
  border-radius: var(--sim-radius-sm);
  background-color: var(--sim-red-2);

  .error-content {
    box-sizing: border-box;
    flex: 1;
    ${s.flex('flex-start', 'center')};
    padding: 0 48px 0 var(--sim-space-sm);
    height: 100%;
    font-size: var(--sim-text-sm);
    color: var(--sim-red);
  }

  .close-btn {
    flex: 0 0 auto;
    ${s.flex('center', 'center')};
    width: 32px;
    height: 100%;
    font-size: var(--sim-text-md);
    color: var(--sim-gray);
    cursor: pointer;

    &:hover {
      color: var(--sim-gray-7);
    }
  }
`
