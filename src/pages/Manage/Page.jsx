import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useCategoriesQuery, useCreateMutation, useUpdateMutation, useDetailQuery } from '@/hooks'
import { FormControl, ManageTitle, Grid, Spin } from '@/components'
import { slugFormat } from '@/utils'
import { FormWrap } from './style'

const Page = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const { data: pageCategoriesData, isLoading: pageCategoriesIsLoading } =
    useCategoriesQuery('postCategories')
  const { mutate: createMutate } = useCreateMutation('pages')
  const { mutate: updateMutate } = useUpdateMutation('pages', id)
  const { data: detailData, isLoading: detailIsLoading } = useDetailQuery('pages', {
    enabled: !!id
  })

  if (pageCategoriesIsLoading)
    return (
      <FormWrap>
        <div className='container'>
          <Spin />
        </div>
      </FormWrap>
    )

  if (id && detailIsLoading)
    return (
      <FormWrap>
        <div className='container'>
          <Spin />
        </div>
      </FormWrap>
    )

  const initialValues = {
    title: id ? detailData?.title : '',
    slug: id ? detailData?.slug : '',
    coverImage: id ? detailData?.coverImage : '',
    isVisible: id ? detailData?.isVisible : false,
    tags: id ? detailData?.tags : '',
    content: id ? detailData?.content : ''
  }

  const categoriesOptions = pageCategoriesData.map(item => ({ key: item.name, value: item.id }))

  const validationSchema = Yup.object({
    title: Yup.string().required('This is required!'),
    slug: Yup.string().required('This is required!'),
    coverImage: Yup.string(),
    isVisible: Yup.boolean(),
    tags: Yup.string(),
    content: Yup.string().required('This is required!')
  })

  const onSubmit = (values, onSubmitProps) => {
    const data = { ...values, slug: slugFormat(values.slug) }
    if (id) {
      updateMutate(data, {
        onSuccess: () => {
          onSubmitProps.resetForm()
          navigate(`/${detailData?.id}/${values?.slug}`)
        }
      })
    } else {
      createMutate(data, {
        onSuccess: () => {
          onSubmitProps.resetForm()
          navigate('/home')
        }
      })
    }
  }

  return (
    <FormWrap>
      <div className='container'>
        <ManageTitle title={id ? 'Edit Page' : 'Create Page'} />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {formik => (
            <Form className='form-container'>
              <FormControl control='input' label='Title' name='title' />
              <FormControl control='input' label='Cover Image' name='coverImage' />
              <Grid col='3' gap='24px'>
                <FormControl control='input' label='Slug' name='slug' />
                <FormControl control='input' label='Tags' name='tags' />
                <FormControl control='switch' label='Is Visible' name='isVisible' />
              </Grid>
              <FormControl control='editor' label='Conent' name='content' />
              <FormControl control='button' text='Save' type='submit' align='end' />
            </Form>
          )}
        </Formik>
      </div>
    </FormWrap>
  )
}

export default Page
