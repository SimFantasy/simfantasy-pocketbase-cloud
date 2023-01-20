import React from 'react'
import { Author, Titlebar, PostList, PortfolioList, SnippetList, SiteList } from '@/components'
import { useFeatureQuery } from '@/hooks'
import {
  featurePostsLimit,
  featurePortfoliosLimit,
  featureSnippetsLimit,
  featureSitesLimit
} from '@/constants/settings'

const Home = () => {
  const { data: featurePostsData, isLoading: featurePostsIsLoading } = useFeatureQuery(
    'posts',
    featurePostsLimit
  )

  const { data: featurePortfoliosData, isLoading: featurePortfoliosIsLoading } = useFeatureQuery(
    'portfolios',
    featurePortfoliosLimit
  )

  const { data: featureSnippetsData, isLoading: featureSnippetsIsLoading } = useFeatureQuery(
    'snippets',
    featureSnippetsLimit
  )

  const { data: featureSitesData, isLoading: featureSitesIsLoading } = useFeatureQuery(
    'sites',
    featureSitesLimit
  )

  return (
    <div className='container'>
      <section className='page-block'>
        <Author />
      </section>

      <section className='page-block'>
        <Titlebar title='Posts' link='/posts' />
        <PostList
          data={featurePostsData}
          loading={featurePostsIsLoading}
          limit={featurePostsLimit}
        />
      </section>

      <section className='page-block'>
        <Titlebar title='Portfolios' link='/portfolios' />
        <PortfolioList
          data={featurePortfoliosData}
          loading={featurePortfoliosIsLoading}
          limit={featurePortfoliosLimit}
        />
      </section>

      <section className='page-block'>
        <Titlebar title='Snippets' link='/snippets' />
        <SnippetList
          data={featureSnippetsData}
          loading={featureSnippetsIsLoading}
          limit={featureSnippetsLimit}
        />
      </section>

      <section className='page-block'>
        <Titlebar title='Sites' link='/sites' />
        <SiteList
          data={featureSitesData}
          loading={featureSitesIsLoading}
          limit={featureSitesLimit}
        />
      </section>
    </div>
  )
}

export default Home
