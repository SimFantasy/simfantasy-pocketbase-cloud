import React, { memo, useCallback } from 'react'
import cx from 'clsx'
import { Box, Skeleton } from '@/components'
import { ListTitlebarWrap } from './style'

const ListTitlebar = ({ title, navs, currentCategory, setCurrentCategory, loading }) => {
  const handleCategory = useCallback(categoryId => {
    setCurrentCategory(categoryId)
  })

  if (loading)
    return (
      <Box display='flex' justify='space-between' h='48px'>
        <Skeleton w='24%' h='24px' />
        <Box flex='1' display='flex' justify='flex-end' gap='8px'>
          <Skeleton w='32px' h='24px' />
          <Skeleton w='32px' h='24px' />
          <Skeleton w='32px' h='24px' />
          <Skeleton w='32px' h='24px' />
        </Box>
      </Box>
    )
  return (
    <ListTitlebarWrap>
      <div className='title'>{title}</div>
      {navs && (
        <div className='title-navs'>
          <div
            className={cx('title-nav-item', { active: currentCategory === '' })}
            onClick={() => handleCategory('')}
          >
            All
          </div>
          {navs?.map(nav => (
            <div
              key={nav.id}
              className={cx('title-nav-item', { active: currentCategory === nav.id })}
              onClick={() => handleCategory(nav.id)}
            >
              {nav.name}
            </div>
          ))}
        </div>
      )}
    </ListTitlebarWrap>
  )
}

export default memo(ListTitlebar)
