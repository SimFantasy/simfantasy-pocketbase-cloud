import React from 'react'
import { useMutation } from '@tanstack/react-query'
import fantasyApi from '@/service/apis'

const useUpdateMutation = (collection, id, config) => {
  return useMutation(variables => fantasyApi.Base.update(collection, id, variables), config)
}

export default useUpdateMutation
