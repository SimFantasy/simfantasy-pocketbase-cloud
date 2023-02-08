import styled from '@emotion/styled'
import s from '@/styles/global.style'

export const SiteItemWrap = styled.section`
  box-sizing: border-box;
  padding: var(--sim-space-sm);
  width: 100%;
  border-radius: var(--sim-radius-sm);
  background-color: var(--sim-bg-tertiary);
  transition: 0.3s ease;

  &:hover {
    box-shadow: var(--sim-shadow);
  }

  .site-item-container {
    display: flex;
    flex-direction: column;
    gap: var(--sim-space-xs);

    .site-item-titlebar {
      flex: 0 0 auto;
      ${s.flex('space-between', 'center')};
      gap: var(--sim-space-xs);
      .site-item-cover {
        flex: 0 0 auto;
        ${s.flex('center', 'center')};
        width: 24px;
        height: 24px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .site-item-title {
        flex: 1;
        font-size: var(--sim-text-sm);
        color: var(--sim-title);
        font-weight: 700;
      }
    }

    .site-item-description {
      ${s.ellipsis(2)};
      font-size: var(--sim-text-xs);
      color: var(--sim-text-secondary);
    }

    .site-item-btns {
      ${s.flex('flex-end', 'center')};
      gap: var(--sim-space-sm);
      height: 32px;

      .site-item-link {
        box-sizing: border-box;
        ${s.flex('center', 'center')};
        gap: var(--sim-space-xs);
        padding: 4px 16px;
        border: 1px solid var(--sim-divider);
        border-radius: var(--sim-radius-xs);
        font-size: var(--sim-text-xs);
        color: var(--sim-text-secondary);

        &:hover {
          border-color: var(--sim-border);
        }
      }
    }
  }
`
