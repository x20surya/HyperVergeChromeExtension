import { useState } from "react";
import SettingsContext from "./SettingsContext";
import Settings from "./Settings";
import SpotifyMusic from "./SpotifyMusic";

function Spotify() {
  const [spotifylink, setSpotifylink] = useState("https://open.spotify.com/embed/album/2ODvWsOgouMbaA5xf0RkJe?utm_source=oembed");
  const [showSettings, setShowSettings] = useState(false);

  return (
    <main className="h-full">
      <SettingsContext.Provider
        value={{
          showSettings,
          setShowSettings,
          spotifylink,
          setSpotifylink
        }}
      >
        {showSettings ? <Settings /> : <SpotifyMusic />}
      </SettingsContext.Provider>
    </main>
  );
}

export default Spotify;
