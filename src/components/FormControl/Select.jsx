import React, { memo } from 'react'
import { Field, ErrorMessage } from 'formik'
import { FormControlWrap, ErrorText } from './style'

const Select = ({ label, name, options, ...rest }) => {
  return (
    <FormControlWrap className='form-control'>
      {label && <label htmlFor={name}>{label}</label>}
      <Field as='select' id={name} name={name} {...rest} className='form-select'>
        <option value=''>Option</option>
        {options?.map(option => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </FormControlWrap>
  )
}

export default memo(Select)
