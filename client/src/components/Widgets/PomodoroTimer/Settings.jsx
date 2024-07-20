import SettingsContext from "./SettingsContext";
import { useContext } from "react";
import { Slider } from "@/components/ui/slider";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function Settings() {
  const settingsInfo = useContext(SettingsContext);
  return (
    <Card className="border-none">
      <CardHeader>
        <CardTitle>Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Pomodoro Timer</p>
        <Label>{settingsInfo.workMinutes}:00</Label>
        <Slider
          value={[settingsInfo.workMinutes]}
          onValueChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
          min={1}
          max={100}
          step={1}
        />
      </CardContent>
      <CardContent>
        <p>Break Timer</p>
        <Label>{settingsInfo.breakMinutes}:00</Label>
        <Slider
          value={[settingsInfo.breakMinutes]}
          onValueChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
          min={1}
          max={100}
          step={1}
        />
      </CardContent>
      <CardFooter>
        <Button onClick={() => settingsInfo.setShowSettings(false)}>
          Save
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Settings;
