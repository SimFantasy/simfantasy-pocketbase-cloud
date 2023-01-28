import React, { memo } from 'react'
import { Field, ErrorMessage } from 'formik'
import cx from 'clsx'
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from 'react-icons/ri'
import { FormControlWrap, ErrorText } from './style'

const Radio = ({ label, name, options, ...rest }) => {
  return (
    <FormControlWrap className='form-control'>
      {label && (
        <label htmlFor={name} className='form-label'>
          {label}
        </label>
      )}
      <Field id={name} name={name} {...rest}>
        {({ field }) => {
          return (
            <div className='form-options'>
              {options?.map(option => (
                <div className='form-option-item' key={option.key}>
                  <input
                    hidden
                    type='radio'
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
                  />
                  <label
                    htmlFor={option.value}
                    className={cx('form-option-item-icon', {
                      checked: field.value === option.value
                    })}
                  >
                    {field.value === option.value ? (
                      <RiCheckboxCircleFill />
                    ) : (
                      <RiCheckboxBlankCircleLine />
                    )}
                  </label>
                  <label htmlFor={option.value} className='form-option-item-label'>
                    {option.key}
                  </label>
                </div>
              ))}
            </div>
          )
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </FormControlWrap>
  )
}

export default memo(Radio)
