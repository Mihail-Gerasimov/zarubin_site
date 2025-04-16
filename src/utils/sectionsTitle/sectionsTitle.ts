interface ISectionsTitle {
  [key: string]: {
    [key: string]: {
      title: string;
      descripton: string;
    };
  };
}

export const sectionsTitle: ISectionsTitle = {
  main: {
    expertise: {
      title: 'Expertise',
      descripton:
        'Designing tech that drives growth, not overhead',
    },
    insights: {
      title: 'Insights',
      descripton:
        'Explore how modern IT reshapes performance, operations, and strategy in fast-paced industries',
    },
    feedback: {
      title: 'Feedback',
      descripton: 'Honest words of our partners about cooperation',
    },
  },
};
