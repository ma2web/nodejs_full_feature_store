import { url } from 'node:inspector'
import { makeGolStyles } from 'theme'

const useGolToggleButtonStyle = makeGolStyles(
  ({
    spacing,
    palette: { primary, grey, white },
    breakpoints: { down, up, values },
  }) => ({
    root: {
      color: grey[2],
      backgroundColor: white[100],

      '&.Mui-selected': {
        border: `1px solid ${primary[300]}`,
        // borderRight: `2px solid ${primary[300]}`,
        // borderLeft: `2px solid ${primary[300]}`,

        color: primary.main,
        backgroundColor: primary[50],
      },
    },
  }),
  {
    name: 'GolToggleButton',
  },
)

export default useGolToggleButtonStyle
