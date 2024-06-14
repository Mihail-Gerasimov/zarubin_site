import fs from 'fs';
import matter from 'gray-matter';

export interface Case {
  industries: string[];
  title: string;
  tag: string;
  slug: string;
}

export const getCaseMetadata = (basePath: string) => {
  const folder = basePath + '/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  const posts = markdownPosts.map((filename): Case => {
    const fileContent = fs.readFileSync(`${basePath}/${filename}`, 'utf8');
    const matterResult = matter(fileContent);
    return {
      title: matterResult.data.title,
      industries: matterResult.data.industries,
      tag: matterResult.data.tag,
      slug: filename.replace('.md', ''),
    };
  });

  return posts;
};
