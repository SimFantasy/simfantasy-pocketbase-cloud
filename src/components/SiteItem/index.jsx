import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { RiEdit2Line } from 'react-icons/ri'
import { useAuth } from '@/hooks'
import { Maybe } from '@/components'
import { SiteItemWrap } from './style'

const SiteItem = ({ id, slug, link, iconImage, title, description }) => {
  const { isAuth } = useAuth()
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
          <Maybe state={isAuth}>
            <Link to={`/manage/site/${id}`} className='site-item-link'>
              <RiEdit2Line />
              Edit
            </Link>
          </Maybe>
          <a href={link} target='_blank' rel='noopener noreferrer' className='site-item-link'>
            Site link
          </a>
        </div>
      </div>
    </SiteItemWrap>
  )
}

export default memo(SiteItem)
