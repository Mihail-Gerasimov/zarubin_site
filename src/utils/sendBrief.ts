export const sendBrief = async (
  idea: string,
  objective: string,
  obstacle: string,
  budget: string,
  name: string,
  company_name: string,
  about_business: string,
  email: string,
) => {
  try {
    const response = await fetch('/api/briefsend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idea,
        objective,
        obstacle,
        budget,
        company_name,
        about_business,
        name,
        email,
      }),
    });
    console.log('Email sent successfully:', await response.json());
  } catch (error) {
    console.error(error);
  }
};
