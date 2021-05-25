import { makeGolStyles } from 'theme'

const useGolSquareTextFieldStyle = makeGolStyles(
  ({ palette: { grey }, spacing }) => ({
    root: {
      width: 56,
      height: 56,
      paddingRight: 0,
      paddingLeft: 0,

      '& .MuiIconButton-edgeEnd': {
        // flip: false,
        marginLeft: -4,
        marginRight: 4,
      },
      '& input::-webkit-outer-spin-button': {
        WebkitAppearance: 'none',
        margin: '0',
      },
      '& input::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        margin: '0',
      },

      '& input[type=number]': {
        MozAppearance: 'textfield /* Firefox */',
      },
      '& .MuiOutlinedInput-input': {
        padding: 0,
      },
    },
  }),
  {
    name: 'GolSquareTextField',
  },
)

export default useGolSquareTextFieldStyle
