import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { RiArrowDropRightLine } from 'react-icons/ri'
import { TitlebarWrap } from './style'

const Titlebar = ({ title, link }) => {
  return (
    <TitlebarWrap>
      <div className='titlebar-container'>
        <div className='title'>{title}</div>
        <Link to={link} className='more-info'>
          <div className='more-text'>view more</div>
          <RiArrowDropRightLine />
        </Link>
      </div>
    </TitlebarWrap>
  )
}

export default memo(Titlebar)
