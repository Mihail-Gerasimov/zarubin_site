import { Footer } from '@/src/components/Footer/Footer';
import { Header } from '@/src/components/Header/Header';

export default function BlogLoyaut({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header dark={false} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
