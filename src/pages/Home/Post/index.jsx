import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { RiCalendar2Line, RiFolder2Line, RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri'
import { useDetailQuery, useAuth, useDeleteMutation } from '@/hooks'
import { MarkdownContent, Spin, Maybe } from '@/components'
import { fullDateFormat, serializationString } from '@/utils'
import { PostWrap } from './style'

const Post = () => {
  const { isAuth } = useAuth()
  const navigate = useNavigate()
  const { id } = useParams()
  const { data, isLoading } = useDetailQuery('posts')
  const { mutate } = useDeleteMutation('posts')
  if (isLoading)
    return (
      <PostWrap>
        <div className='container post-container'>
          <Spin />
        </div>
      </PostWrap>
    )
  const { content, coverImage, title, tags, created, expand } = data

  const handleDelete = () => {
    mutate(id, {
      onSuccess: () => {
        navigate('/posts')
      }
    })
  }

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
          <Maybe state={isAuth}>
            <div className='info-item pointer' onClick={handleDelete}>
              <RiDeleteBinLine />
              Delete
            </div>
            <Link to={`/manage/post/${id}`} className='info-item'>
              <RiEdit2Line />
              Edit
            </Link>
          </Maybe>
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
