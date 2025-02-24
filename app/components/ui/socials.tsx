import { Icon } from "./icon"

export default function SocialIcons() {
  return (
    <>
      <a href="https://www.instagram.com/rohnamusic" className="hover:scale-105">
        <Icon name="instagram" size="lg" title="Instagram"></Icon>
      </a>

      <a href="https://www.tiktok.com/@rohnamusic" className="hover:scale-105">
        <Icon name="tiktok" size="lg" title="TikTok"></Icon>
      </a>

      <a href="https://open.spotify.com/artist/7yH9wdVRj7Po5vpa19yNC2?si=HIud4zziRW2rtxDE0Wz2BA" className="hover:scale-105">
        <Icon name="spotify" size="lg" title="Spotify"></Icon>
      </a>

      <a href="https://music.apple.com/us/artist/rohna/1469839464" className="hover:scale-105">
        <Icon name="apple" size="lg" title="Apple Music"></Icon>
      </a>

      <a href="https://www.youtube.com/@rohnamusic" className="hover:scale-105">
        <Icon name="youtube" size="lg" title="Youtube"></Icon>
      </a>

      <a href="https://bnds.us/jih8ni" className="hover:scale-105">
        <Icon name="bandsintown" size="lg" title="Bands In Town"></Icon>
      </a>
    </>
  )
}