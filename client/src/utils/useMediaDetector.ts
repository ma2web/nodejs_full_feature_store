import useMediaQuery from '@material-ui/core/useMediaQuery'

const useMediaDetector = () => {
  const isSmall = useMediaQuery('(max-width:1280px)')
  const isMedium = useMediaQuery('max-width:1600px')
  const isLarge = useMediaQuery('maxWidth:1900px')
  const isXLarge = useMediaQuery('min-width:1900px')

  return [isSmall, isMedium, isLarge, isXLarge]
}
export default useMediaDetector
