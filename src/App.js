import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./pages/home/Home";
import NavBar from "./components/navBar/NavBar";
import RightBar from "./components/rightBar/RightBar";
import LeftBar from "./components/leftBar/LeftBar";
import Profile from "./pages/profile/Profile";

function App() {
  const LayOut = () => {
    return (
      <div>
        <NavBar />
        <div style={{ display: "flex" }}>
          <RightBar />
          <div style={{flex: '6'}}>
          <Outlet />
          </div>
          <LeftBar />
        </div>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
