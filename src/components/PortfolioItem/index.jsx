import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { PortfolioItemWrap } from './style'

const PortfolioItem = ({ id, slug, coverImage, title }) => {
  return (
    <PortfolioItemWrap>
      <Link to={`/portfolio/${id}/${slug}`} className='portfolio-item-cover'>
        <div className='portfolio-item-image'>
          <img src={coverImage} />
        </div>
      </Link>
      <Link to={`/portfolio/${id}/${slug}`} className='portfolio-item-title'>
        {title}
      </Link>
    </PortfolioItemWrap>
  )
}

export default memo(PortfolioItem)
