import { makeGolStyles } from 'theme'

export default makeGolStyles(({ palette: { grey } }) => ({
  root: {
    width: '100%',
    padding: '50px',
    '& .TextFieldContainerStory': {
      display: 'flex',
      width: '100%',
    },
    '& h5': {
      minWidth: 150,
    },
    '& .GolTextFieldWithValidation': {
      width: '100%',
    },
  },
  label: {
    color: grey[1],
    // fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14.94,
  },
}))
