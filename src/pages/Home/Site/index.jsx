import React from 'react'
import { RiCalendar2Line, RiFolder2Line, RiLinkM } from 'react-icons/ri'
import { useDetailQuery } from '@/hooks'
import { MarkdownContent, Spin } from '@/components'
import { fullDateFormat, serializationString } from '@/utils'
import { SiteWrap } from './style'

const Site = () => {
  const { data, isLoading } = useDetailQuery('sites')
  if (isLoading)
    return (
      <SiteWrap>
        <div className='container site-container'>
          <Spin />
        </div>
      </SiteWrap>
    )

  const { title, content, created, expand, iconImage, link } = data
  return (
    <SiteWrap>
      <div className='container site-container'>
        <div className='site-content'>
          <div className='site-titlebar'>
            <div className='site-icon'>
              <img src={iconImage} />
            </div>
            <div className='site-title'>{title}</div>
          </div>
          <div className='site-info'>
            <div className='info-item'>
              <RiCalendar2Line />
              {fullDateFormat(created)}
            </div>
            <div className='info-item'>
              <RiFolder2Line />
              {expand?.category?.name}
            </div>
          </div>
          <div className='site-content'>
            <MarkdownContent source={content} />
          </div>
          <div className='site-link'>
            <a href={link} target='_blank' rel='noopener noreferrer' className='link-btn'>
              <RiLinkM />
              Site Link
            </a>
          </div>

          <div className='divider'></div>
        </div>
      </div>
    </SiteWrap>
  )
}

export default Site
