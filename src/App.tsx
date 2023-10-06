import { BrowserRouter, Route, Routes } from "react-router-dom";

// Context provider
import { AppProvider } from "./context/AppProvider";

// Pages
import { HomePage } from "./pages/home.page";
import { ProfilePage } from "./pages/profile.page";
import { NotFoundPage } from "./pages/404.page";

export const App: React.FC = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <h1>Motorcycle blog</h1>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/:username" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};
