import { FC } from 'react'
import { render, RenderOptions } from '@testing-library/react'

import theme from 'theme'
import { ThemeProvider } from '@material-ui/core/styles'

import LanguageProvider from 'providers/LanguageProvider'

const Providers: FC<any> = ({ children }) => (
  <LanguageProvider>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </LanguageProvider>
)

const customRender = (ui: any, options: RenderOptions | undefined = {}) =>
  render(ui, { wrapper: Providers, ...options })

// Doc ref https://github.com/jackfranklin/test-data-bot
export * from '@jackfranklin/test-data-bot'

// Doc ref https://github.com/nickcolley/jest-axe
export { axe } from 'jest-axe'

// Doc ref https://github.com/testing-library/user-event
export { default as userEvent } from '@testing-library/user-event'

// re-export everything
// Doc ref https://testing-library.com/docs/react-testing-library/intro
export * from '@testing-library/react'

// override render method
export { customRender as render }
