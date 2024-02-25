import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Login/LoginPage";
import RegistrationPage from "./pages/Registration/RegistrationPage";
import Sidebar from "./components/Sidebar/Sidebar";
import { Toaster } from "react-hot-toast";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <LoginPage />,
        },
        {
          path: "/registration",
          element: <RegistrationPage />,
        },
        {
          path: "/dashbord",
          element: (
            <ProtectedRoutes>
              <DashbordLayout />
            </ProtectedRoutes>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={routers} />;
}

export default App;

function Root() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Outlet />
    </>
  );
}

function DashbordLayout() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}