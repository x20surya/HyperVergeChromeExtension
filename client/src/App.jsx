import { AlertDialogDemo } from "./components/demoComponents/alert";
import { ModeToggle } from "./components/demoComponents/darkmodetoggle";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className=" h-96 w-96 flex">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Button>Hello</Button>
        <AlertDialogDemo />
        <ModeToggle/>
      </div>
    </ThemeProvider>
  );
}

export default App;
