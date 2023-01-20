import styled from '@emotion/styled'
import s from '@/styles/global.style'

export const SnippetListWrap = styled.div`
  .snippet-list-container {
    ${s.gridCols(3, '24px')};
  }

  @media (max-width: ${s['mobile-width']}) {
    .snippet-list-container {
      ${s.gridCols(1)};
    }
  }
`
