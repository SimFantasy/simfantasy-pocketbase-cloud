import React, { memo } from 'react'
import { Field, ErrorMessage } from 'formik'
import MarkdownEditor from '@uiw/react-markdown-editor'
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
          <MarkdownEditor
            className='form-editor'
            {...field}
            name={name}
            id={name}
            onChange={value => form.setFieldValue(name, value)}
            onBlur={event => form.setFieldTouched(name, true)}
          />
        )}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </FormControlWrap>
  )
}

export default memo(Editor)
