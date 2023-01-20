import React, { useState, memo, useCallback } from 'react'
import { FieldArray } from 'formik'
import { RiAddLine, RiCloseLine } from 'react-icons/ri'
import Input from './Input'
import { FormControlWrap } from './style'

const ArrayInput = ({ name, keys }) => {
  const [list, setList] = useState([
    {
      ...keys.reduce((obj, key) => {
        obj[key] = ''
        return obj
      }, {})
    }
  ])
  const handleRemove = useCallback(index => {
    const newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  })

  return (
    <FormControlWrap className='form-control'>
      <FieldArray name={name}>
        {({ push, remove }) => (
          <div className='array-input-group'>
            {list.map((item, index) => (
              <div key={index} className='array-input-item'>
                {keys.map((key, i) => (
                  <Input
                    key={i}
                    name={`${name}.${index}.${key}`}
                    placeholder={key}
                    value={item[key]}
                    onChange={e => {
                      const newList = [...list]
                      newList[index][key] = e.target.value
                      setList(newList)
                    }}
                  />
                ))}
                <button
                  type='button'
                  onClick={() => {
                    remove(index)
                    handleRemove(index)
                  }}
                  disabled={list.length === 1}
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
                setList([
                  ...list,
                  {
                    ...keys.reduce((obj, key) => {
                      obj[key] = ''
                      return obj
                    }, {})
                  }
                ])
              }}
              className='form-btn outline'
            >
              <RiAddLine />
            </button>
          </div>
        )}
      </FieldArray>
    </FormControlWrap>
  )
}

export default memo(ArrayInput)
