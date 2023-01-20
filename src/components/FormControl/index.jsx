import React from 'react'
import Input from './Input'
import Textarea from './Textarea'
import Select from './Select'
import Checkbox from './Checkbox'
import Radio from './Radio'
import Editor from './Editor'
import Button from './Button'
import ArrayInput from './ArrayInput'
import Switch from './Switch'

const FormControl = ({ control, ...rest }) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'arrayInput':
      return <ArrayInput {...rest} />
    case 'textarea':
      return <Textarea {...rest} />
    case 'select':
      return <Select {...rest} />
    case 'checkbox':
      return <Checkbox {...rest} />
    case 'switch':
      return <Switch {...rest} />
    case 'radio':
      return <Radio {...rest} />
    case 'editor':
      return <Editor {...rest} />
    case 'button':
      return <Button {...rest} />
    default:
      return null
  }
}

export default FormControl
