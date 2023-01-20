import React, { memo } from 'react'
import { SiteItem, Box, Skeleton } from '@/components'
import { limitMap } from '@/utils'
import { SiteListWrap } from './style'

const SiteList = ({ data, loading, limit }) => {
  if (loading)
    return (
      <Box display='flex' justify='space-between'>
        {limitMap(limit).map((_, index) => (
          <Box display='flex' col='column' gap='4px' w='30%' key={index}>
            <Box display='flex' align='center' gap='8px'>
              <Skeleton w='18px' h='18px' r='50%' />
              <Skeleton w='20%' />
            </Box>
            <Box display='flex' col='column' gap='4px' m='8px 0 4px 0'>
              <Skeleton />
              <Skeleton w='80%' />
            </Box>
            <Box display='flex' justify='flex-end'>
              <Skeleton w='24%' h='24px' />
            </Box>
          </Box>
        ))}
      </Box>
    )
  return (
    <SiteListWrap>
      <div className='site-list-container'>
        {data?.items?.map(item => (
          <SiteItem key={item.id} {...item} />
        ))}
      </div>
    </SiteListWrap>
  )
}

export default memo(SiteList)
