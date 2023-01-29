import React, { memo } from 'react'
import { Field, ErrorMessage } from 'formik'
import MDEditor from '@uiw/react-md-editor'
import { FormControlWrap, ErrorText } from './style'

const Editor = ({ label, name, ...rest }) => {
  return (
    <FormControlWrap className='form-control'>
      {label && (
        <label htmlFor={name} className='form-label'>
          {label}
        </label>
      )}
      <Field id={name} name={name} {...rest}>
        {({ field, form }) => (
          <MDEditor
            className='form-editor'
            {...rest}
            {...field}
            name={name}
            id={name}
            value={field.value}
            onChange={value => form.setFieldValue(name, value)}
            onBlur={event => form.setFieldTouched(name, true)}
            preview='edit'
          />
        )}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </FormControlWrap>
  )
}

export default memo(Editor)
