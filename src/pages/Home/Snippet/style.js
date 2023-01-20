import styled from '@emotion/styled'
import s from '@/styles/global.style'

export const SnippetWrap = styled.section`
  .snippet-container {
    display: flex;
    flex-direction: column;

    .snippet-title {
      ${s.flex('flex-start', 'center')};
      width: 100%;
      line-height: 1.5;
      font-size: var(--sim-text-xl);
      color: var(--sim-title);
      font-weight: 700;
    }

    .snippet-info {
      ${s.flex('flex-start', 'center')};
      gap: var(--sim-space-lg);
      margin-bottom: var(--sim-space-lg);
      height: 40px;
      font-size: var(--sim-text-sm);
      color: var(--sim-text-secondary);

      .info-item {
        ${s.flex('flex-start', 'center')};
        gap: var(--sim-space-xs);
        height: 100%;
      }
    }

    .snippet-content {
      margin-bottom: var(--sim-space-lg);
      line-height: 1.8;
      font-size: var(--sim-text-md);
      color: var(--sim-text);
    }

    .snippet-tags {
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
