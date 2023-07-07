import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();

     const menuItems = [
       {
         href: '/',
         title: 'Homepage',
       },
       {
         href: '/about',
         title: 'About',
       },
       {
         href: '/contact',
         title: 'Contact',
       },
     ];
  return (
    <div className="flex w-64 flex-col border-r p-5">
      {/* <ul>
        <li>
          <Link href="/page1">Page 1</Link>
        </li>
        <li>
          <Link href="/page2">Page 2</Link>
        </li>
      </ul> */}
      <div className="flex flex-col md:flex-row flex-1">
        <aside className="w-full md:w-60">
          <nav>
            <ul>
              {menuItems.map(({ href, title }) => (
                <li className="m-2" key={title}>
                  <Link href={href}>
                    <span
                      className={`flex p-2 bg-accent text-accent-foreground font-semibold rounded cursor-pointer ${
                        router.asPath === href && 'text-accent'
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
      </div>
    </div>
  );
};

export default Sidebar;
