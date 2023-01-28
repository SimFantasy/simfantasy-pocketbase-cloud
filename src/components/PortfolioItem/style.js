import styled from '@emotion/styled'
import s from '@/styles/global.style'
import { transparentize } from 'polished'

export const PortfolioItemWrap = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: var(--sim-radius-sm);
  border: 1px solid transparent;
  background-color: var(--sim-bg-tertiary);
  transition: 0.3s ease;

  &:hover {
    border-color: var(--sim-divider);
  }

  .portfolio-item-cover {
    position: relative;
    width: 100%;

    .portfolio-item-image {
      width: 100%;
      max-height: 240px;
      overflow: hidden;
      border-radius: var(--sim-radius-sm) var(--sim-radius-sm) 0 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: var(--sim-radius-sm) var(--sim-radius-sm) 0 0;
      }
    }

    .portfolio-item-btn {
      position: absolute;
      top: 8px;
      right: 8px;
      z-index: 99;
      ${s.flex('center', 'center')};
      gap: var(--sim-space-xs);
      padding: 4px 8px;
      border-radius: var(--sim-radius-xs);
      background-color: ${transparentize(0.2, '#fff')};
      font-size: var(--sim-text-xs);
      color: var(--sim-title);
    }
  }

  .portfolio-item-title {
    padding: var(--sim-space-xs);
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
