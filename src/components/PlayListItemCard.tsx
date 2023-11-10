import type { Playlist } from "@/lib/data";
// import { CardPlayButton } from "./CardPlayButton"

interface Props {
  playlist: Playlist;
}

const PlayListItemCard = ({ playlist }: Props) => {
  const { id, cover, title, artists, color } = playlist;
  const artistsString = artists.join(", ");

  return (
    <article className="group relative hover:bg-zinc-800 shadow-lg hover:shadow-xl bg-zinc-500/30 rounded-md ransi transition-all duration-300">
      <div
        className="absolute right-4 bottom-20 translate-y-4
            transition-all duration-500 opacity-0
            group-hover:translate-y-0 group-hover:opacity-100
            z-10"
      >
        {/* <CardPlayButton id={id} client:visible /> */}
      </div>

      <a
        href={`/playlist/${id}`}
        className="playlist-item transition-all duration-300 flex relative p-2 overflow-hidden gap-2 pb-6 rounded-md w-44 flex-col"
        // transition:name=`playlist ${id} box`
      >
        <picture className="aspect-square w-full h-auto flex-none">
          <img
            src={cover}
            alt={`Cover of ${title} by ${artistsString}`}
            className="object-cover w-full h-full rounded-md"
            // transition:name=`playlist ${id} image`
          />
        </picture>

        <div className="flex flex-auto flex-col px-2">
          <h4
            className="text-white text-sm"
            //   transition:name=`playlist ${id} title`
          >
            {title}
          </h4>

          <span
            className="text-xs text-gray-400"
            // transition:name=`playlist ${id} artists`
          >
            {artistsString}
          </span>
        </div>
      </a>
    </article>
  );
};

export default PlayListItemCard;