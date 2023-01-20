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
import Pages from '@/pages/Home/Pages'
import Page from '@/pages/Home/Page'

import Login from '@/pages/Login'

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
      { path: '/pages', element: <Pages /> },
      { path: '/:id/:slug', element: <Page /> }
    ]
  },
  { path: '/login', element: <Login /> }
]

const RootRoutes = () => {
  const router = useRoutes(routes)
  return router
}

export default RootRoutes
