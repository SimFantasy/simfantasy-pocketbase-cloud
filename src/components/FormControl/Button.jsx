import React, { memo } from 'react'
import cx from 'clsx'
import { FormControlWrap } from './style'

const Button = ({ text, block, align = 'center', ...rest }) => {
  return (
    <FormControlWrap className={cx('form-control', `align-${align}`)}>
      <button className={cx('form-btn', { block: block })} type='submit' {...rest}>
        {text}
      </button>
    </FormControlWrap>
  )
}

export default memo(Button)
