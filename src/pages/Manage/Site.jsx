import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useCategoriesQuery, useCreateMutation, useUpdateMutation, useDetailQuery } from '@/hooks'
import { FormControl, ManageTitle, Grid, Spin } from '@/components'
import { slugFormat } from '@/utils'
import { FormWrap } from './style'

const Site = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const { data: siteCategoriesData, isLoading: siteCategoriesIsLoading } =
    useCategoriesQuery('siteCategories')
  const { mutate: createMutate } = useCreateMutation('sites')
  const { mutate: updateMutate } = useUpdateMutation('sites', id)
  const { data: detailData, isLoading: detailIsLoading } = useDetailQuery('sites', {
    enabled: !!id
  })

  if (siteCategoriesIsLoading)
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
    iconImage: id ? detailData?.iconImage : '',
    isFeature: id ? detailData?.isFeature : false,
    description: id ? detailData?.description : '',
    link: id ? detailData?.link : '',
    content: id ? detailData?.content : '',
    category: id ? detailData?.category : ''
  }

  const categoriesOptions = siteCategoriesData.map(item => ({ key: item.name, value: item.id }))

  const validationSchema = Yup.object({
    title: Yup.string().required('This is required!'),
    slug: Yup.string().required('This is required!'),
    iconImage: Yup.string(),
    isFeature: Yup.boolean(),
    description: Yup.string(),
    link: Yup.string(),
    content: Yup.string().required('This is required!'),
    category: Yup.string().required('This is required!')
  })

  const onSubmit = (values, onSubmitProps) => {
    const data = { ...values, slug: slugFormat(values.slug) }
    if (id) {
      updateMutate(data, {
        onSuccess: () => {
          onSubmitProps.resetForm()
          navigate(`/site/${detailData?.id}/${values?.slug}`)
        }
      })
    } else {
      createMutate(data, {
        onSuccess: () => {
          onSubmitProps.resetForm()
          navigate('/sites')
        }
      })
    }
  }

  return (
    <FormWrap>
      <div className='container'>
        <ManageTitle title={id ? 'Edit Site' : 'Create Site'} />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {formik => (
            <Form className='form-container'>
              <FormControl control='input' label='Title' name='title' />
              <FormControl control='input' label='Icon Image' name='iconImage' />
              <Grid col='2' gap='24px'>
                <FormControl control='input' label='Slug' name='slug' />
                <FormControl control='input' label='Link' name='link' />
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

export default Site
