import { makeGolStyles } from 'theme'
import { IGolButtonVariant } from '../GolButton/GolButton'

type IGolIconButtonShape = 'circle' | 'square'
interface IStyleProps {
  variant?: IGolButtonVariant
  shape?: IGolIconButtonShape
}
export default makeGolStyles<IStyleProps>(
  ({ palette: { primary, secondary, neutral, surface }, spacing }) => {
    return {
      root: {
        fontSize: 16,
        height: 42,
        color: '#fff',
        boxShadow: 'unset',
        // width: 'max-content',
        transition: 'all ease 0.8s',
        borderRadius: shape({ square: spacing(1), circle: '50%' }),
        '&:hover': { boxShadow: 'unset' },
        '& .MuiTouchRipple-root .MuiTouchRipple-ripple': {
          animation: 'unset',
        },
        '& .MuiTouchRipple-child': {
          borderRadius: shape({ square: spacing(1), circle: '50%' }),
        },
      },
      containedNeutral: {
        color: neutral?.[600],
        background: neutral?.[100],
        border: `1px solid ${neutral?.[600]}`,
        '&:hover': {
          background: neutral?.[300],
        },
        '&.Mui-disabled': {
          background: neutral?.[50],
          color: neutral?.[200],
        },
        '& .MuiTouchRipple-child': {
          backgroundColor: neutral?.[200],
          color: neutral?.[500],
        },
      },
      outlinedNeutral: {
        color: neutral?.[600],
        background: 'transparent',
        border: `1px solid ${neutral?.[600]}`,
        '&:hover': {
          background: neutral?.[50],
        },
        '&.Mui-disabled': {
          background: 'transparent',
          color: neutral?.[100],
          borderColor: neutral?.[100],
        },
        '& .MuiTouchRipple-child': {
          backgroundColor: neutral?.[200],
          color: neutral?.[500],
        },
      },

      textNeutral: {
        color: neutral?.[300],
        background: 'transparent',
        '&:hover': {
          background: neutral?.[50],
        },
        '&.Mui-disabled': {
          background: 'transparent',
          color: neutral?.[100],
        },
        '& .MuiTouchRipple-child': {
          backgroundColor: neutral?.[200],
          color: neutral?.[500],
        },
      },
      colorSecondary: {
        color: variant({ contained: '#fff' }, secondary.main),
        background: variant({ contained: secondary.main }, 'transparent'),
        border: variant({ outlined: `1px solid ${secondary.main}` }),
        '&:hover': {
          background: variant({ contained: secondary[500] }, secondary[50]),
        },
        '&.Mui-disabled': {
          background: variant({ contained: secondary[50] }, 'transparent'),
          color: variant({ contained: secondary[200] }, secondary[100]),
          borderColor: variant({ outlined: secondary[100] }),
        },
        '& .MuiTouchRipple-child': {
          backgroundColor: secondary[200],
          color: secondary[500],
        },
      },
      colorPrimary: {
        color: variant({ contained: surface.default }, primary.main),
        background: variant({ contained: primary.main }, 'transparent'),
        border: variant({ outlined: `1px solid ${primary.main}`, text: 'unset' }),
        '&:hover': {
          background: variant({ contained: primary[500] }, primary[50]),
        },
        '&.Mui-disabled': {
          background: variant({ contained: primary[50] }, 'transparent'),
          color: variant({ contained: primary[200] }, primary[100]),
          borderColor: variant({ outlined: primary[100] }),
        },
        '& .MuiTouchRipple-child': {
          backgroundColor: primary[200],
          color: primary[500],
        },
      },
    }
  },
)

const selector = (objMap: any, key?: string) => {
  if (!key) {
    return undefined
  }
  return objMap[key]
}

const shape = (
  obj: { [key in IGolIconButtonShape]?: string | number },
  defArg?: string,
) => ({ shape }: IStyleProps) => {
  const result = selector(obj, shape)
  if (!!result) {
    return result
  }
  return defArg
}

const variant = (
  obj: { [key in IGolButtonVariant]?: string | number },
  defArg?: string,
) => ({ variant }: IStyleProps) => {
  const result = selector(obj, variant)
  if (!!result) {
    return result
  }
  return defArg
}
