import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import PublicLayout from "./layouts/PublicLayout";
import Cinemas from "./pages/cinema";
import Home from "./pages/home";
import Login from "./pages/login";
import Me from "./pages/me";
import MovieInfo from "./pages/movieInfo";
import Movies from "./pages/movies";
import Showtime from "./pages/showtime";
import Signup from "./pages/signup";

const AppRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route
          path="/"
          element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          }
        />
        <Route
          path="/movie-info"
          element={
            <PublicLayout withFooter={false}>
              <MovieInfo />
            </PublicLayout>
          }
        />
        <Route
          path="/showtime"
          element={
            <PublicLayout withFooter={false}>
              <Showtime />
            </PublicLayout>
          }
        />
        <Route
          path="/me"
          element={
            <PublicLayout>
              <Me />
            </PublicLayout>
          }
        />
        <Route
          path="/login"
          element={
            <PublicLayout withFooter={false}>
              <Login />
            </PublicLayout>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <PublicLayout withFooter={false}>
              <Signup />
            </PublicLayout>
          }
        ></Route>
        <Route
          path="/movies"
          element={
            <PublicLayout>
              <Movies />
            </PublicLayout>
          }
        ></Route>
          <Route
          path="/cinemas"
          element={
            <PublicLayout>
              <Cinemas />
            </PublicLayout>
          }
        ></Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
