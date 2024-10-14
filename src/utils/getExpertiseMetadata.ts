import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export interface Case {
  industries: string[];
  title: string;
  description: string;
  tag: string;
  slug: string;
  logo: string;
  logo_hover: string | null | undefined;
  instruments: string[] | [];
  bannerImage: string;
}

const getMarkdownFiles = (dir: string): string[] => {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getMarkdownFiles(filePath));
    } else if (file.endsWith('.md')) {
      results.push(filePath);
    }
  });
  return results;
};

export const getExpertiseMetadata = (basePath: string): Case[] => {
  const markdownFiles = getMarkdownFiles(basePath);

  const posts = markdownFiles.map((filePath): Case => {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const matterResult = matter(fileContent);
    return {
      title: matterResult.data.title,
      description: matterResult.data.description,
      industries: matterResult.data.industries,
      tag: matterResult.data.tag,
      slug: path.basename(filePath, '.md'),
      bannerImage: matterResult.data.bannerImage,
      logo: matterResult.data.logo,
      logo_hover: matterResult.data.logo_hover,
      instruments: matterResult.data.instruments,
    };
  });

  return posts;
};
