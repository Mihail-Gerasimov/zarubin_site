import fs from 'fs';
import path from 'path';

export const getAllInsights = () => {
  const InsightsDirectory = path.join(process.cwd(), 'src/posts');
  const filenames = fs.readdirSync(InsightsDirectory);
  return filenames.map((filename) => {
    const filePath = path.join(InsightsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { title, date, description } = JSON.parse(fileContents);
    return {
      title,
      date,
      description,
      link: `https://thebrightbyte.com/insights/${filename.replace('.md', '')}`,
    };
  });
};
