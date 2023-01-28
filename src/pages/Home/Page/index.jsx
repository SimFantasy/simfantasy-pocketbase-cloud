import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri'
import { useDetailQuery, useAuth, useDeleteMutation } from '@/hooks'
import { Spin, MarkdownContent, ListTitlebar, Maybe } from '@/components'
import { serializationString } from '@/utils'
import { PageWrap } from './style'

const Page = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isAuth } = useAuth()
  const { data, isLoading } = useDetailQuery('pages')
  const { mutate } = useDeleteMutation('pages')
  if (isLoading)
    return (
      <PageWrap>
        <div className='container portfolio-container'>
          <Spin />
        </div>
      </PageWrap>
    )

  const { title, coverImage, content, tags } = data

  const handleDelete = () => {
    mutate(id, {
      onSuccess: () => {
        navigate('/home')
      }
    })
  }

  return (
    <PageWrap>
      <div className='container page-container'>
        {coverImage && (
          <div className='page-cover'>
            <img src={coverImage} />
          </div>
        )}
        <ListTitlebar title={title} />
        <Maybe state={isAuth}>
          <div className='post-info'>
            <div className='info-item pointer' onClick={handleDelete}>
              <RiDeleteBinLine />
              Delete
            </div>
            <Link to={`/manage/page/${id}`} className='info-item'>
              <RiEdit2Line />
              Edit
            </Link>
          </div>
        </Maybe>
        <div className='page-content'>
          <MarkdownContent source={content} />
        </div>
        <div className='page-tags'>
          {serializationString(tags).map((tag, index) => (
            <div className='tag-item' key={index}>
              {tag}
            </div>
          ))}
        </div>
        <div className='divider'></div>
      </div>
    </PageWrap>
  )
}

export default Page
