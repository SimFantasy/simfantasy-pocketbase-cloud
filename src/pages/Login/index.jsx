import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { RiTyphoonFill, RiCloseLine } from 'react-icons/ri'
import { useAuth, useLoginMutation } from '@/hooks'
import { FormControl } from '@/components'
import { siteName } from '@/constants/settings'
import { LoginWrap, LoginErrorMessage } from './style'

const Login = () => {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')
  const [showError, setShowError] = useState(false)
  const { login } = useAuth()
  const { mutate, isLoading } = useLoginMutation({
    onSuccess: data => {
      login(data)
      navigate('/home')
    },
    onError: data => {
      setErrorMessage(data.message)
      setShowError(true)
    }
  })

  const handleHideError = () => {
    setErrorMessage('')
    setShowError(false)
  }

  const initialVales = {
    identity: '',
    password: ''
  }

  const validationSchema = Yup.object({
    identity: Yup.string().required('Please enter username or email'),
    password: Yup.string().min(6, 'Please enter at least 6 digits password').required()
  })

  const handleSubmit = async values => {
    mutate(values)
  }
  return (
    <LoginWrap>
      <div className='login-container'>
        <div className='login-titlebar'>
          <RiTyphoonFill />
          <div className='logo-text'>{siteName}</div>
        </div>
        <div className='login-messages'>
          {showError && (
            <LoginErrorMessage>
              <div className='error-content'>{errorMessage}</div>
              <div className='close-btn' onClick={handleHideError}>
                <RiCloseLine />
              </div>
            </LoginErrorMessage>
          )}
        </div>
        <Formik
          initialValues={initialVales}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {formik => (
            <Form className='login-form'>
              <FormControl control='input' name='identity' placeholder='Username or Email' />
              <FormControl control='input' type='password' name='password' placeholder='Password' />
              <FormControl control='button' text='Login' block disabled={isLoading} />
            </Form>
          )}
        </Formik>
      </div>
    </LoginWrap>
  )
}

export default Login
