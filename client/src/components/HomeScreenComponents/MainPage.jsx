import WidgetHandler from "./WidgetHandler";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { ModeToggle } from "../mode-toggle";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
} from "drag-n-drop-grid";

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
    const filteredWidgets = widgets.filter((widget) => widget.id !== id);
    setWidgets(filteredWidgets);
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

  function onChange(sourceId, sourceIndex, targetIndex, targetId) {
    const nextState = swap(widgets, sourceIndex, targetIndex);
    setWidgets(nextState);
  }

  return (
    <div className="flex-1 h-full">
      <div className="h-full flex w-full">
        <div className="justify-center p-6 w-1/4 border-r fixed h-screen">
          <Sidebar addHandler={addHandler} />
        </div>
        <div className="w-3/4 h-screen overflow-y-auto fixed right-0 p-10">
          <div className="fixed right-5 top-5">
            <ModeToggle />
          </div>
          <GridContextProvider onChange={onChange}>
            <GridDropZone
              boxesPerRow={3}
              rowHeight={500}
              className={`h-[${500 * Math.ceil(widgets.length / 4)}]`}
            >
              {widgets.map((widget) => (
                <GridItem key={widget.id}>
                  
                  <WidgetHandler
                    id={widget.id}
                    widget={widget.widget}
                    deleteWidget={deleteWidget}
                  />
                </GridItem>
              ))}
            </GridDropZone>
          </GridContextProvider>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
