export const getMinSecTime = (totalTimeInSec: number): string => {
  const intSeconds = Math.ceil(totalTimeInSec);
  if (intSeconds < 60) {
    if (intSeconds < 10) {
      return `00:0${intSeconds}`;
    }
    return `00:${intSeconds}`;
  }
  const minutes = Math.floor(intSeconds / 60);
  const seconds = intSeconds - minutes * 60;
  if (seconds < 10) {
    return `${minutes.toString()}:0${Math.ceil(seconds)}`;
  }
  return `${minutes.toString()}:${Math.ceil(seconds)}`;
};
