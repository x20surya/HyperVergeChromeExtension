import Announcements from "../Widgets/Announcements/Announcements";
import BookQuote from "../Widgets/BookQuote/BookQuote";
import Chatbot from "../Widgets/ChatGPT/Chatbot";
import Dailychecklist from "../Widgets/DailyCheckList/Dailychecklist";
import Form from "../Widgets/Form/Form";
import IssueTracker from "../Widgets/IssueTracker/IssueTracker";
import Opportunity from "../Widgets/Opportunities/Opportunity";
import PomodoroTimer from "../Widgets/PomodoroTimer/PomodoroTimer";
import Sheets from "../Widgets/Sheets/Sheet";
import Spotify from "../Widgets/Spotify/Spotify";

function WidgetHandler({ id, widget, deleteWidget }) {
  {
    if (widget == "widget1") {
      return (
        <div className="w-[300px] h-[400px] border absolute rounded-lg top-0 left-0 group">
          <button
            className="absolute top-2 left-2 z-10 invisible group-hover:visible"
            onClick={() => deleteWidget(id)}
          >
            <svg
              className="h-6 w-6 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <polyline points="3 6 5 6 21 6" />{" "}
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />{" "}
              <line x1="10" y1="11" x2="10" y2="17" />{" "}
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </button>
          <PomodoroTimer />
        </div>
      );
    }
  }
  {
    if (widget == "widget2") {
      return (
        <div className="w-[400px] h-[450px] border absolute rounded-lg top-0 left-0 group">
          <button
            className="absolute top-2 left-2 z-10 invisible group-hover:visible"
            onClick={() => deleteWidget(id)}
          >
            <svg
              className="h-6 w-6 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <polyline points="3 6 5 6 21 6" />{" "}
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />{" "}
              <line x1="10" y1="11" x2="10" y2="17" />{" "}
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </button>
          <Dailychecklist />
        </div>
      );
    }
  }

  {
    if (widget == "widget3") {
      return (
        <div className="w-[400px] h-[450px] border absolute rounded-lg top-0 left-0 group">
          <button
            className="absolute top-2 left-2 z-10 invisible group-hover:visible"
            onClick={() => deleteWidget(id)}
          >
            <svg
              className="h-6 w-6 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <polyline points="3 6 5 6 21 6" />{" "}
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />{" "}
              <line x1="10" y1="11" x2="10" y2="17" />{" "}
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </button>
          <Announcements />
        </div>
      );
    }
  }
  {
    if (widget == "widget4") {
      return (
        <div className="w-[400px] h-[300px] border rounded-lg absolute top-0 left-0 group">
          <button
            className="absolute top-2 left-2 z-10 invisible group-hover:visible"
            onClick={() => deleteWidget(id)}
          >
            <svg
              className="h-6 w-6 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <polyline points="3 6 5 6 21 6" />{" "}
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />{" "}
              <line x1="10" y1="11" x2="10" y2="17" />{" "}
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </button>
          <BookQuote />
        </div>
      );
    }
  }
  {
    if (widget == "widget5") {
      return (
        <div className="w-[400px] h-[500px] border rounded-lg absolute top-0 left-0 group">
          <button
            className="absolute top-2 left-2 z-10 invisible group-hover:visible"
            onClick={() => deleteWidget(id)}
          >
            <svg
              className="h-6 w-6 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <polyline points="3 6 5 6 21 6" />{" "}
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />{" "}
              <line x1="10" y1="11" x2="10" y2="17" />{" "}
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </button>
          <Form />
        </div>
      );
    }
  }
  {
    if (widget == "widget6") {
      return (
        <div className="w-[400px] h-[500px] border rounded-lg absolute top-0 left-0 group">
          <button
            className="absolute top-2 left-2 z-10 invisible group-hover:visible"
            onClick={() => deleteWidget(id)}
          >
            <svg
              className="h-6 w-6 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <polyline points="3 6 5 6 21 6" />{" "}
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />{" "}
              <line x1="10" y1="11" x2="10" y2="17" />{" "}
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </button>
          <Sheets />
        </div>
      );
    }
  }
  {
    if (widget == "widget7") {
      return (
        <div className="w-[400px] h-[400px] rounded-lg border absolute top-0 left-0 group">
          <button
            className="absolute top-2 left-2 z-10 invisible group-hover:visible"
            onClick={() => deleteWidget(id)}
          >
            <svg
              className="h-6 w-6 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <polyline points="3 6 5 6 21 6" />{" "}
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />{" "}
              <line x1="10" y1="11" x2="10" y2="17" />{" "}
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </button>
          <Chatbot />
        </div>
      );
    }
  }
  {
    if (widget == "widget8") {
      return (
        <div className="w-[400px] h-[200px] group">
          <button
            className="absolute top-2 left-2 z-10 invisible group-hover:visible"
            onClick={() => deleteWidget(id)}
          >
            <svg
              className="h-6 w-6 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <polyline points="3 6 5 6 21 6" />{" "}
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />{" "}
              <line x1="10" y1="11" x2="10" y2="17" />{" "}
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </button>
          <Spotify />
        </div>
      );
    }
  }
  {
    if (widget == "widget9") {
      return (
        <div className="w-[400px] h-[400px] group">
          <button
            className="absolute top-2 left-2 z-10 invisible group-hover:visible"
            onClick={() => deleteWidget(id)}
          >
            <svg
              className="h-6 w-6 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <polyline points="3 6 5 6 21 6" />{" "}
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />{" "}
              <line x1="10" y1="11" x2="10" y2="17" />{" "}
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </button>
          <IssueTracker />
        </div>
      );
    }
  }
  {
    if (widget == "widget10") {
      return (
        <div className="w-[400px] h-[400px] group">
          <button
            className="absolute top-2 left-2 z-10 invisible group-hover:visible"
            onClick={() => deleteWidget(id)}
          >
            <svg
              className="h-6 w-6 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <polyline points="3 6 5 6 21 6" />{" "}
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />{" "}
              <line x1="10" y1="11" x2="10" y2="17" />{" "}
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </button>
          <Opportunity/>
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
