import React, { memo } from 'react'
import { PostItem, Box, Skeleton } from '@/components'
import { limitMap } from '@/utils'
import { PostListWrap } from './style'

const PostList = ({ data, loading, limit }) => {
  if (loading)
    return (
      <Box display='flex' col='column' gap='24px'>
        {limitMap(limit).map((_, index) => (
          <Box display='flex' col='column' key={index}>
            <Skeleton h='16px' />
            <Skeleton w='32%' m='8px 0 16px 0' />
            <Skeleton />
            <Skeleton m='8px 0' />
            <Skeleton w='80%' />
          </Box>
        ))}
      </Box>
    )

  return (
    <PostListWrap>
      <div className='post-list-container'>
        {data?.items?.map(item => (
          <PostItem key={item.id} {...item} />
        ))}
      </div>
    </PostListWrap>
  )
}

export default memo(PostList)
