import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {
  RiCalendar2Line,
  RiFolder2Line,
  RiLinkM,
  RiEdit2Line,
  RiDeleteBinLine
} from 'react-icons/ri'
import { useDetailQuery, useAuth, useDeleteMutation } from '@/hooks'
import { Spin, MarkdownContent, Maybe } from '@/components'
import { fullDateFormat, serializationString } from '@/utils'
import { PortfolioWrap } from './style'

const Portfolio = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isAuth } = useAuth()
  const { data, isLoading } = useDetailQuery('portfolios')
  const { mutate } = useDeleteMutation('portfolios')
  if (isLoading)
    return (
      <PortfolioWrap>
        <div className='container portfolio-container'>
          <Spin />
        </div>
      </PortfolioWrap>
    )

  const { coverImage, title, created, expand, content, tags, gallery, link } = data

  const handleDelete = () => {
    mutate(id, {
      onSuccess: () => {
        navigate('/portfolios')
      }
    })
  }

  return (
    <PortfolioWrap>
      <div className='container portfolio-container'>
        <div className='portfolio-cover'>
          <img src={coverImage} />
        </div>
        <div className='portfolio-title'>{title}</div>
        <div className='portfolio-info'>
          <div className='info-item'>
            <RiCalendar2Line />
            {fullDateFormat(created)}
          </div>
          <div className='info-item'>
            <RiFolder2Line />
            {expand?.category?.name}
          </div>
          <Maybe state={isAuth}>
            <div className='info-item pointer' onClick={handleDelete}>
              <RiDeleteBinLine />
              Delete
            </div>
            <Link to={`/manage/portfolio/${id}`} className='info-item'>
              <RiEdit2Line />
              Edit
            </Link>
          </Maybe>
        </div>
        <div className='portfolio-introduction'>
          <MarkdownContent source={content} />
        </div>
        {link && (
          <div className='portfolio-links'>
            <a href={link} target='_blank' rel='noopener noreferrer' className='portfolio-link-btn'>
              <RiLinkM />
              Portfolio Link
            </a>
          </div>
        )}

        <div className='portfolio-tags'>
          {serializationString(tags)?.map((tag, index) => (
            <div className='tag-item' key={index}>
              {tag}
            </div>
          ))}
        </div>
        <div className='divider'></div>
        {gallery?.images && (
          <div className='portfolio-gallery'>
            {gallery?.images?.map((item, index) => (
              <div className='gallery-item' key={index}>
                <div className='gallery-item-image'>
                  <img src={item.image} />
                </div>
                {item.title && <div className='gallery-item-title'>{item.title}</div>}
              </div>
            ))}
          </div>
        )}

        <div className='divider'></div>
      </div>
    </PortfolioWrap>
  )
}

export default Portfolio
