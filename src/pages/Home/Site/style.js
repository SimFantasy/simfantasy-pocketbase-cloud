import styled from '@emotion/styled'
import s from '@/styles/global.style'

export const SiteWrap = styled.section`
  .site-container {
    display: flex;
    flex-direction: column;
    gap: var(--sim-space-xl);
    padding-top: var(--sim-space-2xl);
    padding-bottom: var(--sim-space-4xl);

    .site-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: var(--sim-space-xs);

      .site-titlebar {
        ${s.flex('flex-start', 'center')};
        gap: var(--sim-space-sm);
        height: 40px;

        .site-icon {
          width: 40px;
          height: 100%;

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }

        .site-title {
          font-size: var(--sim-text-2xl);
          color: var(--sim-title);
        }
      }

      .site-info {
        ${s.flex('flex-start', 'center')};
        gap: var(--sim-space-md);
        height: 40px;

        .info-item {
          ${s.flex('flex-start', 'center')};
          gap: var(--sim-space-xs);
          height: 40px;
          font-size: var(--sim-text-sm);
          color: var(--sim-text-secondary);

          svg {
            font-size: var(--sim-text-md);
          }
        }
      }

      .site-content {
        margin-bottom: var(--sim-space-2xl);
        font-size: var(--sim-text-lg);
        color: var(--sim-text-secondary);
        line-height: 2;
      }

      .site-link {
        ${s.flex('flex-start', 'center')};
        height: 40px;
        .link-btn {
          box-sizing: border-box;
          ${s.flex('center', 'center')};
          gap: var(--sim-space-xs);
          padding: 6px 16px;
          border: 1px solid var(--sim-border);
          border-radius: var(--sim-radius-xs);
          font-size: var(--sim-text-xs);
          color: var(--sim-text-secondary);

          &:hover {
            border-color: var(--sim-text);
            color: var(--sim-title);
          }
        }
      }
    }
  }
`
