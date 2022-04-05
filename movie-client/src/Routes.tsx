import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/home";
import MovieInfo from "./pages/movieInfo";

const AppRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<PublicLayout><Home/></PublicLayout>} />
        <Route path="/movie-info" element={<PublicLayout><MovieInfo/></PublicLayout>} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
