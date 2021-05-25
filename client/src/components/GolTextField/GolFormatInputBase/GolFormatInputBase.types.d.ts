import { InputProps } from '@material-ui/core'
// eslint-disable-next-line import/no-unresolved
import { CreditCardTypeChangeHandler } from 'cleave.js/options/creditCard'

export interface IGolFormatInputBaseProps extends InputProps {
  options: IGolFormatInputBaseOptions
}

export type IGolFormatInputBaseOptions =
  | IGolFormatCardOptions
  | IGolFormatPhoneOptions
  | IGolFormatDateOptions
  | IGolFormatTimeOptions
  | IGolFormatNumeralOptions
interface IGolFormatCardOptions extends IGolFormatExtraOptions {
  // creditCard:
  type: 'creditCard'
  creditCardStrictMode?: boolean
  creditCardType?: string
  onCreditCardTypeChanged?: CreditCardTypeChangeHandler
}
// Phone Options
interface IGolFormatPhoneOptions extends IGolFormatExtraOptions {
  type: 'phone'
  phoneRegionCode?: string
}
// Date Options
interface IGolFormatDateOptions extends IGolFormatExtraOptions {
  type: 'date'
  dateMin?: string
  dateMax?: string
  datePattern?: readonly string[]
}
// Time Options
interface IGolFormatTimeOptions extends IGolFormatExtraOptions {
  type: 'time'
  timePattern?: readonly string[]
  timeFormat?: string
}
// Numeral Options
type NumeralThousandsGroupStyleType = 'lakh' | 'thousand' | 'wan' | 'none'
interface IGolFormatNumeralOptions extends IGolFormatExtraOptions {
  type: 'numeral'
  numeralDecimalMark?: string
  numeralDecimalScale?: number
  numeralIntegerScale?: number
  numeralPositiveOnly?: boolean
  numeralThousandsGroupStyle?: NumeralThousandsGroupStyleType
  stripLeadingZeroes?: boolean
}
// Extra Options
interface IGolFormatExtraOptions {
  blocks?: readonly number[]
  copyDelimiter?: boolean
  delimiter?: string
  delimiters?: readonly string[]
  delimiterLazyShow?: boolean
  initValue?: any
  lowercase?: boolean
  numericOnly?: boolean
  prefix?: string
  noImmediatePrefix?: boolean
  rawValueTrimPrefix?: boolean
  uppercase?: boolean
  onValueChanged?(event: any): void
}
