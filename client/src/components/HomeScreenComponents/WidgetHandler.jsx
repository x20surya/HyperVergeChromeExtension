import PomodoroTimer from "../Widgets/PomodoroTimer/PomodoroTimer";

function WidgetHandler({ id, widget, deleteWidget }) {
  {
    if (widget == "widget1") {
      return (
        <div className="w-[400px] h-[500px] border relative">
          <PomodoroTimer />
          <button
            className=" absolute top-2 right-2"
            onClick={() => deleteWidget(id)}
          >
            <svg
              className="h-6 w-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <polyline points="3 6 5 6 21 6" />{" "}
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />{" "}
              <line x1="10" y1="11" x2="10" y2="17" />{" "}
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </button>
        </div>
      );
    }
  }

  return (
    <div>
      <h1>{widget}</h1>
      <button onClick={() => deleteWidget(id)}>delete</button>
    </div>
  );
}

export default WidgetHandler;
