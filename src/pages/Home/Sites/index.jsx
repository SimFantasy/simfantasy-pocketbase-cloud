import React, { useState, useEffect } from 'react'
import { useCategoriesQuery, useListQuery } from '@/hooks'
import { ListTitlebar, SiteList, Pagination } from '@/components'
import { listSitesLimit } from '@/constants/settings'
import { SitesWrap } from './style'

const Sites = () => {
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState('')

  useEffect(() => {
    setPage(1)
  }, [category])

  const { data: categoriesData, isLoading: categoriesIsLoading } =
    useCategoriesQuery('sitecategories')

  const { data: sitesData, isLoading: sitesIsLoading } = useListQuery(
    'sites',
    page,
    listSitesLimit,
    category
  )

  return (
    <SitesWrap>
      <div className='container posts-container'>
        <ListTitlebar
          title='Posts'
          navs={categoriesData}
          currentCategory={category}
          setCurrentCategory={setCategory}
          loading={categoriesIsLoading}
        />

        <SiteList data={sitesData} loading={sitesIsLoading} limit={listSitesLimit} />
        {sitesData?.totalItems > listSitesLimit && (
          <Pagination page={page} setPage={setPage} totalPages={sitesData?.totalPages} />
        )}
      </div>
    </SitesWrap>
  )
}

export default Sites
