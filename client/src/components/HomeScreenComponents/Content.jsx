import DemoComponent from "../demoComponent2";
import { ModeToggle } from "../mode-toggle";

function Content() {
  return (
    <div className="flex flex-col h-full w-full">
       <div className="h-10 flex justify-end fixed right-5 top-5">
         <ModeToggle/>
       </div>
       <div className="h-full" id="content-screen">
         
       </div>
    </div>
  );
}

export default Content;
