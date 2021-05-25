// import {  } from "@material-ui/core/styles/createTypography";
import { TypographyOptions } from '@material-ui/core/styles/createTypography'
import ThemeConstants from './constants'
import { pxToRem } from './helpers'

const {
  htmlFontSize,
  fontFamily,
  fontSize,
  fontWeightLight,
  fontWeightRegular,
  fontWeightMedium,
  fontWeightSemiBold,
  fontWeightBold,
} = ThemeConstants

const typography = {
  htmlFontSize,
  fontFamily,
  fontSize,
  fontWeightLight,
  fontWeightRegular,
  fontWeightMedium,
  fontWeightSemiBold,
  fontWeightBold,
  h1: {
    fontWeight: fontWeightBold,
    fontSize: pxToRem(58),
    lineHeight: '68px',
    '@media (max-width:1024px)': {
      fontSize: pxToRem(48),
      lineHeight: '58px',
    },
    '@media (max-width:480px)': {
      fontSize: pxToRem(36),
      lineHeight: '46px',
    },
  },
  h2: {
    fontWeight: fontWeightSemiBold,
    fontSize: pxToRem(45),
    lineHeight: '52px',
    '@media (max-width:1024px)': {
      fontSize: pxToRem(36),
      lineHeight: '72px',
    },
    '@media (max-width:480px)': {
      fontSize: pxToRem(28),
      lineHeight: '36px',
    },
  },
  h3: {
    fontWeight: fontWeightMedium,
    fontSize: pxToRem(38),
    lineHeight: '44px',
    '@media (max-width:1024px)': {
      fontSize: pxToRem(28),
      lineHeight: '56px',
    },
    '@media (max-width:480px)': {
      fontSize: pxToRem(24),
      lineHeight: '31px',
    },
  },
  h4: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(32),
    lineHeight: '42px',
    '@media (max-width:1024px)': {
      fontSize: pxToRem(24),
      lineHeight: '36px',
    },
    '@media (max-width:480px)': {
      fontSize: pxToRem(20),
      lineHeight: '26px',
    },
  },
  h5: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(29),
    lineHeight: '36px',
    '@media (max-width:1024px)': {
      fontSize: pxToRem(21),
      lineHeight: '24px',
    },
    '@media (max-width:480px)': {
      fontSize: pxToRem(18),
      lineHeight: '23px',
    },
  },
  h6: {
    fontWeight: fontWeightMedium,
    fontSize: pxToRem(24),
    lineHeight: '31px',
    '@media (max-width:1024px)': {
      fontSize: pxToRem(18),
      lineHeight: '24px',
    },
    '@media (max-width:480px)': {
      fontSize: pxToRem(15.94),
      lineHeight: '20px',
    },
  },

  subtitle1: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(17),
    lineHeight: '24px',
    '@media (max-width:480px)': {
      fontSize: pxToRem(14.94),
      lineHeight: '24px',
    },
  },
  subtitle2: {
    fontWeight: fontWeightMedium,
    fontSize: pxToRem(14),
    lineHeight: '24px',
    '@media (max-width:1024px)': {
      fontSize: pxToRem(16),
      lineHeight: '24px',
    },
    '@media (max-width:480px)': {
      fontSize: pxToRem(12),
      lineHeight: '24px',
    },
  },
  body1: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(15),
    lineHeight: '24px',
    '@media (max-width:480px)': {
      fontSize: pxToRem(14),
      lineHeight: '24px',
    },
  },
  body2: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(14),
    lineHeight: '20px',
    '@media (max-width:480px)': {
      fontSize: pxToRem(13.12),
      lineHeight: '20px',
    },
  },
  button: {
    fontWeight: fontWeightMedium,
    fontSize: pxToRem(14),
    lineHeight: '16px',
    '@media (max-width:480px)': {
      fontSize: pxToRem(15),
      lineHeight: '16px',
    },
  },
  caption: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(13),
    lineHeight: '16px',
    '@media (max-width:480px)': {
      fontSize: pxToRem(12),
      lineHeight: '16px',
    },
  },
  overline: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(11),
    lineHeight: '16px',
    '@media (max-width:480px)': {
      fontSize: pxToRem(10),
      lineHeight: '16px',
    },
  },
}

export default typography
