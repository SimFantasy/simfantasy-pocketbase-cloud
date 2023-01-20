import React, { memo } from 'react'
import { useAuthorQuery } from '@/hooks'
import { Skeleton, Box } from '@/components'
import { avatarImage } from '@/utils'
import { AuthorWrap } from './style'

const Author = () => {
  const { data, isLoading } = useAuthorQuery()

  if (isLoading) {
    return (
      <AuthorWrap>
        <div className='author-container'>
          <Box display='flex' align='center' w='100%' gap='24px'>
            <Box w='64px' h='64px' flex='0 0 auto'>
              <Skeleton w='64px' h='64px' r='50%' />
            </Box>
            <Box flex='1' display='flex' col='column' gap='8px'>
              <Skeleton w='20%' h='16px' />
              <Skeleton w='80%' />
            </Box>
          </Box>
        </div>
      </AuthorWrap>
    )
  }

  return (
    <AuthorWrap>
      <div className='author-container'>
        <div className='author-avatar'>
          <img src={avatarImage(data?.avatar)} />
        </div>
        <div className='author-info'>
          <div className='author-username'>{data?.name}</div>
          <div className='author-bio'>{data?.bio}</div>
        </div>
      </div>
    </AuthorWrap>
  )
}

export default memo(Author)
