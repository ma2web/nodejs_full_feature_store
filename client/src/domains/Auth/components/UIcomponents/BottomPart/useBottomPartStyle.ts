import { makeGolStyles } from 'theme'

const useBottomPartStyle = makeGolStyles(
  ({ spacing, palette: { primary } }) => ({
    BottomPart: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'flex-end',
      marginBottom: spacing(15.5),
      '& a': {
        color: primary.main,
      },
    },
  }),
  {
    name: 'BottomPart',
  },
)

export default useBottomPartStyle
