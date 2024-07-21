import { useContext, useEffect } from "react";
import SettingsContext from "./SettingsContext";
import { Button } from "@/components/ui/button";

function SpotifyMusic() {
  const settingsInfo = useContext(SettingsContext);

  useEffect(()=>{

    const baseUrl = settingsInfo.spotifylink.split('?')[0];
    const path = baseUrl.split('open.spotify.com/')[1];
    const newUrl = `https://open.spotify.com/embed/${path}?utm_source=oembed`;
    settingsInfo.setSpotifylink(newUrl);

  },[]);

  return (
    <div className="flex flex-col justify-center items-center">
      <iframe
        src={settingsInfo.spotifylink}
        className="w-full h-[200px] border-none"
        allowfullscreen
        allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture;"
      ></iframe>
      <Button onClick={() => settingsInfo.setShowSettings(true)}>
        Settings
      </Button>
    </div>
  );
}

export default SpotifyMusic;
