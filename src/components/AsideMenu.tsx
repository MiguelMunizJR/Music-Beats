import HomeIcon from "@/icons/Home";
import SearchIcon from "@/icons/Search";
import LibraryIcon from "@/icons/Library";
import SideMenuItem from "./SideMenuItem";

import { playlists } from "@/lib/data";
import SideMenuCard from "./SideMenuCard";

interface Props {}

const AsideMenu = (props: Props) => {
  return (
    <nav className="flex flex-col flex-1 gap-2">
      <div className="bg-zinc-900 p-1 rounded-md">
        <h1 className="text-zinc-200 px-4 py-2">Music Beats JR</h1>
        <ul className="pt-1">
          <SideMenuItem href="/">
            <HomeIcon />
            Inicio
          </SideMenuItem>

          <SideMenuItem href="/#">
            <SearchIcon />
            Buscar
          </SideMenuItem>
        </ul>
      </div>

      <div className="bg-zinc-900 p-1 flex-1 rounded-md">
        <ul>
          <SideMenuItem href="/">
            <LibraryIcon />
            Tu biblioteca
          </SideMenuItem>
          <div className="pt-2">
            {playlists.map((playlist) => (
              <SideMenuCard playlist={playlist} key={playlist.id} />
            ))}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default AsideMenu;
