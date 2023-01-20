import React, { memo } from 'react'
import { siteName } from '@/constants/settings'
import { FooterWrap } from './style'

const Footer = () => {
  return (
    <FooterWrap>
      <section className='container footer-container'>
        <div className='copyright'>© 2022 {siteName}</div>
        <div className='powered-by'>Created By: sim</div>
      </section>
    </FooterWrap>
  )
}

export default memo(Footer)
