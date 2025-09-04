import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { lazy, Suspense } from "react";
import LoadingPage from "../pages/LoadingPage";
import { ErrorBoundary } from "../shared/ErrorBoundary/ErrorBoundary";

const HomePageLazy = lazy(() => import('../pages/Home'));
const ProductStorePageLazy = lazy(() => import('../pages/ProductStore'));
const TodoPageLazy = lazy(() => import('../pages/Todo'));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePageLazy />} />
          <Route path="/loja" element={<ProductStorePageLazy />} />
          <Route path="/todo" element={
            <ErrorBoundary>
              <Suspense fallback={<LoadingPage />} ><TodoPageLazy /></Suspense>
            </ErrorBoundary>
          } />

        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRoutes;
