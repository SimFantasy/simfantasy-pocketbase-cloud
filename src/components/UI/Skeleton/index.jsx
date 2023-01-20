import React, { memo } from 'react'
import { SkeletonWrap } from './style'

const Skeleton = ({ w, h, r, m }) => {
  return <SkeletonWrap w={w} h={h} r={r} m={m} />
}

export default memo(Skeleton)
