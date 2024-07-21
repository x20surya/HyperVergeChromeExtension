import { ThemeProvider } from "./components/theme-provider";
import MainPage from "./components/HomeScreenComponents/MainPage";
import Sidebar from "./components/HomeScreenComponents/Sidebar";
import { Button } from "./components/ui/button";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="relative flex min-h-screen flex-col bg-background">
        <MainPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
