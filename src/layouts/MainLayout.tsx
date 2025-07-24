import { Link } from "react-router";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow p-4 flex gap-4">
        <Link to="/" className="text-blue-600 font-bold">
          Home
        </Link>
        <Link to="/about" className="text-blue-600 font-bold">
          About
        </Link>
        <Link to="/todo" className="text-blue-600 font-bold">
          To-do
        </Link>
        ;
      </header>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default MainLayout;
