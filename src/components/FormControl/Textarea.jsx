import React, { memo } from 'react'
import { Field, ErrorMessage } from 'formik'
import { FormControlWrap, ErrorText } from './style'

const Textarea = ({ label, name, ...rest }) => {
  return (
    <FormControlWrap className='form-control'>
      {label && <label htmlFor={name}>{label}</label>}
      <Field as='textarea' id={name} name={name} {...rest} className='form-textarea' />
      <ErrorMessage name={name} component={ErrorText} />
    </FormControlWrap>
  )
}

export default memo(Textarea)
