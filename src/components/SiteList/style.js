import styled from '@emotion/styled'
import s from '@/styles/global.style'

export const SiteListWrap = styled.div`
  .site-list-container {
    ${s.gridCols(3, '24px')};
    width: 100%;
  }

  @media (max-width: ${s['mobile-width']}) {
    .site-list-container {
      ${s.gridCols(1)};
    }
  }
`
