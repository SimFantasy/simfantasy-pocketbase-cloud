import React, { useCallback, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { RiArrowGoBackLine } from 'react-icons/ri'
import { ManageTitleWrap } from './style'

const ManageTitle = ({ title }) => {
  const navigate = useNavigate()
  const handleBackToList = useCallback(() => {
    navigate(-1)
  })
  return (
    <ManageTitleWrap>
      <div className='title'>{title}</div>
      <div className='back-btn' onClick={handleBackToList}>
        <RiArrowGoBackLine />
        Back to list
      </div>
    </ManageTitleWrap>
  )
}

export default memo(ManageTitle)
