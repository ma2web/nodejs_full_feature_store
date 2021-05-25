import { lighten } from '@material-ui/core'
import { makeGolStyles } from 'theme'

interface IGolExpansionStyleProps {
  hasSpacing?: boolean
}

export default makeGolStyles<IGolExpansionStyleProps>(
  ({ palette, spacing }) => ({
    root: {
      boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
      '&.Mui-disabled': {
        backgroundColor: palette.neutral[50],
      },
      '& .MuiCollapse-container .MuiCollapse-wrapper': {
        backgroundColor: palette.neutral[50],
        // color: palette.neutral[700],
        // backgroundColor: palette.neutral[50],
        padding: 24,
      },

      '& .MuiAccordionSummary-root': {
        padding: spacing(0, 4.5),
        '& .MuiAccordionSummary-content': {
          '& > label.MuiFormControlLabel-root': {
            width: '100%',
            '& > label': {
              margin: 'unset',
            },
          },
        },
      },
      '&.Mui-expanded': {
        margin: ({ hasSpacing }) => (hasSpacing ? '16px 0' : 0),
        '&::before': {
          opacity: ({ hasSpacing }) => (hasSpacing ? 0 : 1),
        },
      },
    },
  }),
  { name: 'GolExpansion' },
)
