interface Props {
  url: string
}

export default function YoutubeEmbed({ url }: Props) {
  return (
    <iframe className="rounded-2xl w-[300px] h-[200px] md:w-[400px] md:h-[300px] xl:w-[560px] xl:h-[315px]" src={`https://www.youtube-nocookie.com/embed/${url}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
    </iframe>
  );
}
