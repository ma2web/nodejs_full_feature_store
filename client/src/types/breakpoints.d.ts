declare type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
declare type BreakpointValues = { [key in Breakpoint]: number }

declare interface Breakpoints {
  keys: Breakpoint[]
  values: BreakpointValues
  up: (key: Breakpoint | number) => string
  down: (key: Breakpoint | number) => string
  between: (start: Breakpoint | number, end: Breakpoint | number) => string
  only: (key: Breakpoint) => string
  width: (key: Breakpoint) => number
}

declare type BreakpointsOptions = Partial<
  { unit: string; step: number } & Breakpoints
>

type BreakpointWithoutXs = Exclude<Breakpoint, 'xs'>
declare type IWidgetBreakpoints<T> = {
  xs: T
} & {
  [key in BreakpointWithoutXs]?: T
}
declare type IWidgetBreakpointValues =
  | boolean
  | 'auto'
  | 6
  | 4
  | 1
  | 2
  | 3
  | 5
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | undefined
