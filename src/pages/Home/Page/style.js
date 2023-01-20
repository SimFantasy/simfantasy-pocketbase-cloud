import styled from '@emotion/styled'
import s from '@/styles/global.style'

export const PageWrap = styled.section`
  .page-container {
    display: flex;
    flex-direction: column;

    .page-cover {
      margin-bottom: var(--sim-space-lg);
      width: 100%;
      max-height: 320px;
      overflow: hidden;
      border-radius: var(--sim-radius-sm);

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: var(--sim-radius-sm);
      }
    }
    .page-content {
      margin-bottom: var(--sim-space-lg);
      line-height: 1.8;
      font-size: var(--sim-text-md);
      color: var(--sim-text);
    }

    .page-tags {
      ${s.flex('flex-start', 'center')};
      gap: var(--sim-space-xs);
      height: 40px;

      .tag-item {
        flex: 0 0 auto;
        ${s.flex('center', 'center')};
        padding: 2px 6px;
        border-radius: var(--sim-radius-xs);
        background-color: var(--sim-gray-1);
        font-size: var(--sim-text-sm);
        color: var(--sim-text);
      }
    }
  }
`
