import fs from 'fs';
import matter from 'gray-matter';

export const getPostMetadata = (basePath: string) => {
  const folder = basePath + '/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  const posts = markdownPosts.map((filename) => {
    const fileContent = fs.readFileSync(`${basePath}/${filename}`, 'utf8');
    const matterResult = matter(fileContent);
    return {
      title: matterResult.data.title,
      description: matterResult.data.description,
      image: matterResult.data.image,
      slug: filename.replace('.md', ''),
      date: matterResult.data.date,
      tag: matterResult.data.tag,
    };
  });

  return posts;
};
