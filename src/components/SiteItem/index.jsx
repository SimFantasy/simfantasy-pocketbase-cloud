import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { SiteItemWrap } from './style'

const SiteItem = ({ id, slug, link, iconImage, title, description }) => {
  return (
    <SiteItemWrap>
      <div className='site-item-container'>
        <Link to={`/site/${id}/${slug}`} className='site-item-titlebar'>
          <div className='site-item-cover'>
            <img src={iconImage} />
          </div>
          <div className='site-item-title'>{title}</div>
        </Link>
        <div className='site-item-description'>{description}</div>
        <div className='site-item-btns'>
          <a href={link} target='_blank' rel='noopener noreferrer' className='site-item-link'>
            Site link
          </a>
        </div>
      </div>
    </SiteItemWrap>
  )
}

export default memo(SiteItem)
