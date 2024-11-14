export const sendBrief = async (
  idea: string,
  objective: string,
  obstacles: string,
  budget: string,
  date: string,
  name: string,
  company_name: string,
  about_business: string,
  email: string,
) => {
  try {
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idea,
        objective,
        obstacles,
        budget,
        company_name,
        about_business,
        name,
        email,
        date,
      }),
    });
    console.log('Email sent successfully:', await response.json());
  } catch (error) {
    console.log(error);
  }
};
