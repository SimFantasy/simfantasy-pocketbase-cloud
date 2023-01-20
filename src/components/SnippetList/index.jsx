import React, { memo } from 'react'
import { SnippetItem, Box, Skeleton } from '@/components'
import { limitMap } from '@/utils'
import { SnippetListWrap } from './style'

const SnippetList = ({ data, loading, limit }) => {
  if (loading)
    return (
      <Box display='flex' justify='space-between'>
        {limitMap(limit).map((_, index) => (
          <Box display='flex' col='column' gap='4px' w='30%' key={index}>
            <Box display='flex' align='center' gap='8px'>
              <Skeleton w='18px' h='18px' r='50%' />
              <Skeleton w='20%' />
            </Box>
            <Skeleton m='8px 0 4px 0' />
            <Skeleton w='80%' />
          </Box>
        ))}
      </Box>
    )

  return (
    <SnippetListWrap>
      <div className='snippet-list-container'>
        {data?.items?.map(item => (
          <SnippetItem key={item.id} {...item} />
        ))}
      </div>
    </SnippetListWrap>
  )
}

export default memo(SnippetList)
