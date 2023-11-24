import Sidebar from '../ui/sign-up/sidebar';
import Navbar from '../ui/sign-up/navbar';
import Footer from '../ui/sign-up/footer';

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div className='flex'>
      <div className=''>
        <Sidebar />
      </div>
      <div className='relative h-screen'>
        <Navbar />
        <div className='mt-10'>{children}</div>
      </div>
      <div className='relative h-screen'>
        <Footer />
      </div>
    </div>
  );
}
