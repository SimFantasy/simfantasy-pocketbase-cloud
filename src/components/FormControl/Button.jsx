import React, { memo } from 'react'
import cx from 'clsx'
import { FormControlWrap } from './style'

const Button = ({ text, block, ...rest }) => {
  return (
    <FormControlWrap className='form-control align-center'>
      <button className={cx('form-btn', { block: block })} type='submit' {...rest}>
        {text}
      </button>
    </FormControlWrap>
  )
}

export default memo(Button)
