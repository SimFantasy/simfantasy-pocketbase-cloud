import React, { useState, memo, useEffect } from 'react'
import { Field, ErrorMessage } from 'formik'
import cx from 'clsx'
import { FormControlWrap, ErrorText } from './style'

const Switch = ({ label, name, ...rest }) => {
  return (
    <FormControlWrap className='form-control'>
      {label && (
        <label htmlFor={name} className='form-label'>
          {label}
        </label>
      )}
      <Field name={name}>
        {({ field, form, meta }) => {
          const handleClick = () => {
            form.setFieldValue(name, !field.values)
          }
          return (
            <div className={cx('form-switch', { switched: field.value })}>
              <input
                id={name}
                type='checkbox'
                {...field}
                {...rest}
                checked={field.value}
                hidden
                onClick={handleClick}
              />
              <label htmlFor={name} className='form-switch-bar'></label>
            </div>
          )
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </FormControlWrap>
  )
}

export default memo(Switch)
