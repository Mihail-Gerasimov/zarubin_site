import fs from 'fs';
import matter from 'gray-matter';

interface TeamMetadata {
  name: string;
  job: string;
  image: string;
}

export const getTeamMetadata = (basePath: string) => {
  const folder = basePath + '';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  const team = markdownPosts.map((filename): TeamMetadata => {
    const fileContent = fs.readFileSync(`${basePath}/${filename}`, 'utf8');
    const matterResult = matter(fileContent);
    return {
      name: matterResult.data.name,
      job: matterResult.data.job,
      image: matterResult.data.image,
    };
  });

  return team;
};
