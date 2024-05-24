export const contentTrimming = (descr: string, length: number) => {
  const description =
    descr.length < length ? descr : descr.slice(0, length).trim() + '...';
  return description;
};
