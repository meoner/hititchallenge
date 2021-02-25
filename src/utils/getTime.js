import dayjs from 'dayjs';

export function getTime() {
  const sixMonthAgo = dayjs().subtract(6, 'month').format().split('+')[0] + 'Z';
  const threeMonthLater = dayjs().add(3, 'month').format().split('+')[0] + 'Z';

  const time = {
    sixMonthAgo,
    threeMonthLater,
  };
  return time;
}
