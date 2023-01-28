import styled from '@emotion/styled'
import s from '@/styles/global.style'

export const SnippetItemWrap = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: var(--sim-space-xs);
  padding: var(--sim-space-sm);
  width: 100%;
  height: 100%;
  border-radius: var(--sim-radius-sm);
  border: 1px solid transparent;
  background-color: var(--sim-bg-tertiary);
  transition: 0.3s ease;

  &:hover {
    border-color: var(--sim-divider);
  }

  .snippet-item-category {
    ${s.flex('flex-start', 'center')};
    gap: var(--sim-space-xs);
    height: 24px;

    .category-icon {
      flex: 0 0 auto;
      ${s.flex('center', 'center')};
      width: 24px;
      height: 100%;
      font-size: var(--sim-text-lg);
      color: var(--sim-text-secondary);
    }

    .category-text {
      flex: 1;
      ${s.flex('flex-start', 'center')};
      height: 100%;
      font-size: var(--sim-text-sm);
      color: var(--sim-text-secondary);
    }

    .snippet-btn {
      flex: 0 0 auto;
      ${s.flex('center', 'center')};
      gap: var(--sim-space-xs);
      padding: 4px 8px;
      border-radius: var(--sim-radius-xs);
      border: 1px solid var(--sim-divider);
      font-size: var(--sim-text-xs);
      color: var(--sim-text);
      transition: 0.3s ease;

      &:hover {
        border-color: var(--sim-border);
        color: var(--sim-title);
      }
    }
  }

  .snippet-item-title {
    ${s.flex('flex-start', 'center')};
    ${s.ellipsis(2)};
    line-height: 1.5;
    font-size: var(--sim-text-sm);
    color: var(--sim-title);

    &:hover {
      color: var(--sim-text);
    }
  }
`
