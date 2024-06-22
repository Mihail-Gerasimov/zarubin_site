export const contentTrimming = (descr: string, length: number) => {
  if (!descr) return '';
  const description =
    descr.length < length ? descr : descr.slice(0, length).trim() + '...';
  return description;
};
