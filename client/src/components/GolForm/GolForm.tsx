import { Form, Formik, FormikConfig } from 'formik'
import React, { FC } from 'react'

export interface IGolFormProps extends FormikConfig<any> {
  classes?: Record<'root', string>
  children: any
}

const GolForm: FC<IGolFormProps> = ({
  classes,
  children,
  initialValues,
  onSubmit,
  validationSchema,
}) => (
  <Formik {...{ initialValues, onSubmit, validationSchema }} validateOnChange>
    {(props) => <Form className={classes?.root}>{children(props)}</Form>}
  </Formik>
)

GolForm.displayName = 'GolForm'

export default GolForm
