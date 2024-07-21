import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

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
              <span>Pomodoro Timer</span>
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
              <span>Daily check list</span>
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
              <span>Announcments</span>
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
              <span>Book Quote - Read by X</span>
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
              <span>Forms</span>
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
              <span>Sheets</span>
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
              <span>AI Chat Bot</span>
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
              <span>Spotify Music</span>
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
              <span>Issue Tracker</span>
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
              <span>Opportunities</span>
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
              <span>Notice</span>
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
