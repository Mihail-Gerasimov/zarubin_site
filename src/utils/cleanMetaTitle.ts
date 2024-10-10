export const cleanMetaTitle = (word: string) => {
  const regExpTitle = /[^a-zA-Zа-яА-Я\s,']+/g;
  const result = word.replace(regExpTitle, '');
  return result.trim();
};
