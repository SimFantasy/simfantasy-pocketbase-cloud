import styled from '@emotion/styled'
import s from '@/styles/global.style'

export const PaginationWrap = styled.section`
  ${s.flex('space-between', 'center')};
  margin: var(--sim-space-2xl) 0;
  height: 40px;

  .pagination-info {
    flex: 1;
    ${s.flex('flex-start', 'center')};
    height: 100%;
    font-size: var(--sim-text-sm);
    color: var(--sim-text-1);
  }

  .pagination-btns {
    flex: 0 0 auto;
    ${s.flex('flex-end', 'center')};
    gap: var(--sim-space-sm);
    height: 100%;

    .pagination-btn {
      flex: 0 0 auto;
      ${s.flex('center', 'center')};
      padding: 8px 16px;
      border-radius: var(--sim-radius-xs);
      border: 0;
      background-color: var(--sim-gray-9);
      font-size: var(--sim-text-sm);
      color: var(--sim-gray-0);
      cursor: pointer;

      &:hover {
        background-color: var(--sim-gray-7);
      }

      &:disabled {
        background-color: var(--sim-gray-4);
        color: var(--sim-gray-0);
        cursor: default;
      }
    }
  }
`
