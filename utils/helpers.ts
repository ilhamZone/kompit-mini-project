export const findUlrId = (url: string) => {
  const match = url.match(/\/(\d+)\//);
  const id = match ? match[1] : null;
  return id;
};
