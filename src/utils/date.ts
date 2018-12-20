const paddedDate = (num: number) =>
  num.toString().length !== 1 ? num.toString() : `0${num.toString()}`;

export const getStartStr = (start: string) => {
  const date = new Date(start);
  const hours = paddedDate(date.getHours());
  const minutes = paddedDate(date.getMinutes());
  return `${hours}:${minutes}`;
};

export const getEndStr = (start: string, long: boolean) => {
  const date = new Date(start);
  date.setMinutes(long ? date.getMinutes() + 10 : date.getMinutes() + 5);
  const hours = paddedDate(date.getHours());
  const minutes = paddedDate(date.getMinutes());
  return `${hours}:${minutes}`;
};
