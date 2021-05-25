import { Shadows } from '@material-ui/core/styles/shadows'

const shadowColors = [
  'rgba(0,0,0,0.25)', //0
  'rgba(0,0,0,0.2)', //1
  'rgba(0,0,0,0.14)', //2
  'rgba(0,0,0,0.12)', //3
]

const shadows: any = [
  'none',
  //shadows[1]
  `0px 1px 2px ${shadowColors[2]},
  	0px 2px 3px ${shadowColors[3]},
  	0px 1px 5px ${shadowColors[1]}`,
  //shadows[2]
  `0px 2px 4px ${shadowColors[2]},
  	0px 3px 3px ${shadowColors[3]},
  	0px 1px 8px ${shadowColors[1]}`,
  //shadows[3]
  `0px 3px 6px ${shadowColors[2]},
    0px 3px 7px ${shadowColors[3]},
    0px 1px 10px ${shadowColors[1]}`,
  //shadows[4]
  `0px 4px 7px ${shadowColors[2]},
    0px 1px 13px ${shadowColors[3]},
    0px 2px 8px ${shadowColors[1]}`,
  //shadows[5]
  `0px 6px 14px ${shadowColors[2]},
    0px 1px 22px ${shadowColors[3]},
    0px 3px 8px ${shadowColors[1]}`,
  //shadows[6]
  `0px 8px 14px ${shadowColors[2]},
    0px 3px 18px ${shadowColors[3]},
    0px 5px 9px ${shadowColors[1]}`,
  //shadows[7]
  `0px 9px 16px ${shadowColors[2]},
    0px 3px 20px ${shadowColors[3]},
    0px 5px 10px ${shadowColors[1]}`,
  //shadows[8]
  `0px 12px 20px ${shadowColors[2]},
    0px 5px 25px ${shadowColors[3]},
    0px 7px 10px ${shadowColors[1]}`,
  //shadows[9]
  `0px 16px 27px ${shadowColors[2]},
    0px 6px 35px ${shadowColors[3]},
    0px 8px 15px ${shadowColors[1]}`,
  //shadows[10]
  `0px 24px 42px ${shadowColors[2]},
    0px 9px 52px ${shadowColors[3]},
    0px 11px 20px ${shadowColors[1]}`,
]

export default shadows
