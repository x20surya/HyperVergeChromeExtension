import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  BookAIcon,
  BotIcon,
  BugIcon,
  CheckCheckIcon,
  CpuIcon,
  GemIcon,
  InfoIcon,
  Music2Icon,
  PaperclipIcon,
  SheetIcon,
  TimerIcon,
} from "lucide-react";

function Sidebar({ addHandler }) {
  return (
    <div className="flex flex-col gap-5 w-full items-center">
      <div className="w-40 h-10"></div>
      <Command className="border w-3/4 ">
        <CommandInput placeholder="Search Widget..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Widgets">
            <CommandItem>
              <div className="flex items-center">
                <TimerIcon className="pr-1" />
                <span>Pomodoro Timer</span>
              </div>
              <button
                onClick={() => {
                  addHandler("widget1");
                }}
                variant="ghost"
              >
                +
              </button>
            </CommandItem>
            <CommandItem>
              <div className="flex items-center">
                <CheckCheckIcon className="pr-1" />
                <span>Daily check list</span>
              </div>

              <button
                onClick={() => {
                  addHandler("widget2");
                }}
                variant="ghost"
              >
                +
              </button>
            </CommandItem>
            <CommandItem>
              <div className="flex items-center">
                <InfoIcon className="pr-1" />
                <span>Announcments</span>
              </div>

              <button
                onClick={() => {
                  addHandler("widget3");
                }}
                variant="ghost"
              >
                +
              </button>
            </CommandItem>
            <CommandItem>
              <div className="flex items-center">
                <BookAIcon className="pr-1" />
                <span>Book Quote - Read by X</span>
              </div>

              <button
                onClick={() => {
                  addHandler("widget4");
                }}
                variant="ghost"
              >
                +
              </button>
            </CommandItem>
            <CommandItem>
              <div className="flex items-center">
                <PaperclipIcon className="pr-1" />
                <span>Forms</span>
              </div>
              <button
                onClick={() => {
                  addHandler("widget5");
                }}
                variant="ghost"
              >
                +
              </button>
            </CommandItem>
            <CommandItem>
              <div className="flex items-center">
                <SheetIcon className="pr-1" />
                <span>Sheets</span>
              </div>

              <button
                onClick={() => {
                  addHandler("widget6");
                }}
                variant="ghost"
              >
                +
              </button>
            </CommandItem>
            <CommandItem>
              <div className="flex items-center">
                <BotIcon className="pr-1" />
                <span>AI Chat Bot</span>
              </div>

              <button
                onClick={() => {
                  addHandler("widget7");
                }}
                variant="ghost"
              >
                +
              </button>
            </CommandItem>
            <CommandItem>
              <div className="flex items-center">
                <Music2Icon className="pr-1" />
                <span>Spotify Music</span>
              </div>
              <button
                onClick={() => {
                  addHandler("widget8");
                }}
                variant="ghost"
              >
                +
              </button>
            </CommandItem>
            <CommandItem>
              <div className="flex items-center">
                <BugIcon className="pr-1" />
                <span>Issue Tracker</span>
              </div>
              <button
                onClick={() => {
                  addHandler("widget9");
                }}
                variant="ghost"
              >
                +
              </button>
            </CommandItem>
            <CommandItem>
              <div className="flex items-center">
                <CpuIcon className="pr-1" />
                <span>Opportunities</span>
              </div>
              <button
                onClick={() => {
                  addHandler("widget10");
                }}
                variant="ghost"
              >
                +
              </button>
            </CommandItem>
            <CommandItem>
              <div className="flex items-center">
                <GemIcon className="pr-1" />
                <span>Notice</span>
              </div>
              <button
                onClick={() => {
                  addHandler("widget11");
                }}
                variant="ghost"
              >
                +
              </button>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </Command>
    </div>
  );
}

export default Sidebar;
