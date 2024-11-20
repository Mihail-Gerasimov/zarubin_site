import { Footer } from '@/src/components/Footer/Footer';
import { Header } from '@/src/components/Header/Header';
import { NotFound } from '@/src/components/NotFound/NotFound';
import { getExpertiseList } from '@/src/utils/expertiseMenu';
import { getExpertiseMetadata } from '@/src/utils/getExpertiseMetadata';
import './globals.css';

const expertiseSubMenu = getExpertiseList();
const expertiseMetadata = getExpertiseMetadata();

export default function NotFoundPage() {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/assets/images/icons/favicon.svg' sizes='any' />
      </head>
      <body className='flex flex-col gap-[60px] bg-main-bg text-white'>
        <Header
          expertiseMetadata={expertiseMetadata}
          expertiseSubmenu={expertiseSubMenu}
        />
        <main>
          <NotFound />
        </main>
        <Footer />
      </body>
    </html>
  );
}
