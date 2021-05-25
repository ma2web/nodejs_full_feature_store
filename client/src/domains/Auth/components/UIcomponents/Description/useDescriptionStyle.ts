import { makeGolStyles } from 'theme'

const useDescriptionStyle = makeGolStyles(
  ({ spacing }) => ({
    Description: {
      marginBottom: spacing(15),
    },
  }),
  {
    name: 'Description',
  },
)

export default useDescriptionStyle
