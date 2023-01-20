import React, { memo } from 'react'
import { PortfolioItem, Box, Skeleton } from '@/components'
import { limitMap } from '@/utils'
import { PortfolioListWrap } from './style'

const PortfolioList = ({ data, loading, limit }) => {
  if (loading)
    return (
      <Box display='flex' justify='space-between' gap='24px'>
        {limitMap(limit).map((_, index) => (
          <Box display='flex' col='column' w='30%' key={index}>
            <Skeleton h='120px' r='8px' />
            <Skeleton m='8px 0' />
            <Skeleton w='80%' />
          </Box>
        ))}
      </Box>
    )
  return (
    <PortfolioListWrap>
      <div className='portfolio-list-container'>
        {data?.items?.map(item => (
          <PortfolioItem key={item.id} {...item} />
        ))}
      </div>
    </PortfolioListWrap>
  )
}

export default memo(PortfolioList)
