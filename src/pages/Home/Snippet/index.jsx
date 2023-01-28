import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { RiCalendar2Line, RiFolder2Line, RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri'
import { useDetailQuery, useAuth, useDeleteMutation } from '@/hooks'
import { MarkdownContent, Spin, Maybe } from '@/components'
import { fullDateFormat, serializationString } from '@/utils'
import { SnippetWrap } from './style'

const Snippet = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isAuth } = useAuth()
  const { data, isLoading } = useDetailQuery('snippets')
  const { mutate } = useDeleteMutation('snippets')
  if (isLoading)
    return (
      <SnippetWrap>
        <div className='container snippet-container'>
          <Spin />
        </div>
      </SnippetWrap>
    )
  const { title, content, tags, created, expand } = data

  const handleDelete = () => {
    mutate(id, {
      onSuccess: () => {
        navigate('/snippets')
      }
    })
  }

  return (
    <SnippetWrap>
      <div className='container snippet-container'>
        <div className='snippet-title'>{title}</div>
        <div className='snippet-info'>
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
            <Link to={`/manage/snippet/${id}`} className='info-item'>
              <RiEdit2Line />
              Edit
            </Link>
          </Maybe>
        </div>
        <div className='snippet-content'>
          <MarkdownContent source={content} />
        </div>
        <div className='snippet-tags'>
          {serializationString(tags)?.map((tag, index) => (
            <div className='tag-item' key={index}>
              {tag}
            </div>
          ))}
        </div>

        <div className='divider'></div>
      </div>
    </SnippetWrap>
  )
}

export default Snippet
