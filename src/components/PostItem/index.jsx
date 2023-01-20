import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { RiCalendarTodoLine, RiFolder3Line } from 'react-icons/ri'
import { dateNowFormat } from '@/utils'
import { PostItemWrap } from './style'

const PostItem = ({ title, created, expand, description, id, slug }) => {
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
      </div>
      <div className='post-item-description'>{description}</div>
    </PostItemWrap>
  )
}

export default memo(PostItem)
