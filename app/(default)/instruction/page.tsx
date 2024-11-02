import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

export const metadata = {
  title: 'README',
};

async function getReadmeContent() {
  const filePath = path.join(process.cwd(), 'README.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Извлекаем контент и метаданные
  const { content } = matter(fileContents);

  // Конвертируем Markdown в HTML
  const processedContent = await remark().use(html).process(content);
  return processedContent.toString();
}

export default async function ReadmePage() {
  const contentHtml = await getReadmeContent();

  return (
    <div className='prose mx-auto text-white'>
      <h1>README</h1>
      <div
        dangerouslySetInnerHTML={{ __html: contentHtml }}
        className='text-white'
      />
    </div>
  );
}
