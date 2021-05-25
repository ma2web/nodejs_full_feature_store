import { makeStyles } from '@material-ui/core'
import {
  ClassNameMap,
  Styles,
  WithStylesOptions,
} from '@material-ui/styles/withStyles'
import { Omit } from '@material-ui/types'
import ThemeConstants from './constants'

const { htmlFontSize } = ThemeConstants

export const pxToRem = (px: number, baseFontSize: number = htmlFontSize) =>
  `${(px / baseFontSize).toFixed(3)}rem`

export const calculateColumnSize = (
  width: number,
  gutter: number,
  margin = gutter,
) => {
  const containerWidth = width - 2 * margin
  const colWidth = (containerWidth - 11 * gutter) / 12
  return colWidth
}

function makeGolStyles<ClassKey extends string = string>(
  style: Styles<ITheme, object, ClassKey>,
  options?: Omit<WithStylesOptions<ITheme>, 'withTheme'>,
): (props?: any) => ClassNameMap<ClassKey>
function makeGolStyles<
  Props extends object = object,
  ClassKey extends string = string
>(
  styles: Styles<ITheme, Props, ClassKey>,
  options?: Omit<WithStylesOptions<ITheme>, 'withTheme'>,
): (props: Props) => ClassNameMap<ClassKey>

function makeGolStyles(styles: any, options: any) {
  return makeStyles(styles, options)
}

export default makeGolStyles
