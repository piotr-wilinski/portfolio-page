import React from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from '../components/Header';
import { HeaderText } from '../components/MultiUsedStyledComponents'
import axios from 'axios'
import { Button } from '../components/MultiUsedStyledComponents'
import styled from 'styled-components';
import { useFormik } from 'formik'
import * as yup from 'yup'
import TextField from '@material-ui/core/TextField'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { device } from '../components/devices';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const theme = createMuiTheme({
  overrides: {
    MuiInputLabel: {
      root: {
        "&$focused": {
          color: '#CCC',
        }
      }
    }
  }
})

const useStyles = makeStyles({
  notFullWidth: {
    width: "48%",
  },
  fullWidth1: {
    width: '100%',
    marginBottom: '4%'
  },
  fullWidth2: {
    width: '100%',
  },
  input: {
    color: "#CCC"
  },
  inputWhite: {
    color: "#FFF"
  },
  notchedOutline: {
    borderColor: "#CCC"
  }
})

const TextFieldWithStyles = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: '#3B89FF'
      },
      '&.Mui-focused fieldset': {
        borderColor: "#2C67BF"
      }
    }
  },
})(TextField)

const EditedHeadetText = styled(HeaderText)`
  &::after {
    background-color: #3882F2;
  }
`

const Container = styled.div`
  background: #363537;
  width: 100%;
  min-height: 100vh;
  color: #FFF;
`

const Form = styled.form`
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4%;

  @media ${device.tablet} {
    flex-direction: column;
  }
`

const Submit = styled(Button)`
  margin: 0 auto 10%;
  padding: 0.8em 3em;
  background-color: #3882F2;
  border-color: #3882F2;

  &:hover {
    background-color: transparent;
    color: #3882F2;
  }
`

const Headline = styled.h4`
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  width: 100%;
  margin-bottom: 4%;
`



export const Contact = props => {
  const { t } = useTranslation()
  const classes = useStyles()

  const matches = useMediaQuery('(max-width: 768px)')

  const validationSchema = yup.object({
    name: yup
      .string(t('contact.form.name'))
      .required(t('contact.form.isRequired.name')),
    email: yup
      .string(t('contact.form.email'))
      .email(t('contact.form.isRequired.emailValid'))
      .required(t('contact.form.isRequired.email')),
    topic: yup
      .string(t('contact.form.topic'))
      .required(t('contact.form.isRequired.topic')),
    message: yup
      .string(t('contact.form.message'))
      .required(t('contact.form.isRequired.message')),
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      topic: '',
      message: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios({
        method: "POST",
        url: '/contact',
        data: { ...values }
      }).then((response) => {
        if (response.data.status === 'sent') {
          alert("Message sent")
        } else if (response.data.status === 'failed') {
          alert("Message failed")
        }
      })
    }
  })

  return (
    <>
      <Header themeToggle={props.themeToggle} theme={props.theme} />
      <Container>
        <EditedHeadetText>{t('contact.title')}</EditedHeadetText>
        <Form id="contact-form" method="POST" onSubmit={formik.handleSubmit}>
          <FormGroup>
            <Headline>{t('contact.subtitle')}</Headline>
          </FormGroup>
          <ThemeProvider theme={theme}>
            <FormGroup>
              <TextFieldWithStyles
                className={matches ? classes.fullWidth1 : classes.notFullWidth}
                id="name"
                name="name"
                label={`${t('contact.form.name')}*`}
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                variant="outlined"
                InputLabelProps={{
                  classes: {
                    root: classes.input,
                    notchedOutline: classes.notchedOutline
                  }
                }}
                InputProps={{
                  classes: {
                    root: classes.inputWhite,
                    notchedOutline: classes.notchedOutline
                  }
                }}
              />
              <TextFieldWithStyles
                className={matches ? classes.fullWidth2 : classes.notFullWidth}
                id="email"
                name="email"
                label={`${t('contact.form.email')}*`}
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                variant="outlined"
                InputLabelProps={{
                  classes: {
                    root: classes.input,
                    notchedOutline: classes.notchedOutline
                  }
                }}
                InputProps={{
                  classes: {
                    root: classes.inputWhite,
                    notchedOutline: classes.notchedOutline
                  }
                }}
              />
            </FormGroup>
            <FormGroup>
              <TextFieldWithStyles
                fullWidth
                className={`${classes.input} children`}
                id="topic"
                name="topic"
                label={`${t('contact.form.topic')}*`}
                value={formik.values.topic}
                onChange={formik.handleChange}
                error={formik.touched.topic && Boolean(formik.errors.topic)}
                helperText={formik.touched.topic && formik.errors.topic}
                variant="outlined"
                InputLabelProps={{
                  classes: {
                    root: classes.input,
                    notchedOutline: classes.notchedOutline
                  }
                }}
                InputProps={{
                  classes: {
                    root: classes.inputWhite,
                    notchedOutline: classes.notchedOutline
                  }
                }}
              />
            </FormGroup>
            <FormGroup>
              <TextFieldWithStyles
                fullWidth
                id="message"
                name="message"
                label={`${t('contact.form.message')}*`}
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
                variant="outlined"
                multiline
                rows={6}
                InputLabelProps={{
                  classes: {
                    root: classes.input,
                    notchedOutline: classes.notchedOutline
                  }
                }}
                InputProps={{
                  classes: {
                    root: classes.inputWhite,
                    notchedOutline: classes.notchedOutline
                  }
                }}
              />
            </FormGroup>
          </ThemeProvider>
          <Submit type="submit">{`${t('contact.form.submit')}*`}</Submit>
        </Form>
      </Container>
    </>
  )
}