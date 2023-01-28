import React, { useState, useEffect } from 'react'
import { useCategoriesQuery, useListQuery, useTitle } from '@/hooks'
import { ListTitlebar, PortfolioList, Pagination } from '@/components'
import { listPortfoliosLimit } from '@/constants/settings'
import { PortfoliosWrap } from './style'

const Portfolios = () => {
  useTitle('Portfolios')
  const [page, setPage] = useState(1)
  const [categort, setCategory] = useState('')
  useEffect(() => {
    setPage(1)
  }, [categort])

  const { data: categoriesData, isLoading: categoriesIsLoading } =
    useCategoriesQuery('portfoliocategories')

  const { data: portfoliosData, isLoading: portfoliosIsLoading } = useListQuery(
    'portfolios',
    page,
    listPortfoliosLimit,
    categort
  )
  return (
    <PortfoliosWrap>
      <div className='container portfolios-container'>
        <ListTitlebar
          title='Portfolios'
          navs={categoriesData}
          currentCategory={categort}
          setCurrentCategory={setCategory}
          loading={categoriesIsLoading}
        />

        <PortfolioList
          data={portfoliosData}
          isLoading={categoriesIsLoading}
          limit={listPortfoliosLimit}
          loading={portfoliosIsLoading}
        />
        {portfoliosData?.totalItems > listPortfoliosLimit && (
          <Pagination page={page} setPage={setPage} totalPages={portfoliosData?.totalPages} />
        )}
      </div>
    </PortfoliosWrap>
  )
}

export default Portfolios
