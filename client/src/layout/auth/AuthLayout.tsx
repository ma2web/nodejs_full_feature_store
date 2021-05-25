import { FC } from 'react'
import { CssBaseline } from '@material-ui/core'
import { useAuthLayoutStyle } from './useAuthLayoutStyle'

export const AuthLayout: FC = ({ children }) => {
  const styles = useAuthLayoutStyle()

  return (
    <>
      <CssBaseline />
      <div className={styles.root}>{children}</div>
    </>
  )
}

AuthLayout.displayName = 'AuthLayout'
export default AuthLayout
