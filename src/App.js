import "./App.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Detail from "./Pages/Detail";
import Solar from "./components/rootpages/Solar";
import MoonByul from "./components/rootpages/MoonByul";
import HwaSa from "./components/rootpages/HwaSa";
import WheEin from "./components/rootpages/WheEin";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import { useEffect } from "react";
import { fetchPostInstance } from "./api/axiosInstance";
import UserInfoProvider from "./contextLogin/UserInfoContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      { path: "solar", element: <Solar /> },
      { path: "Moonbyul", element: <MoonByul /> },
      { path: "hwasa", element: <HwaSa /> },
      { path: "wheein", element: <WheEin /> },
    ],
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <Navigate replace to="/" />,
  },
]);

function App() {
  useEffect(() => {
    fetchPostInstance();
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
