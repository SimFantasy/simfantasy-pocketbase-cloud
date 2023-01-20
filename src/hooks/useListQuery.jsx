import React, { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import fantasyApi from '@/service/apis'

const useListQuery = (collection, page, perPage, category, config) => {
  const [filterQuery, setFilterQuery] = useState(`category != ''`)

  useEffect(() => {
    if (category !== '') {
      setFilterQuery(`category = '${category}'`)
    } else {
      setFilterQuery(`category != ''`)
    }
  }, [category])

  return useQuery(
    [`list/${collection}`, page, category, filterQuery],
    () =>
      fantasyApi.Base.list(collection, page, perPage, {
        sort: '-created',
        expand: 'category',
        $autoCancel: false,
        filter: `${filterQuery}`
      }),
    {
      keepPreviousData: true,
      ...config
    }
  )
}

export default useListQuery
