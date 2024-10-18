import React from 'react';

interface IPreposition {
  text: string;
  tag: keyof JSX.IntrinsicElements;
  className: string;
}

export const NextLinePreposition = ({ text, tag, className }: IPreposition) => {
  const prepositions = [
    'and',
    'or',
    'but',
    'for',
    'nor',
    'so',
    'yet',
    'the',
    'is',
    'to',
    'we',
    'in',
    'a',
    'as',
    'it',
    'of',
    'from',
    'with',
    'on',
    'not',
    'are',
  ];

  const regex = new RegExp(`\\s(${prepositions.join('|')})\\s`, 'gi');

  const newText = text.replace(regex, ' $1&nbsp;');

  return React.createElement(tag, {
    className,
    dangerouslySetInnerHTML: { __html: newText },
  });
};
