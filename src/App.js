import { useEffect, useState } from "react";
import "./App.css";
import Destination from "./components/Destination/Destination";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Axios from "axios";
import Crew from "./components/Crew/Crew";
import RouteNotFound from "./components/RouteNotFound/RouteNotFound";
import Technology from "./components/Technology/Technology";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    let { data } = await Axios.get("./data.json");
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "destination",
          element: <Destination destination={data.destinations} />,
        },
        {
          path: "crew",
          element: <Crew crew={data.crew} />,
        },
        {
          path: "technology",
          element: <Technology technology={data.technology} />,
        },
        {
          path: "*",
          element: <RouteNotFound />,
        },
      ],
    },
  ]);
  return data.destinations ? (
    <RouterProvider router={router}></RouterProvider>
  ) : null;
}

export default App;
