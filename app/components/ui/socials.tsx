import { Icon } from "./icon"

type Size = "font" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl"

export default function SocialIcons({ size = 'font' }: { size?: Size }) {
  return (
    <>
      <a href="https://www.instagram.com/rohnamusic" className="hover:scale-105">
        <Icon name="instagram" size={size} title="Instagram"></Icon>
      </a>

      <a href="https://www.tiktok.com/@rohnamusic" className="hover:scale-105">
        <Icon name="tiktok" size={size} title="TikTok"></Icon>
      </a>

      <a href="https://open.spotify.com/artist/7yH9wdVRj7Po5vpa19yNC2?si=HIud4zziRW2rtxDE0Wz2BA" className="hover:scale-105">
        <Icon name="spotify" size={size} title="Spotify"></Icon>
      </a>

      <a href="https://music.apple.com/us/artist/rohna/1469839464" className="hover:scale-105">
        <Icon name="apple" size={size} title="Apple Music"></Icon>
      </a>

      <a href="https://www.youtube.com/@rohnamusic" className="hover:scale-105">
        <Icon name="youtube" size={size} title="Youtube"></Icon>
      </a>

      <a href="https://bnds.us/jih8ni" className="hover:scale-105">
        <Icon name="bandsintown" size={size} title="Bands In Town"></Icon>
      </a>
    </>
  )
}