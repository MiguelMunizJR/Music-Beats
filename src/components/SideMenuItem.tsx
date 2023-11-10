import { ReactNode } from "react";

interface Props {
  href?: string;
  children: ReactNode;
}

const SideMenuItem: React.FC<Props> = ({ children, href }) => {
  return (
    <li>
      <a
        className="flex gap-3 text-zinc-400 hover:text-zinc-100 items-center py-3 px-4 font-medium transition duration-300"
        href={href}
      >
        {children}
      </a>
    </li>
  );
};

export default SideMenuItem;
