import React, { useState, useEffect } from 'react'
import { useListQuery, useCategoriesQuery } from '@/hooks'
import { SnippetList, ListTitlebar, Pagination } from '@/components'
import { listSnippetsLimit } from '@/constants/settings'
import { SnippetsWrap } from './style'

const Snipptes = () => {
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState('')

  useEffect(() => {
    setPage(1)
  }, [category])

  const { data: categoriesData, isLoading: categoriesIsLoading } =
    useCategoriesQuery('snippetCategories')

  const { data: snippetsData, isLoading: snippetsIsLoading } = useListQuery(
    'snippets',
    page,
    listSnippetsLimit,
    category
  )

  return (
    <SnippetsWrap>
      <div className='container snippets-container'>
        <ListTitlebar
          title='Posts'
          navs={categoriesData}
          currentCategory={category}
          setCurrentCategory={setCategory}
          loading={categoriesIsLoading}
        />

        <SnippetList data={snippetsData} loading={snippetsIsLoading} limit={listSnippetsLimit} />
        {snippetsData?.totalItems > listSnippetsLimit && (
          <Pagination page={page} setPage={setPage} totalPages={snippetsData?.totalPages} />
        )}
      </div>
    </SnippetsWrap>
  )
}

export default Snipptes
