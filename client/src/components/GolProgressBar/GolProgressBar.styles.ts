import { makeGolStyles } from 'theme'
import { IProgressStatus } from './GolProgressBar'

interface IStyleProps {
  percent?: number
  status: IProgressStatus
}
export default makeGolStyles<IStyleProps>((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& .progressContainer': {
      display: 'flex',
      marginBottom: 12,
      justifyContent: 'space-between',
      alignItems: 'center',
      '& .progress-title': {
        color: theme.palette?.neutral?.[500],
        width: 200,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      '& .progressRemainingContainer': {
        flex: 1,
        justifyContent: 'flex-end',
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'flex-end',
        '& .progress-remaining': {
          color: theme.palette?.neutral?.[500],
        },
      },
    },
    '& .progress-outer': {
      backgroundColor: theme.palette?.neutral?.[100],
      borderRadius: 3,
      height: 6,
      position: 'relative',

      '& .progress-inner': {
        backgroundColor: ({ status }) =>
          status === 'error'
            ? theme.palette?.error?.[900]
            : status === 'success'
            ? theme.palette?.primary?.[400]
            : '#33A4E1',
        width: ({ percent }) => `${percent}%`,
        position: 'absolute',
        top: 0,
        left: 0,
        height: 6,
        borderRadius: 3,
      },
    },
    '& .progress-format': {
      display: 'flex',
      // alignItems: 'center',
      fontSize: '0.688rem',
      color: ({ status }) =>
        status === 'error'
          ? theme.palette?.error?.[900]
          : status === 'success'
          ? theme.palette?.primary?.[400]
          : '#809EB0',
      '& svg': {
        '& path': {
          fill: '#809EB0',
        },
      },
    },
    '& .progress-icon': {
      marginLeft: 12,
      height: 16,
      width: 16,
      '& > svg': {
        height: 16,
        width: 16,
        '& path': {
          fill: ({ status }: IStyleProps) =>
            status === 'error'
              ? theme.palette?.error?.[900]
              : status === 'success'
              ? theme.palette?.primary?.[400]
              : '#809EB0',
        },
      },
    },
  },
}))
