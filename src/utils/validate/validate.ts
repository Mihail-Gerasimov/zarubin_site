interface IValues {
  [key: string]: string;
}

export const validate = (values: IValues) => {
  const errors: IValues = {};

  //briefly
  if ('idea' in values) {
    if (!values.idea) {
      errors.idea = 'Fill in the field';
    }
  }

  // objective
  if ('objective' in values) {
    if (!values.objective) {
      errors.objective = 'Fill in the field';
    } else if (values.objective.length < 5) {
      errors.objective = 'Too short description';
    }
  }

  if ('obstacle' in values) {
    if (!values.obstacle) {
      errors.obstacle = 'Fill in the field';
    } else if (values.obstacle.length < 5) {
      errors.obstacle = 'Too short destacle';
    }
  }

  // company
  if ('name' in values) {
    if (!values.name) {
      errors.name = 'Fill in the field';
    } else if (values.name.length < 2) {
      errors.name = 'Name is too short';
    }
  }

  if ('company_name' in values) {
    if (!values.company_name) {
      errors.company_name = 'Fill in the field';
    } else if (values.company_name.length < 2) {
      errors.company_name = 'Company name is too short';
    }
  }

  if ('about_business' in values) {
    if (!values.about_business) {
      errors.about_business = 'Fill in the field';
    } else if (values.about_business.length < 40) {
      errors.about_business = 'Too short';
    }
  }
  return errors;
};
