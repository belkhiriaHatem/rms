import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Sidebar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="m-2">
      <button
        onClick={toggleSidebar}
        type="button"
        className="m-2 inline-flex items-center justify-start rounded-lg p-2 text-sm text-accent hover:bg-border"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <div className="flex flex-1 flex-col items-center overflow-x-hidden">
        <aside
          id="sidebar-multi-level-sidebar"
          className={`transition-all duration-200 ${
            isOpen ? "w-64" : "flex w-12 flex-col justify-center"
          }`}
          aria-label="Sidebar"
        >
          <div className="h-full overflow-y-auto px-2 py-3">
            <ul className="space-y-2 overflow-x-hidden font-medium">
              <li>
                <Link
                  href="/"
                  className={`group flex w-full items-center gap-2 rounded-lg p-2 hover:bg-border ${
                    isOpen ? "" : "justify-center"
                  }`}
                >
                  <svg
                    className={`h-5 w-5 flex-shrink-0 ${
                      router.asPath === "/" ? "text-accent" : ""
                    } transition duration-75`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span
                    className={`flex-1 whitespace-nowrap transition-all duration-75 ${
                      isOpen ? "" : "hidden"
                    }`}
                  >
                    Dashboard
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`group flex w-full items-center gap-2 rounded-lg p-2 hover:bg-border ${
                    isOpen ? "" : "justify-center"
                  }`}
                >
                  <svg
                    className={`h-5 w-5 flex-shrink-0 ${
                      router.asPath === "/about" ? "text-accent" : ""
                    } transition duration-75`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>
                  <span
                    className={`flex-1 whitespace-nowrap transition-all duration-75 ${
                      isOpen ? "" : "hidden"
                    }`}
                  >
                    Users
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/item"
                  className={`group flex w-full items-center gap-2 rounded-lg p-2 hover:bg-border ${
                    isOpen ? "" : "justify-center"
                  }`}
                >
                  <svg
                    className={`h-5 w-5 flex-shrink-0 ${
                      router.asPath === "/item" ? "text-accent" : ""
                    } transition duration-75`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                  </svg>
                  <span
                    className={`flex-1 whitespace-nowrap transition-all duration-75 ${
                      isOpen ? "" : "hidden"
                    }`}
                  >
                    Products
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
