import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white text-black p-4 shadow-md flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <img src="/logo4.png" alt="3C Insurance Logo" className="h-20 mr-3" />
      </Link>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" 
           className="block  py-2 px-4  transition-colors duration-300   hover:text-[#90E4C1]">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/plans"
              className="block  py-2 px-4  transition-colors duration-300  hover:text-[#90E4C1]">
              Plans
            </Link>
          </li>
          <li>
            <Link
              href="/benefits"
              className="block py-2 px-4  transition-colors duration-300   hover:text-[#90E4C1]">
              Benefits
            </Link>
          </li>
          <li>
            <Link
              href="/faq"
              className="block py-2 px-4  transition-colors duration-300   hover:text-[#90E4C1]">
              FAQ
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block py-2 px-4  transition-colors duration-300   hover:text-[#90E4C1]">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
