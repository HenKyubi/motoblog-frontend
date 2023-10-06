import "./App.css";
import { AppProvider } from "./context/AppProvider";

const App: React.FC = () => {
  return (
    <AppProvider>
      <h1>Motorcycle blog</h1>
    </AppProvider>
  );
};

export default App;
