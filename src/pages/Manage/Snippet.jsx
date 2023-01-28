import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useCategoriesQuery, useCreateMutation, useUpdateMutation, useDetailQuery } from '@/hooks'
import { FormControl, ManageTitle, Grid, Spin } from '@/components'
import { slugFormat } from '@/utils'
import { FormWrap } from './style'

const Snippet = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const { data: snippetCategoriesData, isLoading: snippetCategoriesIsLoading } =
    useCategoriesQuery('snippetCategories')
  const { mutate: createMutate } = useCreateMutation('snippets')
  const { mutate: updateMutate } = useUpdateMutation('snippets', id)
  const { data: detailData, isLoading: detailIsLoading } = useDetailQuery('snippets', {
    enabled: !!id
  })

  if (snippetCategoriesIsLoading)
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
    isFeature: id ? detailData?.isFeature : false,
    tags: id ? detailData?.tags : '',
    content: id ? detailData?.content : '',
    category: id ? detailData?.category : ''
  }

  const categoriesOptions = snippetCategoriesData.map(item => ({ key: item.name, value: item.id }))

  const validationSchema = Yup.object({
    title: Yup.string().required('This is required!'),
    slug: Yup.string().required('This is required!'),
    isFeature: Yup.boolean(),
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
          navigate(`/snippet/${detailData?.id}/${values?.slug}`)
        }
      })
    } else {
      createMutate(data, {
        onSuccess: () => {
          onSubmitProps.resetForm()
          navigate('/snippets')
        }
      })
    }
  }

  return (
    <FormWrap>
      <div className='container'>
        <ManageTitle title={id ? 'Edit Snippet' : 'Create Snippet'} />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {formik => (
            <Form className='form-container'>
              <FormControl control='input' label='Title' name='title' />
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
              <FormControl control='editor' label='Conent' name='content' />
              <FormControl control='button' text='Save' type='submit' align='end' />
            </Form>
          )}
        </Formik>
      </div>
    </FormWrap>
  )
}

export default Snippet
