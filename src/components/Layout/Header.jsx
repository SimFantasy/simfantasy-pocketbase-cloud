import React, { useState, memo } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import cx from 'clsx'
import {
  RiTyphoonFill,
  RiMenuLine,
  RiCloseLine,
  RiLogoutBoxRLine,
  RiPencilLine
} from 'react-icons/ri'
import { useScrollLock, useTheme, useAuth } from '@/hooks'
import { Maybe } from '@/components'
import { siteName } from '@/constants/settings'
import { headerNavs, createNavs } from '@/constants/navs'
import { HeaderWrap } from './style'

const Header = () => {
  const navigate = useNavigate()
  const { theme, toggleTheme } = useTheme()
  const { lockState, toggleLock } = useScrollLock()
  const [isNavVisible, setIsNavVisible] = useState(false)
  const { isAuth, logout } = useAuth()

  const handleToggleNav = () => {
    setIsNavVisible(!isNavVisible)
    toggleLock()
  }

  const handleClickNavLink = () => {
    setIsNavVisible(false)
    toggleLock()
  }

  const handleLogout = () => {
    logout()
    setIsNavVisible(false)
    toggleLock()
    navigate('/home')
  }

  return (
    <HeaderWrap>
      <section className='container header-container'>
        <div className='logo'>
          <RiTyphoonFill size={32} />
          <div className='logo-text'>{siteName}</div>
        </div>
        <nav className='navs'>
          {headerNavs.map(nav => (
            <NavLink to={nav.route} className='nav-item' key={nav.route}>
              {nav.name}
            </NavLink>
          ))}
        </nav>

        <div className={cx('theme-btn', { dark: theme === 'dark' })} onClick={toggleTheme}></div>

        <section className='m-nav-container'>
          <div className='m-nav-btn' onClick={handleToggleNav}>
            {isNavVisible ? <RiCloseLine /> : <RiMenuLine />}
          </div>
          <div className={cx('m-nav-main', { active: isNavVisible })}>
            <nav className='m-navs'>
              {headerNavs.map(nav => (
                <NavLink
                  to={nav.route}
                  className='m-nav-item'
                  key={nav.route}
                  onClick={handleClickNavLink}
                >
                  {nav.name}
                </NavLink>
              ))}
              <div className='divider'></div>
              <Maybe state={isAuth}>
                {createNavs?.map(nav => (
                  <Link
                    to={nav.route}
                    className='m-nav-item'
                    key={nav.route}
                    onClick={handleClickNavLink}
                  >
                    <RiPencilLine />
                    {nav.name}
                  </Link>
                ))}
                <div className='m-nav-item' onClick={handleLogout}>
                  <RiLogoutBoxRLine />
                  Logout
                </div>
              </Maybe>
            </nav>
          </div>
        </section>
      </section>
    </HeaderWrap>
  )
}

export default memo(Header)
