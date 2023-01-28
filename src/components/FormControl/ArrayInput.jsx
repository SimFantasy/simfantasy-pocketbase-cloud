import React, { useState, memo, useCallback } from 'react'
import { FieldArray } from 'formik'
import { RiAddLine, RiCloseLine } from 'react-icons/ri'
import Input from './Input'
import { FormControlWrap } from './style'

const ArrayInput = ({ name, keys, ...rest }) => {
  const handleRemove = useCallback(index => {
    const newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  })

  return (
    <FormControlWrap className='form-control'>
      <FieldArray name={name} {...rest}>
        {({ push, remove, form }) => {
          return (
            <div className='array-input-group'>
              {form.values[name] &&
                form.values[name].map((item, index) => (
                  <div key={index} className='array-input-item'>
                    {keys.map((key, i) => (
                      <Input
                        key={i}
                        name={`${name}.${index}.${key}`}
                        placeholder={key}
                        value={item[key]}
                        onChange={e => {
                          form.setFieldValue(`${name}.${index}.${key}`, e.target.value)
                        }}
                      />
                    ))}
                    <button
                      type='button'
                      onClick={() => {
                        remove(index)
                        handleRemove(index)
                      }}
                      disabled={form.values[name].length === 1}
                      className='form-btn outline'
                    >
                      <RiCloseLine />
                    </button>
                  </div>
                ))}
              <button
                type='button'
                onClick={() => {
                  push({
                    ...keys.reduce((obj, key) => {
                      obj[key] = ''
                      return obj
                    }, {})
                  })
                }}
                className='form-btn outline'
              >
                <RiAddLine />
              </button>
            </div>
          )
        }}
      </FieldArray>
    </FormControlWrap>
  )
}

export default memo(ArrayInput)
