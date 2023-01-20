import React, { useState, useEffect } from 'react'
import { useCategoriesQuery, useListQuery } from '@/hooks'
import { ListTitlebar, PostList, Pagination } from '@/components'
import { listPostsLimit } from '@/constants/settings'
import { PostsWrap } from './style'

const Posts = () => {
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState('')

  useEffect(() => {
    setPage(1)
  }, [category])

  const { data: categoriesData, isLoading: categoriesIsLoading } =
    useCategoriesQuery('postcategories')

  const { data: postsData, isLoading: postsIsLoading } = useListQuery(
    'posts',
    page,
    listPostsLimit,
    category
  )

  return (
    <PostsWrap>
      <div className='container posts-container'>
        <ListTitlebar
          title='Posts'
          navs={categoriesData}
          currentCategory={category}
          setCurrentCategory={setCategory}
          loading={categoriesIsLoading}
        />

        <PostList data={postsData} loading={postsIsLoading} limit={listPostsLimit} />
        {postsData?.totalItems > listPostsLimit && (
          <Pagination page={page} setPage={setPage} totalPages={postsData?.totalPages} />
        )}
      </div>
    </PostsWrap>
  )
}

export default Posts
