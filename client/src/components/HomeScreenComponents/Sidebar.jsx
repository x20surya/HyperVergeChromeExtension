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
      <div className="border w-40 h-10"></div>
      <Command className="border w-3/4">
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
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </Command>
    </div>
  );
}

export default Sidebar;
