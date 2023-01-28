import React, { memo } from 'react'
import { Field, ErrorMessage } from 'formik'
import { FormControlWrap, ErrorText } from './style'

const Input = ({ label, name, ...rest }) => {
  return (
    <FormControlWrap className='form-control'>
      {label && (
        <label htmlFor={name} className='form-label'>
          {label}
        </label>
      )}
      <Field name={name}>
        {({ field }) => (
          <input
            id={name}
            {...field}
            {...rest}
            value={field.value}
            onChange={field.onChange}
            className='form-input'
          />
        )}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </FormControlWrap>
  )
}

export default memo(Input)
