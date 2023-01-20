import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { snippetIcon } from '@/utils'
import { SnippetItemWrap } from './style'

const SnippetItem = ({ id, slug, expand, title }) => {
  return (
    <SnippetItemWrap>
      <div className='snippet-item-category'>
        <div className='category-icon'>{snippetIcon(expand?.category?.slug)}</div>
        <div className='category-text'>{expand?.category?.name}</div>
      </div>
      <Link to={`/snippet/${id}/${slug}`} className='snippet-item-title'>
        {title}
      </Link>
    </SnippetItemWrap>
  )
}

export default memo(SnippetItem)
