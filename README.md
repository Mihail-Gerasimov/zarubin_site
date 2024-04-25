This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
------------

1.	Для загрузки поста необходимо зайти в репозиторий https://github.com/DgtlBureau/soccer_blog, перейти по следующим директориям : src/posts

2. 	В разделе posts справа нажать на “Add file”, и выбрать “Upload files” что бы загрузить необходимые файлы с расширением .md . После выбора откроется окно в котором нужно будет нажать на “choose your files” и выбрать файлы. Так же нужно будет поставить отметку на “Commit directly to the main branch.” 

3. 	Картинка которая будет использоваться в файле должна лежать в директории public/assets/images. В файле который загружается в posts должен быть прописан путь к изображению следующим образом: ‘/assets/images/<image_name>.png’ 
ВАЖНО: имя файла картинки не должно содержать пробелы. Вместо пробелов использовать “-” или “_”

4. 	Файл который загружается в posts должен быть размечен согласно Markdown разметке. Так же необходимо что бы были следующие поля в шапке: title, description, image

Инструкция по разметке есть на следующих источниках: https://gist.github.com/Jekins/2bf2d0638163f1294637,
https://doka.guide/tools/markdown, 

Thu Apr 25 20:15:54 UTC 2024
