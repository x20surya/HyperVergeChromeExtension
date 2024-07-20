import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import WidgetHandler from "./WidgetHandler";
import Content from "./Content";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

function MainPage() {
  const [widgets, setWidgets] = useState([]);

  const addHandler = (widget) => {
    setWidgets((prevState) => [
      ...prevState,
      {
        id: uuid(),
        widget: widget,
      },
    ]);
  };
  const deleteWidget = (id) => {
    const filteredNotes = widgets.filter((widget) => widget.id !== id);
    setWidgets(filteredNotes);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Widgets"));
    if (data) {
      setWidgets(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Widgets", JSON.stringify(widgets));
  }, [widgets]);

  return (
    <div className="w-full h-screen">
      <div className="h-full max-w-full border flex">
        <div className="flex h-full justify-center p-6 w-1/4 border-r">
          <Sidebar addHandler={addHandler} />
        </div>
        <div className="flex flex-col flex-wrap h-full items-center justify-center px-6 w-3/4 gap-10">
          {widgets.map((widget) => (
            <WidgetHandler
              key={widget.id}
              id={widget.id}
              widget={widget.widget}
              deleteWidget={deleteWidget}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
