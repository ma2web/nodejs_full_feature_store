import { makeGolStyles } from 'theme'

const useTitleStyle = makeGolStyles(
  ({ spacing}) => ({
   
    title: {
      margin: spacing(7, 0),
    },
  }),
  {
    name: 'Title',
  },
)

export default useTitleStyle
