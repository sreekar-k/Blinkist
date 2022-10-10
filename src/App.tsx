import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import Library from "./components/pages/MyLibraryPage/Library";

import Entrepreneur from "./components/pages/EntrepreneurPage/Entrepreneur";
import BookDetailsPage from "./components/organisms/BookDetailPage/BookDetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CurrentlyReadingGrid from "./components/organisms/CurrentlyReading/CurrentlyReading";
import FinishedReadingGrid from "./components/organisms/FinishedReading/FinishedReading";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AuthPage from './components/pages/AuthPage/AuthPage'

function App() {
  const {  isAuthenticated } = useAuth0();
  
  if (isAuthenticated) {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Library />}>
                <Route index element={<CurrentlyReadingGrid />} />
                <Route
                  path="currentlyreading"
                  element={<CurrentlyReadingGrid />}
                />
                <Route
                  path="finishedreading"
                  element={<FinishedReadingGrid />}
                />
              </Route>
              <Route path="/explore" element={<Entrepreneur />} />
              <Route path="bookdetailpage" element={<BookDetailsPage />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </div>
    );
  } else {
    return (
      <ThemeProvider theme={theme}>
        <AuthPage/>
      </ThemeProvider>
    );
  }
}

export default App;
