import { useRoutes, Navigate } from 'react-router-dom'

import Layout from '@/pages/Layout'
import Home from '@/pages/Home'
import Posts from '@/pages/Home/Posts'
import Post from '@/pages/Home/Post'
import Portfolios from '@/pages/Home/Portfolios'
import Portfolio from '@/pages/Home/Portfolio'
import Snippets from '@/pages/Home/Snippets'
import Snippet from '@/pages/Home/Snippet'
import Sites from '@/pages/Home/Sites'
import Site from '@/pages/Home/Site'
import Page from '@/pages/Home/Page'

import Login from '@/pages/Login'

import PostEditor from '@/pages/Manage/Post'
import PortfolioEditor from '@/pages/Manage/Portfolio'
import SnippetEditor from '@/pages/Manage/Snippet'
import SiteEditor from '@/pages/Manage/Site'
import PageEditor from '@/pages/Manage/Page'

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Navigate to='/home' /> },
      { path: '/home', element: <Home /> },
      { path: '/posts', element: <Posts /> },
      { path: '/post/:id/:slug', element: <Post /> },
      { path: '/portfolios', element: <Portfolios /> },
      { path: '/portfolio/:id/:slug', element: <Portfolio /> },
      { path: '/snippets', element: <Snippets /> },
      { path: '/snippet/:id/:slug', element: <Snippet /> },
      { path: '/sites', element: <Sites /> },
      { path: '/site/:id/:slug', element: <Site /> },
      { path: '/:id/:slug', element: <Page /> },
      { path: '/manage/post/create', element: <PostEditor /> },
      { path: '/manage/post/:id', element: <PostEditor /> },
      { path: '/manage/portfolio/create', element: <PortfolioEditor /> },
      { path: '/manage/portfolio/:id', element: <PortfolioEditor /> },
      { path: '/manage/snippet/create', element: <SnippetEditor /> },
      { path: '/manage/snippet/:id', element: <SnippetEditor /> },
      { path: '/manage/site/create', element: <SiteEditor /> },
      { path: '/manage/site/:id', element: <SiteEditor /> },
      { path: '/manage/page/create', element: <PageEditor /> },
      { path: '/manage/page/:id', element: <PageEditor /> }
    ]
  },
  { path: '/login', element: <Login /> }
  // {
  //   path: '/manage',
  //   element: <ManageLayout />,
  //   children: [
  //     { path: '/manage', element: <Navigate to='/manage/dashboard' /> },
  //     { path: '/manage/dashboard', element: <Dashboard /> },
  //     { path: '/manage/post/create', element: <PostEditor /> },
  //     { path: '/manage/post/:id', element: <PostEditor /> },
  //     { path: '/manage/portfolio/create', element: <PortfolioEditor /> },
  //     { path: '/manage/portfolio/:id', element: <PortfolioEditor /> },
  //     { path: '/manage/snippet/create', element: <SnippetEditor /> },
  //     { path: '/manage/snippet/:id', element: <SnippetEditor /> },
  //     { path: '/manage/site/create', element: <SiteEditor /> },
  //     { path: '/manage/site/:id', element: <SiteEditor /> },
  //     { path: '/manage/page/create', element: <PageEditor /> },
  //     { path: '/manage/page/:id', element: <PageEditor /> }
  //   ]
  // }
]

const RootRoutes = () => {
  const router = useRoutes(routes)
  return router
}

export default RootRoutes
