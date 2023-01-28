import styled from '@emotion/styled'
import s from '@/styles/global.style'

export const ManageTitleWrap = styled.div`
  ${s.flex('space-between', 'center')};
  margin-bottom: var(--sim-space-xl);
  width: 100%;
  height: 48px;

  .title {
    font-size: var(--sim-text-xl);
    color: var(--sim-title);
    font-weight: 700;
  }

  .back-btn {
    ${s.flex('center', 'center')};
    gap: var(--sim-space-xs);
    padding: 4px 8px;
    border: 1px solid var(--sim-divider);
    border-radius: var(--sim-radius-sm);
    font-size: var(--sim-text-sm);
    color: var(--sim-text);
    cursor: pointer;

    &:hover {
      border-color: var(--sim-border);
      color: var(--sim-title);
    }
  }
`
