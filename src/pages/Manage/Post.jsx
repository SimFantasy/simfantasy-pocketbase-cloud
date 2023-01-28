import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useCategoriesQuery, useCreateMutation, useUpdateMutation, useDetailQuery } from '@/hooks'
import { FormControl, ManageTitle, Grid, Spin } from '@/components'
import { slugFormat } from '@/utils'
import { FormWrap } from './style'

const Post = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const { data: postCategoriesData, isLoading: postCategoriesIsLoading } =
    useCategoriesQuery('postCategories')
  const { mutate: createMutate } = useCreateMutation('posts')
  const { mutate: updateMutate } = useUpdateMutation('posts', id)
  const { data: detailData, isLoading: detailIsLoading } = useDetailQuery('posts', {
    enabled: !!id
  })

  if (postCategoriesIsLoading)
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
    isFeature: id ? detailData?.isFeature : false,
    description: id ? detailData?.description : '',
    tags: id ? detailData?.tags : '',
    content: id ? detailData?.content : '',
    category: id ? detailData?.category : ''
  }

  const categoriesOptions = postCategoriesData.map(item => ({ key: item.name, value: item.id }))

  const validationSchema = Yup.object({
    title: Yup.string().required('This is required!'),
    slug: Yup.string().required('This is required!'),
    coverImage: Yup.string(),
    isFeature: Yup.boolean(),
    description: Yup.string(),
    tags: Yup.string(),
    content: Yup.string().required('This is required!'),
    category: Yup.string().required('This is required!')
  })

  const onSubmit = (values, onSubmitProps) => {
    const data = { ...values, slug: slugFormat(values.slug) }
    if (id) {
      updateMutate(data, {
        onSuccess: () => {
          onSubmitProps.resetForm()
          navigate(`/post/${detailData?.id}/${values?.slug}`)
        }
      })
    } else {
      createMutate(data, {
        onSuccess: () => {
          onSubmitProps.resetForm()
          navigate('/posts')
        }
      })
    }
  }
  return (
    <FormWrap>
      <div className='container'>
        <ManageTitle title={id ? 'Edit Post' : 'Create Post'} />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {formik => (
            <Form className='form-container'>
              <FormControl control='input' label='Title' name='title' />
              <FormControl control='input' label='Cover Image' name='coverImage' />
              <Grid col='2' gap='24px'>
                <FormControl control='input' label='Slug' name='slug' />
                <FormControl control='input' label='Tags' name='tags' />
              </Grid>
              <Grid col='2' gap='24px'>
                <FormControl
                  control='select'
                  label='Category'
                  name='category'
                  options={categoriesOptions}
                />
                <FormControl control='switch' label='Is Feature' name='isFeature' />
              </Grid>
              <FormControl control='textarea' label='Description' name='description' rows='4' />
              <FormControl control='editor' label='Conent' name='content' />
              <FormControl control='button' text='Save' type='submit' align='end' />
            </Form>
          )}
        </Formik>
      </div>
    </FormWrap>
  )
}

export default Post
