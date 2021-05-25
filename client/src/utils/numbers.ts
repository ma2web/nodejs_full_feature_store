export const byteConvertor = (bytes: number) => {
  const sizes = ['b', 'kb', 'mb', 'gb', 'tb']
  if (bytes === 0) {
    return 'n/a'
  }
  //@ts-ignore
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
  if (i === 0) {
    return `${bytes} ${sizes[i]}`
  }
  return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`
}

export const calcPercentage = (value: number, max: number): number => {
  const percentValue = Number(((value * 100) / max).toFixed(0))
  return value >= max ? 100 : percentValue
}

export const generateRandomNumber = (digit = 2) => {
  return Math.floor(+Math.random().toFixed(digit) * 100) as any
}

export const convertOpacityToAlpha = (hexColor: string,percent: number) => {
  const alpha = Math.round(percent * 255);
  const hex = (alpha + 0x10000).toString(16).substr(-2).toUpperCase();
  return hexColor+hex
}