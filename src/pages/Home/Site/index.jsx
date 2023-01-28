import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {
  RiCalendar2Line,
  RiFolder2Line,
  RiLinkM,
  RiEdit2Line,
  RiDeleteBinLine
} from 'react-icons/ri'
import { useDetailQuery, useAuth, useDeleteMutation } from '@/hooks'
import { MarkdownContent, Spin, Maybe } from '@/components'
import { fullDateFormat } from '@/utils'
import { SiteWrap } from './style'

const Site = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isAuth } = useAuth()
  const { data, isLoading } = useDetailQuery('sites')
  const { mutate } = useDeleteMutation('sites')
  if (isLoading)
    return (
      <SiteWrap>
        <div className='container site-container'>
          <Spin />
        </div>
      </SiteWrap>
    )

  const { title, content, created, expand, iconImage, link } = data

  const handleDelete = () => {
    mutate(id, {
      onSuccess: () => {
        navigate('/sites')
      }
    })
  }

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
            <Maybe state={isAuth}>
              <div className='info-item pointer' onClick={handleDelete}>
                <RiDeleteBinLine />
                Delete
              </div>
              <Link to={`/manage/site/${id}`} className='info-item'>
                <RiEdit2Line />
                Edit
              </Link>
            </Maybe>
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
