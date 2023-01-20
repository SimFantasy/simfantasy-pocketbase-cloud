import styled from '@emotion/styled'
import s from '@/styles/global.style'

export const PortfolioListWrap = styled.div`
  .portfolio-list-container {
    ${s.gridCols(3)};
    gap: ${s['space-md']};
    width: 100%;
  }

  @media (max-width: ${s['mobile-width']}) {
    .portfolio-list-container {
      ${s.gridCols(1)};
    }
  }
`
