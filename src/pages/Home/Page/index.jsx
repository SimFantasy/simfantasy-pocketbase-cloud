import React from 'react'
import { useDetailQuery } from '@/hooks'
import { Spin, MarkdownContent, ListTitlebar } from '@/components'
import { serializationString } from '@/utils'
import { PageWrap } from './style'

const Page = () => {
  const { data, isLoading } = useDetailQuery('pages')
  if (isLoading)
    return (
      <PageWrap>
        <div className='container portfolio-container'>
          <Spin />
        </div>
      </PageWrap>
    )

  console.log('data', data)

  const { title, coverImage, content, tags } = data

  return (
    <PageWrap>
      <div className='container page-container'>
        {coverImage && (
          <div className='page-cover'>
            <img src={coverImage} />
          </div>
        )}
        <ListTitlebar title={title} />
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
