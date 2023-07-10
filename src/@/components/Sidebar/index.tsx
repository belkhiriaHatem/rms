import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { ChevronsLeft, ChevronsRight, Utensils } from "lucide-react";

const Sidebar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    {
      href: "/",
      title: "Homepage",
    },
    {
      href: "/about",
      title: "About",
    },
    {
      href: "/item",
      title: "Item",
    },
  ];
  return (
    <div
      className={`flex ${
        isOpen ? "w-64" : "w-12"
      } m-4 flex-col rounded-md bg-secondary p-4 transition-all duration-500`}
    >
      <div className="flex flex-1 flex-row gap-2">
        <div className="flex justify-end rounded-md bg-accent transition-all duration-100">
          <button
            className="rounded-md p-0.5 text-white"
            onClick={toggleSidebar}
            aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            {isOpen ? (
              <ChevronsLeft className="h-3 w-3" />
            ) : (
              <ChevronsRight className="h-3 w-3" />
            )}
          </button>
        </div>
        {isOpen && (
          <aside className="w-full">
            <nav>
              <ul>
                {menuItems.map(({ href, title }) => (
                  <li className="m-1" key={title}>
                    <Link href={href}>
                      <span
                        className={`flex cursor-pointer rounded-md p-1 text-base hover:text-accent ${
                          router.asPath === href ? "font-semibold" : ""
                        }`}
                      >
                        {title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
