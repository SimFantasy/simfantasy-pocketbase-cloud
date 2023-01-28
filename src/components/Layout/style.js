import styled from '@emotion/styled'
import s from '@/styles/global.style'
import themeImage from '@/assets/theme.png'

export const HeaderWrap = styled.header`
  width: 100vw;
  height: var(--sim-header-height);

  .header-container {
    ${s.flex('space-between', 'center')};
    gap: var(--sim-space-sm);
    height: 100%;

    .logo {
      flex: 0 0 auto;
      ${s.flex('flex-start', 'center')};
      gap: var(--sim-space-xs);
      height: 100%;
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

    .navs {
      flex: 1;
      ${s.flex('flex-end', 'center')};
      gap: var(--sim-space-sm);
      height: 100%;

      .nav-item {
        ${s.flex('center', 'center')};
        font-size: var(--sim-text-md);
        color: var(--sim-text-secondary);

        &:hover {
          color: var(--simz-title);
        }

        &.active {
          color: var(--sim-title);
          font-weight: 700;
        }
      }
    }

    .theme-btn {
      flex: 0 0 auto;
      ${s.flex('center', 'center')};
      width: 24px;
      height: 24px;
      background: url(${themeImage}) 0 / auto 24px no-repeat;
      transition: background-position 0.4s steps(5);
      cursor: pointer;

      &.dark {
        background-position: 100%;
      }
    }

    .m-nav-container {
      display: none;
    }
  }

  @media (max-width: ${s['mobile-width']}) {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 10000;
    background-color: var(--sim-bg-secondary);

    .header-container {
      .logo {
        flex: 1;
      }
      .navs {
        display: none;
      }

      .m-nav-container {
        flex: 0 0 auto;
        ${s.flex('flex-end', 'center')};
        width: 32px;
        height: var(--sim-header-height);
        cursor: pointer;

        .m-nav-btn {
          ${s.flex('center', 'center')};
          font-size: var(--sim-text-2xl);
        }

        .m-nav-main {
          position: fixed;
          top: var(--sim-header-height);
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 100;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-bottom: 40vw;
          background-color: var(--sim-bg-secondary);
          opacity: 0;
          transform: translateY(100vh);
          transition: 0.3s ease;

          &.active {
            opacity: 1;
            transform: translateY(0);
          }

          .m-navs {
            display: flex;
            flex-direction: column;
            gap: var(--sim-space-sm);

            .m-nav-item {
              ${s.flex('center', 'center')};
              gap: var(--sim-space-xs);
              font-size: var(--sim-text-xl);
              color: var(--sim-text-secondary);

              &.active {
                color: var(--sim-title);
                font-weight: 700;
              }
            }
          }
        }
      }
    }
  }
`

export const FooterWrap = styled.footer`
  width: 100vw;
  height: var(--sim-footer-height);

  .footer-container {
    ${s.flex('space-between', 'center')};
    height: 100%;
    font-size: var(--sim-text-sm);
    color: var(--sim-text-secondary);
  }
`
