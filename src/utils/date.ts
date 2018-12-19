export const getStartStr = (start: string) => {
  const date = new Date(start);
  return `${date.getHours()}:${date.getMinutes()}`;
};

export const getEndStr = (start: string, long: boolean) => {
  const date = new Date(start);
  date.setMinutes(long ? date.getMinutes() + 10 : date.getMinutes() + 5);
  return `${date.getHours()}:${date.getMinutes()}`;
};
