import { makeGolStyles } from 'theme'

const useTopPartStyle = makeGolStyles(
  ({ spacing }) => ({
    TopPart: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      position: 'relative',
      height: '100vh',
    },
  }),
  {
    name: 'TopPart',
  },
)

export default useTopPartStyle
