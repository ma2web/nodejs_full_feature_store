import { Typography } from '@material-ui/core'
import cs from 'classnames'
import React, { FC, ReactNode } from 'react'
import { calcPercentage } from 'utils/numbers'
import { ReactComponent as SuccessIcon } from 'assets/images/icons/Alert/Success.svg'
import { ReactComponent as ErrorIcon } from 'assets/images/icons/Alert/Warning.svg'
import { ReactComponent as ClearTextIcon } from 'assets/images/icons/UI/ClearText.svg'
import useStyles from './GolProgressBar.styles'
import GolProgressBarStatusBar from './GolProgressBarstatusBar'

export type IProgressStatus = 'progress' | 'error' | 'success'
export interface IGolProgressBarProps {
  title?: string | ReactNode
  value: number
  max?: number
  remaning?: ReactNode
  hasError?: boolean
  hideIcon?: boolean
  hideStatusBar?: boolean
  className?: string
  onClickProgressIcon?: (status: IProgressStatus) => void
}

const GolProgressBar: FC<IGolProgressBarProps> = ({
  className,
  value = 0,
  max = 100,
  hasError,
  hideStatusBar,
  remaning,
  title,
  hideIcon,
  onClickProgressIcon,
}) => {
  const percentage = calcPercentage(value, max)
  const { status, statusIcon } = getStatusAndIcon(value, max, hasError)
  const classes = useStyles({ status, percent: percentage })

  const handleClickProgressIcon = () => {
    onClickProgressIcon && status && onClickProgressIcon(status)
  }

  return (
    <div className={cs(classes.root, className)}>
      <div className="progressContainer">
        {title && (
          <div className="progress-title">
            <Typography component="text" variant="body2">
              {title}
            </Typography>
          </div>
        )}
        {remaning && (
          <div className="progressRemainingContainer">
            <Typography variant="caption" className="progress-remaining">
              {remaning}
            </Typography>
            {!hideIcon && (
              <div onClick={handleClickProgressIcon} className="progress-icon">
                {statusIcon}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="progress-outer">
        <div className="progress-inner" />
      </div>
      <GolProgressBarStatusBar
        isHiden={!!hideStatusBar}
        status={status}
        percent={percentage}
      />
    </div>
  )
}

const getStatusAndIcon = (
  value?: number,
  max?: number,
  error?: boolean,
): { status: IProgressStatus; statusIcon: React.ReactElement } => {
  if (error) {
    return { status: 'error', statusIcon: <ErrorIcon /> }
  }

  if (value === max) {
    return { status: 'success', statusIcon: <SuccessIcon /> }
  }

  return {
    status: 'progress',
    statusIcon: <ClearTextIcon />,
  }
}

GolProgressBar.displayName = 'SurProgressBar'
export default GolProgressBar
