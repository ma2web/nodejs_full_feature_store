import { makeGolStyles } from 'theme'

interface IStyleProps {
  marginBottom: number
}
const useBoxStyle = makeGolStyles<IStyleProps>(
  ({ spacing }) => ({
    Box: {
      marginBottom: ({ marginBottom }) => spacing(marginBottom),
    },
  }),
  {
    name: 'Box',
  },
)

export default useBoxStyle
