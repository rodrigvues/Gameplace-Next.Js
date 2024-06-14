import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-6 flex justify-between items-center">
      <div className="text-xl font-bold">GamePlace</div>
      <div className="flex space-x-4">
        <Link href="#">
          <span className="text-white cursor-pointer">Sign In</span>
        </Link>
        <Link href="#">
          <span className="text-white cursor-pointer">Sign Up</span>
        </Link>
        <Link href="#">
          <span className="bg-red-600 text-white px-4 py-2 rounded cursor-pointer">Anunciar</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
