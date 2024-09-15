import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="text-xl font-bold text-blue-600 uppercase">Script School</div>
        <ul className="flex space-x-6">
          <li><Link href="/" className="text-gray-700">Home</Link></li>
          <li><Link href="/about" className="text-gray-700">About</Link></li>
          <li><Link href="/courses" className="text-gray-700">Courses</Link></li>
          <li><Link href="/instructors" className="text-gray-700">Instructors</Link></li>
          <li><Link href="/contact" className="text-gray-700">Contact</Link></li>
        </ul>
        <div>
          <button className="text-orange-500 border border-orange-500 px-4 py-2 rounded-md">Log in / Register</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
