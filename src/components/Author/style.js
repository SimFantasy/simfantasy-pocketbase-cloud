import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import s from '@/styles/global.style'

const rotate = keyframes`
  form {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  } 
`

export const AuthorWrap = styled.section`
  margin-bottom: ${s['space-4xl']};
  width: 100%;

  .author-container {
    ${s.flex('space-between', 'center')};
    gap: var(--sim-space-md);
    width: 100%;

    .author-avatar {
      flex: 0 0 auto;
      box-sizing: border-box;
      padding: var(--sim-space-xs);
      width: 80px;
      height: 80px;
      border-radius: var(--sim-rounded);
      background-color: var(--sim-bg-tertiary);
      box-shadow: 0 4px 16px rgba(20, 20, 20, 0.12);
      cursor: pointer;

      &:hover {
        img {
          animation: ${rotate} 1.6s linear infinite;
        }
      }

      img {
        width: 100%;
        border-radius: var(--sim-rounded);
      }
    }

    .author-info {
      flex: 1;
      ${s.flex('flex-start', 'flex-start')};
      flex-direction: column;

      .author-username {
        font-size: 24px;
        color: var(--sim-title);
        font-weight: 600;
      }

      .author-bio {
        font-size: 14px;
        color: var(--sim-text-secondary);
      }
    }

    .create-btns {
      flex: 0 0 auto;
      ${s.flex('flex-end', 'flex-start')};
      flex-wrap: wrap;
      gap: var(--sim-space-xs);
      max-width: 270px;

      .create-btn {
        ${s.flex('center', 'center')};
        gap: var(--sim-space-xs);
        padding: 4px 8px;
        border-radius: var(--sim-radius-xs);
        background-color: var(--sim-gray-2);
        font-size: var(--sim-text-sm);
        color: var(--sim-title);
        cursor: pointer;

        &:hover {
          background-color: var(--sim-gray-4);
          color: var(--sim-light);
        }
      }
    }
  }

  @media (max-width: ${s['mobile-width']}) {
    .author-container {
      .create-btns {
        display: none;
      }
    }
  }
`
