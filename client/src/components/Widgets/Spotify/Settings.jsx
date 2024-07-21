import { useContext, useState, useEffect } from "react";
import SettingsContext from "./SettingsContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Settings() {
  const settingsInfo = useContext(SettingsContext);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSave = () => {
    settingsInfo.setSpotifylink(input);
    settingsInfo.setShowSettings(false);
  };

  return (
    <div className="flex flex-col justify-evenly h-full px-10">
      <Input
        placeholder="Enter SpotifyLink"
        value={input}
        onChange={handleInputChange}
      />
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => settingsInfo.setShowSettings(false)}
        >
          Close
        </Button>
        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  );
}

export default Settings;
