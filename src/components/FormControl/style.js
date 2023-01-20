import styled from '@emotion/styled'
import s from '@/styles/global.style'

export const FormControlWrap = styled.div`
  &.form-control {
    display: flex;
    flex-direction: column;
    width: 100%;

    &.align-center {
      align-items: center;
    }

    &.align-start {
      align-items: flex-start;
    }

    &.align-end {
      align-items: flex-end;
    }

    .form-label {
      flex: 0 0 auto;
      ${s.flex('flex-start', 'center')};
      width: 100%;
      height: 40px;
      font-size: var(--sim-text-sm);
      color: var(--sim-title);
    }

    .form-input,
    .form-textarea,
    .form-select {
      box-sizing: border-box;
      flex: 0 0 auto;
      ${s.flex('flex-start', 'center')};
      padding: 0 var(--sim-space-sm);
      width: 100%;
      height: 40px;
      border: 1px solid var(--sim-divider);
      background-color: var(--sim-bg);
      border-radius: var(--sim-radius-xs);
      font-size: var(--sim-text-sm);
      color: var(--sim-text);
      transition: border 0.3s ease;

      &:focus {
        border-color: var(--sim-gray-300);
      }
    }

    .form-select {
      outline: none;
    }
    .form-textarea {
      padding: var(--sim-space-xs);
      height: auto;
    }

    .form-btn {
      flex: 0 0 auto;
      ${s.flex('center', 'center')};
      padding: 0 var(--sim-space-xs);
      border: 1px solid var(--sim-button);
      border-radius: var(--sim-radius-xs);
      background-color: var(--sim-button);
      height: 40px;
      font-size: var(--sim-text-sm);
      color: var(--sim-light);
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:disabled {
        background-color: var(--sim-button-secondary);
        color: var(--sim-text-secondary);
        border-color: var(--sim-button-secondary);
      }

      &:hover {
        background-color: var(--sim-gray-5);
        border-color: var(--sim-gray-5);
      }

      &.block {
        width: 100%;
      }

      &.outline {
        background-color: transparent;
        color: var(--sim-title);

        &:hover {
          border-color: var(--sim-gray-5);
        }

        &:disabled {
          border-color: var(--sim-divider);
          color: var(--sim-text-disabled);
          cursor: default;
        }
      }

      svg {
        font-size: var(--sim-text-xl);
      }
    }

    .form-editor {
      min-height: 400px;
    }

    .form-options {
      flex: 0 0 auto;
      ${s.flex('flex-start', 'center')};
      gap: var(--sim-space-md);
      height: 40px;

      .form-option-item {
        flex: 0 0 auto;
        ${s.flex('flex-start', 'center')};
        gap: var(--sim-space-xs);
        height: 100%;

        &.checked {
          .form-option-item-icon,
          .form-option-item-label {
            color: var(--sim-title);
          }
        }

        .form-option-item-icon {
          flex: 0 0 auto;
          ${s.flex('flex-start', 'center')};
          width: auto;
          height: 100%;
          color: var(--sim-text-disabled);
          cursor: pointer;
          transition: 0.3s ease;

          &.checked {
            color: var(--sim-title);
          }

          svg {
            font-size: 20px;
          }
        }

        .form-option-item-label {
          flex: 0 0 auto;
          ${s.flex('flex-start', 'center')};
          height: 100%;
          font-size: var(--sim-text-sm);
          color: var(--sim-text);
          cursor: pointer;
        }
      }
    }

    .array-input-group {
      display: flex;
      flex-direction: column;
      gap: var(--sim-space-xs);
      min-height: 40px;

      .array-input-item {
        ${s.flex('flex-start', 'center')};
        gap: var(--sim-space-xs);
        height: 100%;
      }
    }

    .form-switch {
      box-sizing: border-box;
      ${s.flex('flex-start', 'center')};
      padding: 4px;
      width: 60px;
      height: 32px;
      border-radius: var(--sim-radius-full);
      background-color: var(--sim-text-disabled);
      transition: background-color 0.3s ease;

      &.switched {
        background-color: var(--sim-button);

        .form-switch-bar {
          transform: translateX(28px);
        }
      }

      .form-switch-bar {
        width: 24px;
        height: 24px;
        border-radius: var(--sim-rounded);
        background-color: var(--sim-bg);
        cursor: pointer;
        transition: transform 0.3s ease;
        transform: translateX(0);
      }
    }
  }
`

export const ErrorText = styled.div`
  ${s.flex('flex-start', 'center')};
  width: auto;
  height: 24px;
  font-size: var(--sim-text-sm);
  color: var(--sim-red-5);
`
