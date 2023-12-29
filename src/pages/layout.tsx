import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";

interface Page {
  name: string;
  path: string;
}

interface Props {
  pages: Page[];
}

export default function Layout({ pages }: Props) {
  return (
    <div className="flex h-screen w-full gap-2">
      <nav className="h-full min-w-40 overflow-auto bg-gray-200 p-2">
        {pages.map((page) => (
          <NavLink
            key={page.path}
            to={page.path}
            className={({ isActive }) =>
              clsx(["block", isActive ? "text-pink-700" : "text-blue-700"])
            }
          >
            {page.name}
          </NavLink>
        ))}
      </nav>
      <main className="h-full overflow-auto p-2">
        <Outlet />
      </main>
    </div>
  );
}
