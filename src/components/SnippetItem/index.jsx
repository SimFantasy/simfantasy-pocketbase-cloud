import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { RiEdit2Line } from 'react-icons/ri'
import { useAuth } from '@/hooks'
import { Maybe } from '@/components'
import { snippetIcon } from '@/utils'
import { SnippetItemWrap } from './style'

const SnippetItem = ({ id, slug, expand, title }) => {
  const { isAuth } = useAuth()
  return (
    <SnippetItemWrap>
      <div className='snippet-item-category'>
        <div className='category-icon'>{snippetIcon(expand?.category?.slug)}</div>
        <div className='category-text'>{expand?.category?.name}</div>
        <Maybe state={isAuth}>
          <Link to={`/manage/snippet/${id}`} className='snippet-btn'>
            <RiEdit2Line />
            Edit
          </Link>
        </Maybe>
      </div>
      <Link to={`/snippet/${id}/${slug}`} className='snippet-item-title'>
        {title}
      </Link>
    </SnippetItemWrap>
  )
}

export default memo(SnippetItem)
