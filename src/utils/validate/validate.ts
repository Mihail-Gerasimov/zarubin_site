interface IValues {
  [key: string]: string;
}

export const validate = (values: IValues) => {
  const errors: IValues = {};

  // objective
  if (!values.objective) {
    errors.objective = 'Enter main objectives';
  } else if (values.objective.length < 5) {
    errors.objective = 'Too short description';
  }

  if (!values.obstacle) {
    errors.obstacle = 'Enter your obstacles';
  } else if (values.obstacle.length < 5) {
    errors.obstacle = 'Too short destacle';
  }

  // company
  if (!values.name) {
    errors.name = 'Enter your name';
  } else if (values.name.length < 2) {
    errors.name = 'Name is too short';
  }

  if (!values.company_name) {
    errors.company_name = 'Enter the company name';
  } else if (values.company_name.length < 2) {
    errors.company_name = 'Company name is too short';
  }

  if (!values.about_business) {
    errors.about_business = 'Enter about business';
  } else if (values.about_business.length < 40) {
    errors.about_business = 'Too short';
  }

  return errors;
};
