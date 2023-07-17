const Footer = () => {
  return (
    <footer className="bg-muted shadow">
      <div className="mx-auto w-full max-w-screen-xl p-1 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center">
          © 2023{" "}
          <a href="#" className="font-bold text-accent hover:underline">
            Your Company™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm font-medium sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
