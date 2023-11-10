import type { Playlist } from "@/lib/data";

interface Props {
  playlist: Playlist;
}

const SideMenuCard: React.FC<Props> = ({ playlist }) => {
  const { id, cover, title, artists, color } = playlist;

  const artistsString = artists.join(", ");
  return (
    <a
      href={`/playlist/${id}`}
      className="playlist-item flex relative p-2 overflow-hidden items-center gap-2 rounded-lg hover:bg-zinc-800"
    >
      <picture className="h-12 w-12 flex-none">
        <img
          src={cover}
          alt={`Cover of ${title} by ${artistsString}`}
          className="object-cover w-full h-full rounded"
        />
      </picture>

      <div className="flex flex-auto flex-col truncate">
        <h4 className="text-white text-sm">{title}</h4>

        <span className="text-xs text-gray-400">{artistsString}</span>
      </div>
    </a>
  );
};

export default SideMenuCard;
