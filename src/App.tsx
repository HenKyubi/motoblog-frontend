import { BrowserRouter, Route, Routes } from "react-router-dom";

// Context provider
import { AppProvider } from "./contexts/AppProvider";

// Pages
import { HomePage, NotFoundPage, PostPage, ProfilePage } from "./pages";

// Components
import { SpinnerScreen } from "./components";

// Types
import {
  HomeRoute,
  NotFoundRoute,
  PostRoute,
  ProfileRoute,
} from "./types/routes";

export const App: React.FC = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <SpinnerScreen />
        <Routes>
          <Route index path={HomeRoute} element={<HomePage />} />
          <Route path={`${PostRoute}/:postId`} element={<PostPage />} />
          <Route path={ProfileRoute} element={<ProfilePage />} />
          <Route path={NotFoundRoute} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};
