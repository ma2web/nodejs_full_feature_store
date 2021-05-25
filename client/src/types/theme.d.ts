type Color = import('@material-ui/core').Color
type SimplePaletteColorOptions = import('@material-ui/core/styles/createPalette').SimplePaletteColorOptions
type Theme = import('@material-ui/core/styles/createMuiTheme').Theme
type ThemeOptions = import('@material-ui/core/styles').ThemeOptions

type Breakpoints = import('@material-ui/core/styles/createBreakpoints').Breakpoint

declare interface ITheme extends Omit<Theme, 'palette' | 'breakpoints'> {
  palette: IPalette
  breakpoints: Breakpoints
}

declare interface IThemeOptions
  extends Omit<ThemeOptions, 'palette' | 'breakpoints'> {
  palette: IPalette
  breakpoints: BreakpointsOptions
}

declare interface IPalette {
  primary: DefaultPalette
  secondary: DefaultPalette
  neutral: DefaultPalette
  grey: any
  onPrimary: any
  onSecondary: any
  accent: any
  error: any
  success: any
  warning: any
  surface: any
  background: any
  onBackground: any
  btnPrimaryStates: any
  btnSecondaryStates: any
  btnOutlineText: any
  white: any
}

declare type DefaultPalette = SimplePaletteColorOptions &
  Omit<Color, 'A100' | 'A200' | 'A400' | 'A700'>
