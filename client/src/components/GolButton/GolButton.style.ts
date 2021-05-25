import { makeGolStyles } from 'theme'
import { IGolButtonRipple, IGolButtonVariant } from './GolButton'

interface IStyleProps {
  variant?: IGolButtonVariant
  ripple?: IGolButtonRipple
  classes?: any
}

export default makeGolStyles<IStyleProps>(
  ({
    palette: {
      neutral,
      secondary,
      primary,
      btnPrimaryStates,
      btnSecondaryStates,
      btnOutlineText,
      white,
    },
    shape: { borderRadius },
    transitions: {
      easing: { easeInOut },
    },
    spacing,
  }) => ({
    root: {
      color: variant({ contained: '#fff' }),
      width: 'max-content',
      fontSize: '0.875rem',
      transition: 'all ease 0.2s',
      boxShadow: 'unset',
      border: `1px solid ${primary?.[900]}`,
      padding: spacing(2.5, 5),
      backgroundPosition: ripple({ animated: 'right bottom' }),
      backgroundSize: ripple({ animated: '200% 100%' }),
      '& .MuiTouchRipple-root .MuiTouchRipple-child': { borderRadius },
      '& .MuiTouchRipple-root .MuiTouchRipple-ripple': {
        animation: ripple({
          animated: `MuiTouchRipple-keyframes-enter 550ms ${easeInOut}`,
          simple: 'unset',
        }),
      },
      '& svg path': { fill: 'currentColor' },
      '&:hover': {
        backgroundPosition: ripple({
          animated: 'left bottom',
          simple: 'unset',
        }),
        boxShadow: 'unset',
      },
    },
    containedNeutral: {
      color: neutral?.[100],
      backgroundImage: ripple({
        animated: `linear-gradient( to left, ${neutral?.[300]} 50%, ${neutral?.[50]} 50% )`,
        simple: neutral?.[300],
      }),
      border: variant({ outlined: `1px solid ${neutral?.[300]}` }),
      '&:hover': {
        color: neutral?.[300],
        backgroundColor: ripple({ simple: neutral?.[50] }),
      },
      '&.Mui-disabled': {
        background: neutral?.[50],
        color: neutral?.[200],
      },
      '& .MuiTouchRipple-child': {
        backgroundColor: neutral?.[200],
        color: neutral?.[50],
      },
    },
    outlinedNeutral: {
      color: neutral?.[600],
      backgroundImage: ripple({
        animated: `linear-gradient( to left, transparent 50%, ${neutral?.[100]} 50% )`,
        simple: 'transparent',
      }),
      border: variant({ outlined: `1px solid ${neutral?.[600]}` }),
      '&:hover': { background: ripple({ simple: neutral?.[50] }) },
      '&.Mui-disabled': {
        background: 'transparent',
        color: neutral?.[100],
        borderColor: neutral?.[100],
      },
      '& .MuiTouchRipple-child': {
        backgroundColor: neutral?.[200],
        color: neutral?.[50],
      },
    },
    textNeutral: {
      color: neutral?.[300],
      backgroundImage: ripple({
        animated: `linear-gradient( to left, transparent 50%, ${neutral?.[50]} 50% )`,
        simple: 'transparent',
      }),
      '&:hover': { background: ripple({ simple: neutral?.[50] }) },
      '&.Mui-disabled': {
        background: 'transparent',
        color: neutral?.[100],
      },
      '& .MuiTouchRipple-child': {
        backgroundColor: neutral?.[200],
        color: neutral?.[50],
      },
    },
    containedSecondary: {
      color: variant({ contained: secondary[800] }),

      borderColor: secondary?.[500],
      backgroundImage: ripple({
        animated: `linear-gradient( to left, ${secondary.main} 50%, ${btnSecondaryStates[275]} 50% )`,
        simple: secondary.main,
      }),
      '&:hover': {
        backgroundColor: ripple({ simple: secondary[500], animated: 'unset' }),
      },

      '&.Mui-disabled': {
        background: secondary[50],
        color: secondary[200],
      },
      '& .MuiTouchRipple-child': {
        backgroundColor: secondary[200],
        // color: variant({ contained: secondary[800] }),
      },
    },
    outlinedSecondary: {
      backgroundImage: ripple({
        animated: `linear-gradient( to left, transparent 50%, ${secondary[50]} 50% )`,
        simple: 'transparent',
      }),
      border: variant({ outlined: `1px solid ${secondary.main}` }),
      '&:hover': { background: ripple({ simple: secondary[50] }) },
      '&.Mui-disabled': {
        background: 'transparent',
        color: secondary[100],
        borderColor: secondary[100],
      },
      '& .MuiTouchRipple-child': {
        backgroundColor: secondary[200],
        color: secondary[500],
      },
    },
    textSecondary: {
      border: 'none',
      backgroundImage: ripple({
        simple: 'transparent',
        animated: `linear-gradient( to left, transparent 50%, ${secondary[50]} 50% )`,
      }),
      '&:hover': { background: ripple({ simple: secondary[50] }) },
      '&.Mui-disabled': {
        background: 'transparent',
        color: secondary[100],
      },
      '& .MuiTouchRipple-child': {
        backgroundColor: secondary[200],
        color: secondary[500],
      },
    },
    containedPrimary: {
      backgroundImage: ripple({
        simple: primary.main,
        animated: `linear-gradient( to left, ${primary.main} 50%, ${btnPrimaryStates[675]} 50% )`,
      }),
      border: variant({ outlined: `1px solid ${primary.main}` }),
      '&:hover': { background: ripple({ simple: primary[500] }) },

      '&.Mui-disabled': {
        border: 'none',
        background: white[10],
        color: primary[200],
        backgroundImage: 'unset',
      },
      '& .MuiTouchRipple-child': {
        backgroundColor: btnPrimaryStates[650],
        color: variant({ contained: '#fff' }),
      },
    },
    outlinedPrimary: {
      backgroundImage: ripple({
        simple: 'transparent',
        animated: `linear-gradient( to left, transparent 50%, ${btnOutlineText[5]} 50% )`,
      }),
      border: variant({ outlined: `1px solid ${primary.main}` }),
      '&:hover': {
        backgroundColor: ripple({
          simple: btnOutlineText[5],
          animated: 'unset',
        }),
      },
      '&.Mui-disabled': {
        background: 'transparent',
        color: primary[100],
      },
      '& .MuiTouchRipple-child': {
        backgroundColor: btnOutlineText[30],
        color: primary[500],
      },
    },
    textPrimary: {
      border: 'none',
      backgroundImage: ripple({
        simple: 'transparent',
        animated: `linear-gradient( to left, transparent 50%, ${btnOutlineText[5]} 50% )`,
      }),
      '&:hover': {
        backgroundColor: ripple({
          simple: btnOutlineText[5],
          animated: 'unset',
        }),
      },
      '&.Mui-disabled': {
        background: 'transparent',
        color: primary[100],
      },
      '& .MuiTouchRipple-child': {
        backgroundColor: btnOutlineText[10],
        color: primary[500],
      },
    },
  }),
)

const selector = (objMap: any, key?: string) => {
  if (!key) {
    return undefined
  }
  return objMap[key]
}

const ripple = (obj: { [key in IGolButtonRipple]?: string }) => ({
  ripple,
}: IStyleProps) => selector(obj, ripple)

const variant = (obj: { [key in IGolButtonVariant]?: string }) => ({
  variant,
}: IStyleProps) => selector(obj, variant)
