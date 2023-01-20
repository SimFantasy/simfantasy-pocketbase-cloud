import React, { useState, memo } from 'react'
import { Field, ErrorMessage } from 'formik'
import cx from 'clsx'
import { FormControlWrap, ErrorText } from './style'

const Switch = ({ label, name, ...rest }) => {
  const [switchState, setSwitchState] = useState()
  return (
    <FormControlWrap className='form-control'>
      {label && <label htmlFor={name}>{label}</label>}
      <Field name={name}>
        {({ field }) => (
          <div className={cx('form-switch', { switched: switchState })}>
            <input
              id={name}
              type='checkbox'
              {...field}
              {...rest}
              checked={field.value}
              hidden
              onClick={() => setSwitchState(!switchState)}
            />
            <label htmlFor={name} className='form-switch-bar'></label>
          </div>
        )}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </FormControlWrap>
  )
}

export default memo(Switch)
