import { makeGolStyles } from 'theme'

interface IGolDataGridFilterDrawerStyle {
  showFilterDrawer: boolean
}

const useGolDataGridFilterDrawerStyle = makeGolStyles<IGolDataGridFilterDrawerStyle>(
  ({palette, typography, direction}) => ({
    root: {
      display: ({showFilterDrawer}) => showFilterDrawer ? 'flex': 'none',
      width: 53,
      height: 'calc(100% - 61px)',
      border: `1px solid ${palette.neutral[700]}`,
      backgroundColor: palette.white[100],
      borderRadius: '0px 4px 4px 0px',
       position: 'absolute',
       top: 0,
       right:  ({showFilterDrawer}) => showFilterDrawer ? direction === "ltr" ? 0 : '' : '', // ({showFilterDrawer}) => direction === "ltr" ? showFilterDrawer ? 0 : -55 : '',
       left:  ({showFilterDrawer}) => showFilterDrawer ? direction === "rtl" ? 0 : '' : '', //({showFilterDrawer}) => direction === "rtl" ? showFilterDrawer ? 0 : -55 : '',
       zIndex: 2,
      //  alignItems: 'center',
      //  flexDirection: 'column',
      //  justifyContent: 'space-evenly',
      },
      content: {
        width: '100%',
        height: 466,
        display: 'flex', 
        alignItems: 'center',
       flexDirection: 'column',
       justifyContent: 'space-evenly',
      },
      button: {
        transform: 'rotate(90deg)',
        color: palette.neutral[500],
        ...typography.button,
        '&.active': {
          color: palette.primary[700]
        }
      },
  }),
  { name: 'GolDataGridFilterDrawer' })

export default useGolDataGridFilterDrawerStyle
