import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/Error";
import { UserStateContextProvider } from "./context/GithubContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);
function App() {
  return (
    <UserStateContextProvider>
      <RouterProvider router={router} />
    </UserStateContextProvider>
  );
}

export default App;
