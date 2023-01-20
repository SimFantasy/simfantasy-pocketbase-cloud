import styled from '@emotion/styled'
import s from '@/styles/global.style'

export const PostItemWrap = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  &:not(:last-of-type) {
    margin-bottom: var(--sim-space-md);
    /* padding-bottom: var(--sim-space-md);
    border-bottom: 1px solid var(--sim-divider); */
  }

  .post-item-title {
    ${s.flex('flex-start', 'center')};
    ${s.ellipsis(3)};
    width: auto;
    line-height: 1.5;
    font-size: var(--sim-text-lg);
    color: var(--sim-title);
    cursor: pointer;

    &:hover {
      color: var(--sim-text);
    }
  }

  .post-item-info {
    ${s.flex('flex-start', 'center')};
    gap: var(--sim-space-sm);
    margin-bottom: var(--sim-space-xs);
    height: 32px;
    font-size: var(--sim-text-sm);
    color: var(--sim-text-secondary);

    .info-item {
      ${s.flex('flex-start', 'center')};
      gap: var(--sim-space-xs);
      height: 100%;
    }
  }

  .post-item-description {
    ${s.ellipsis(3)};
    line-height: 1.8;
    font-size: var(--sim-text-sm);
    color: var(--sim-text);
  }
`
