import fs from 'fs';
import matter from 'gray-matter';

export interface Case {
  title: string;
  image: string;
  slug: string;
  link: string;
  linkName: string;
}

export const getMainBannerMetadata = () => {
  const basePath = 'src/main/banner_slides';
  const folder = basePath + '/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  const posts = markdownPosts.map((filename): Case => {
    const fileContent = fs.readFileSync(`${basePath}/${filename}`, 'utf8');
    const matterResult = matter(fileContent);
    return {
      title: matterResult.data.title,
      image: matterResult.data.image,
      slug: filename.replace('.md', ''),
      link: matterResult.data.link,
      linkName: matterResult.data.linkName,
    };
  });

  return posts;
};
