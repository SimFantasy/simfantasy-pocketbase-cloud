import React from 'react'
import { useQuery } from '@tanstack/react-query'
import fantasyApi from '@/service/apis'

const useCategoriesQuery = collection => {
  return useQuery([`${collection}`], () => fantasyApi.Base.all(collection))
}

export default useCategoriesQuery
