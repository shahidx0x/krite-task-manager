import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignUpPage/SignupPage";

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
          path: "/sign-up",
          element: <SignupPage />,
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
      <Outlet />
    </>
  );
}
