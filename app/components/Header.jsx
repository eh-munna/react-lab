import Logo from '@/app/components/Logo';
import Navbar from '@/app/components/Navbar';

export default function Header({docs}) {
  return (
    <>
      <header className="flex justify-between items-center p-4 border border-t-0 border-r-0 border-l-0 border-b-amber-400">
        <Logo />
        <Navbar />
      </header>
    </>
  );
}
