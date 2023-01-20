import React from 'react'
import { RiCalendar2Line, RiFolder2Line } from 'react-icons/ri'
import { useDetailQuery } from '@/hooks'
import { MarkdownContent, Spin } from '@/components'
import { fullDateFormat, serializationString } from '@/utils'
import { SnippetWrap } from './style'

const Snippet = () => {
  const { data, isLoading } = useDetailQuery('snippets')
  if (isLoading)
    return (
      <SnippetWrap>
        <div className='container snippet-container'>
          <Spin />
        </div>
      </SnippetWrap>
    )
  const { title, content, tags, created, expand } = data

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
