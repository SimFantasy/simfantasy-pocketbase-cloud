import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { RiPencilLine, RiLogoutBoxRLine } from 'react-icons/ri'
import { useAuthorQuery, useAuth } from '@/hooks'
import { Skeleton, Box, Maybe } from '@/components'
import { createNavs } from '@/constants/navs'
import { avatarImage } from '@/utils'
import { AuthorWrap } from './style'

const Author = () => {
  const { data, isLoading } = useAuthorQuery()
  const { isAuth, logout } = useAuth()
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
        <Maybe state={isAuth}>
          <div className='create-btns'>
            {createNavs?.map(nav => (
              <Link to={nav.route} className='create-btn' key={nav.route}>
                <RiPencilLine />
                {nav.name}
              </Link>
            ))}
            <div className='create-btn' onClick={logout}>
              <RiLogoutBoxRLine />
              Logout
            </div>
          </div>
        </Maybe>
      </div>
    </AuthorWrap>
  )
}

export default memo(Author)
