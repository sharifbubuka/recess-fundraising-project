import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import FormField from '../../../components/FormField'
import { validateEmail, validateName } from '../../../utils/validation'

const useStyles = makeStyles(theme => ({
  newsletterForm: {
    backgroundColor: theme.palette.secondary.main,
    // paddingRight: theme.spacing(3)
  },
  form: {
    backgroundColor: 'white',
    color: theme.palette.primary.main,
    width: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    boxShadow: '5px 5px 15px 5px rgba(0,0,0,0.19)'
  },
  formHeader: {
    textAlign: 'center'
  }
}))

const validationSchema = yup.object({
  name: validateName('Name'),
  email: validateEmail
})

const initialValues = {
  name: '',
  email: ''
}

const handleFormSubmit = (values) => {
  console.log(values)
}

function FooterForm() {
  const classes = useStyles()
  
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleFormSubmit
  })

  return (
    // <Grid xs={10} className={classes.newsletterForm}>
    //   <h4>Receive Newsletter</h4>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <h4 className={classes.formHeader}>Receive Newsletter</h4>
        <FormField
          type='text'
          name='name'
          label='Name'
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

        <FormField
          type='text'
          name='email'
          label='Email'
          
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <FormField
          type='submit'
          name='submit'
          value='Subscribe'
        />
      </form>
    // </Grid>
  )
}

export default FooterForm