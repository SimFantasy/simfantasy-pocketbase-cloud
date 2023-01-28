import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { RiEdit2Line } from 'react-icons/ri'
import { useAuth } from '@/hooks'
import { Maybe } from '@/components'
import { PortfolioItemWrap } from './style'

const PortfolioItem = ({ id, slug, coverImage, title }) => {
  const { isAuth } = useAuth()
  return (
    <PortfolioItemWrap>
      <div className='portfolio-item-cover'>
        <Link to={`/portfolio/${id}/${slug}`} className='portfolio-item-image'>
          <img src={coverImage} />
        </Link>
        <Maybe state={isAuth}>
          <Link to={`/manage/portfolio/${id}`} className='portfolio-item-btn'>
            <RiEdit2Line />
            Edit
          </Link>
        </Maybe>
      </div>
      <Link to={`/portfolio/${id}/${slug}`} className='portfolio-item-title'>
        {title}
      </Link>
    </PortfolioItemWrap>
  )
}

export default memo(PortfolioItem)
