import React from 'react'
import { useQuery } from '@tanstack/react-query'
import fantasyApi from '@/service/apis'
import { authorId } from '@/constants/settings'

const useAuthorQuery = () => {
  return useQuery(['author', authorId], () => fantasyApi.Base.view('users', authorId), {
    keepPreviousData: true
  })
}

export default useAuthorQuery
