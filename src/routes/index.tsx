import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import TodoPage from "../pages/Todo";
import Home from "../pages/Home";
import About from "../pages/About";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<TodoPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRoutes;
