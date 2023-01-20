import React from 'react'
import { RiCalendar2Line, RiFolder2Line } from 'react-icons/ri'
import { useDetailQuery } from '@/hooks'
import { MarkdownContent, Spin } from '@/components'
import { fullDateFormat, serializationString } from '@/utils'
import { PostWrap } from './style'

const Post = () => {
  const { data, isLoading } = useDetailQuery('posts')
  if (isLoading)
    return (
      <PostWrap>
        <div className='container post-container'>
          <Spin />
        </div>
      </PostWrap>
    )
  const { content, coverImage, title, tags, created, expand } = data

  return (
    <PostWrap>
      <div className='container post-container'>
        {coverImage && (
          <div className='post-cover'>
            <img src={coverImage} />
          </div>
        )}
        <div className='post-title'>{title}</div>
        <div className='post-info'>
          <div className='info-item'>
            <RiCalendar2Line />
            {fullDateFormat(created)}
          </div>
          <div className='info-item'>
            <RiFolder2Line />
            {expand?.category?.name}
          </div>
        </div>
        <div className='post-content'>
          <MarkdownContent source={content} />
        </div>
        <div className='post-tags'>
          {serializationString(tags).map((tag, index) => (
            <div className='tag-item' key={index}>
              {tag}
            </div>
          ))}
        </div>
        <div className='divider'></div>
      </div>
    </PostWrap>
  )
}

export default Post
