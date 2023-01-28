import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { RiCalendarTodoLine, RiFolder3Line, RiEdit2Line } from 'react-icons/ri'
import { dateNowFormat } from '@/utils'
import { useAuth } from '@/hooks'
import { Maybe } from '@/components'
import { PostItemWrap } from './style'

const PostItem = ({ title, created, expand, description, id, slug }) => {
  const { isAuth } = useAuth()
  return (
    <PostItemWrap>
      <Link to={`/post/${id}/${slug}`} className='post-item-title'>
        {title}
      </Link>
      <div className='post-item-info'>
        <div className='info-item'>
          <RiCalendarTodoLine />
          {dateNowFormat(created)}
        </div>
        <div className='info-item'>
          <RiFolder3Line />
          {expand?.category?.name}
        </div>
        <Maybe state={isAuth}>
          <Link to={`/manage/post/${id}`} className='info-item'>
            <RiEdit2Line />
            Edit
          </Link>
        </Maybe>
      </div>
      <div className='post-item-description'>{description}</div>
    </PostItemWrap>
  )
}

export default memo(PostItem)
