import styled from '@emotion/styled'
import s from '@/styles/global.style'

export const TitlebarWrap = styled.div`
  margin-bottom: var(--sim-space-md);
  width: 100%;
  height: 40px;

  .titlebar-container {
    ${s.flex('flex-start', 'center')};
    gap: var(--sim-space-xs);
    width: 100%;
    height: 100%;

    &:hover {
      .more-info {
        .more-text {
          opacity: 1;
          transform: translateX(0);
        }

        svg {
          opacity: 1;
          transform: translateX(0);
        }
      }
    }

    .title {
      flex: 0 0 auto;
      font-size: var(--sim-text-2xl);
      font-weight: 700;
      color: var(--sim-title);
      cursor: pointer;
    }

    .more-info {
      flex: 1;
      ${s.flex('flex-start', 'center')};
      color: var(--sim-text-secondary);

      .more-text {
        font-size: var(--sim-text-md);
        transition: 0.3s ease;
        opacity: 0;
        transform: translateX(-16px);
      }

      svg {
        font-size: var(--sim-text-xl);
        transition: 0.4s ease;
        opacity: 0;
        transform: translateX(-24px);
      }
    }
  }
`
