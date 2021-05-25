import { url } from 'node:inspector'
import { makeGolStyles } from 'theme'

const useGolToggleButtonGroupStyle = makeGolStyles(
  ({ spacing, palette: { primary }, breakpoints: { down, up, values } }) => ({
    root: {
      width: '100%',
      '& .MuiToggleButton-root': {
        width: '100%',
      },
    },
  }),
  {
    name: 'GolToggleButtonGroup',
  },
)

export default useGolToggleButtonGroupStyle
