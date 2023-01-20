import React from 'react'
import { useQuery } from '@tanstack/react-query'
import fantasyApi from '@/service/apis'
import { featurePostsLimit } from '@/constants/settings'

const useFeatureQuery = (collection, perPage) => {
  return useQuery([`feature/${collection}`], () =>
    fantasyApi.Base.list(collection, 1, perPage, {
      filter: 'isFeature = true',
      sort: '-created',
      expand: 'category'
    })
  )
}

export default useFeatureQuery
