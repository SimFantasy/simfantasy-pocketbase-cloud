import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from '@/components'
import { LayoutWrap } from './style'

const Layout = () => {
  return (
    <LayoutWrap>
      <Header />
      <main className='layout-main'>
        <Outlet />
      </main>
      <Footer />
    </LayoutWrap>
  )
}

export default Layout
