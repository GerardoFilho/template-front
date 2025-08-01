import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { lazy, Suspense } from "react";
import LoadingPage from "../pages/LoadingPage";

const TodoPageLazy = lazy(() => import('../pages/Todo'));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<p> oi</p>} />
          <Route path="/todo" element={
            <Suspense fallback={<LoadingPage />}><TodoPageLazy /></Suspense>} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRoutes;
