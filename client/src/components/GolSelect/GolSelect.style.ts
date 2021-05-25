import { makeGolStyles } from 'theme'

const useGolSelectStyle = makeGolStyles(
  () => ({
    root: {
      width: '100%',
      '& > div:focus': {
          backgroundColor: 'unset'
      }
    }
  }),
  { name: 'GolSelect' })

export default useGolSelectStyle
