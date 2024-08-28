import { Footer } from '@/src/components/Footer/Footer';
import { Header } from '@/src/components/Header/Header';
import { NotFound } from '@/src/components/NotFound/NotFound';
import './globals.css';

export default function NotFoundPage() {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/assets/images/icons/favicon.svg' sizes='any' />
      </head>
      <body className='flex flex-col gap-[60px] bg-main-bg text-white'>
        <Header />
        <main>
          <NotFound />
        </main>
        <Footer />
      </body>
    </html>
  );
}
