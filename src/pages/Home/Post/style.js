import styled from '@emotion/styled'
import s from '@/styles/global.style'

export const PostWrap = styled.div`
  .post-container {
    display: flex;
    flex-direction: column;

    .post-cover {
      margin-bottom: var(--sim-space-lg);
      width: 100%;
      max-height: 320px;
      overflow: hidden;
      border-radius: var(--sim-radius-md);

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .post-title {
      font-size: 24px;
      color: var(--sim-title);
      line-height: 1.8;
    }

    .post-info {
      margin-bottom: var(--sim-space-lg);
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

    .post-content {
      margin-bottom: var(--sim-space-lg);
      width: 100%;
      font-size: var(--sim-text-lg);
      color: var(--sim-text);
      line-height: 2;
    }

    .post-tags {
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
