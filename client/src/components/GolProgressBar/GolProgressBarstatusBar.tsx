import React from 'react'
import { Typography } from '@material-ui/core'

import { IProgressStatus } from './GolProgressBar'
import Lottie from 'react-lottie'
import LoadingAnimation from 'assets/animations/loading2.json'

interface IStatusBarProps {
  isHiden: boolean
  status: IProgressStatus
  percent: number
}

const GolProgressBarStatusBar: React.FC<IStatusBarProps> = ({
  isHiden,
  status,
  percent,
}) => {
  if (isHiden) {
    return null
  }
  const isSuccess = status === 'success'
  const showLoading = status === 'progress'

  return (
    <Typography variant="caption" className="progress-format">
      {isSuccess ? (
        'Operation is Success'
      ) : (
        <>
          {`${percent}% uploading`}
          {showLoading ? <Loading /> : '...'}
        </>
      )}
    </Typography>
  )
}

export default GolProgressBarStatusBar

const Loading = () => {
  const defaultLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Lottie
      options={defaultLottieOptions}
      speed={1}
      width={15}
      height={23}
      isClickToPauseDisabled={true}
      isPaused={false}
      style={{ margin: 0 }}
    />
  )
}
