import React, { memo } from 'react'
import { Field, ErrorMessage } from 'formik'
import cx from 'clsx'
import { RiCheckboxBlankLine, RiCheckboxFill } from 'react-icons/ri'
import { FormControlWrap, ErrorText } from './style'

const Checkbox = ({ label, name, options, ...rest }) => {
  return (
    <FormControlWrap className='form-control'>
      {label && <label htmlFor={name}>{label}</label>}
      <Field id={name} name={name} {...rest}>
        {({ field }) => {
          return (
            <div className='form-options'>
              {options?.map(option => (
                <div className='form-option-item' key={option.key}>
                  <input
                    hidden
                    type='checkbox'
                    id={option.value}
                    {...field} // 不能将field放到value下面，否则会将默认的field中的value重置value的值。
                    checked={Boolean(field.value.includes(option.value))}
                    value={option.value}
                  />
                  <label
                    htmlFor={option.value}
                    className={cx('form-option-item-icon', {
                      checked: Boolean(field.value.includes(option.value))
                    })}
                  >
                    {field.value.includes(option.value) ? (
                      <RiCheckboxFill />
                    ) : (
                      <RiCheckboxBlankLine />
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

export default memo(Checkbox)
