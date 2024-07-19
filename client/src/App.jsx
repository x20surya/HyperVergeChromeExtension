import { AlertDialogDemo } from "./components/demoComponents/alert";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className=" h-96 w-96">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button>Hello</Button>
      <AlertDialogDemo/>
    </div>
  );
}

export default App;
