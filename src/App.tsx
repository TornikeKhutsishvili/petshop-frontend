import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./router/router";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="app">
        <RouterProvider router={createBrowserRouter(router)} />
      </div>
    </>
  );
}

export default App;
