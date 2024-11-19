interface IData {
  id: string;
  label: string;
  placeholder: string;
  answer: string;
  required: boolean;
  type?: string;
}

export interface IInitialValue {
  id: string;
  question: string;
  required: boolean;
  answer?: string;
  type: string;
  data: IData[];
}

export const initialData: IInitialValue[] = [
  {
    id: 'idea',
    question: 'Describe your idea',
    required: false,
    type: 'textarea',
    data: [
      {
        id: 'idea',
        type: 'textarea',
        label: 'Briefly',
        placeholder: '',
        answer: '',
        required: false,
      },
    ],
  },
  {
    id: 'objective',
    question: 'What is the main objective?',
    type: 'input',
    required: true,
    data: [
      {
        id: 'objective',
        type: 'input',
        label: '',
        placeholder: 'Describe the main objectives',
        answer: '',
        required: true,
      },
    ],
  },
  {
    id: 'obstacle',
    question: 'WHAT IS THE MAIN OBSTACLES TO BUILD the app for your business?',
    type: 'textarea',
    required: true,
    data: [
      {
        id: 'obstacle',
        type: 'textarea',
        label: 'Briefly introduce your biggest obstacle',
        placeholder: '',
        answer: '',
        required: true,
      },
    ],
  },
  {
    id: 'budget',
    question: 'WHAT IS YOUR BUDGET',
    type: 'button',
    required: true,
    answer: '',
    data: [
      {
        id: 'budget',
        type: 'button',
        label: '',
        placeholder: '',
        answer: 'USD 5,000 USD 10,000',
        required: false,
      },
      {
        id: 'budget',
        type: 'button',
        label: '',
        placeholder: '',
        answer: 'USD 10,000 to USD 25,000',
        required: false,
      },
      {
        id: 'budget',
        type: 'button',
        label: '',
        placeholder: '',
        answer: 'USD 25,000 to USD 50,000',
        required: false,
      },
      {
        id: 'budget',
        type: 'button',
        label: '',
        placeholder: '',
        answer: 'USD 50,000 to USD 100,000',
        required: false,
      },
      {
        id: 'budget',
        type: 'button',
        label: '',
        placeholder: '',
        answer: 'USD 100,000 to USD 500,000',
        required: false,
      },
      {
        id: 'budget',
        type: 'button',
        label: '',
        placeholder: '',
        answer: 'USD 500,000 or more',
        required: false,
      },
    ],
  },
  {
    id: 'company',
    question:
      'Whats your name? Could you please share with us the name of your company and briefly introduce it?',
    type: 'input',
    required: true,
    data: [
      {
        id: 'name',
        type: 'input',
        label: '',
        placeholder: 'Name',
        answer: '',
        required: true,
      },
      {
        id: 'company_name',
        type: 'input',
        label: '',
        placeholder: 'Company name',
        answer: '',
        required: true,
      },
      {
        id: 'about_business',
        type: 'textarea',
        label: 'Briefly introduce about your Business',
        placeholder: '',
        answer: '',
        required: true,
      },
      {
        id: 'email',
        type: 'input',
        label: '',
        placeholder: 'https://companyname.com',
        answer: '',
        required: false,
      },
    ],
  },
  {
    id: 'date',
    question: 'Select a date and time for the strategic session',
    type: 'date',
    required: true,
    data: [
      {
        id: 'date',
        type: 'date',
        label: '',
        placeholder: '',
        answer: '',
        required: true,
      },
    ],
  },
];

export const generateInitialValues = (data: IInitialValue[]) => {
  const initialValues: { [key: string]: string } = {};

  data.map((item) => {
    if (item.type !== 'input') {
      initialValues[item.id] = '';
    }

    item.data.forEach((el) => {
      initialValues[el.id] = '';
    });
  });
  return initialValues;
};

export const generateNewInitialValue = (data: IInitialValue) => {
  const initialValues: { [key: string]: string } = {};

  data.data.map((item) => {
    initialValues[item.id] = '';
  });

  return initialValues;
};

export const initialFormikValue = generateInitialValues(initialData);
