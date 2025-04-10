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
      title: 'Our Areas of Expertise',
      descripton:
        'Innovative solutions for your business: our key areas of work',
    },
    insights: {
      title: 'Insights',
      descripton:
        'The latest research and articles on information technology in the field of sports and business',
    },
    feedback: {
      title: 'Feedback',
      descripton: 'Honest words of our partners about cooperation',
    },
  },
};
