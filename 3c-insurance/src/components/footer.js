import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-[#90E4C1] p-6 text-center">
      <div className="mb-4">
        <p>&copy; 2024 3C Insurance. All rights reserved.</p>
      </div>
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#90E4C1] hover:text-white transition">
          <i className="fab fa-facebook-f fa-lg"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#90E4C1] hover:text-white transition">
          <i className="fab fa-twitter fa-lg"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#90E4C1] hover:text-white transition">
          <i className="fab fa-instagram fa-lg"></i>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#90E4C1] hover:text-white transition">
          <i className="fab fa-linkedin-in fa-lg"></i>
        </a>
      </div>
      <div>
        <p className="text-sm">
          Contact us:{" "}
          <a href="mailto:support@3cinsurance.com" className="hover:underline">
            support@3cinsurance.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
