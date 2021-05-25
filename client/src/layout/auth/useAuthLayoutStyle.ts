import { makeGolStyles } from 'theme'

export const useAuthLayoutStyle = makeGolStyles(
  () => ({
    root: {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
  { name: 'AuthLayout' },
)

export default useAuthLayoutStyle
