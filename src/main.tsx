import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/home.tsx"
import GroupExecutiveLayout from "./pages/group-executive-pages/group-executive-layout.tsx"
import CulturePage from "./pages/group-executive-pages/culture-page.tsx"
import PresidentMessagePage from "./pages/group-executive-pages/president-message-page.tsx"
import ConferencePage from "./pages/conference-page/conference-page.tsx"
import PageNotFound from "./components/global/page-not-found.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "grupo-executive/",
        element: <GroupExecutiveLayout />,
        children: [
          {
            path: "cultura",
            element: <CulturePage />,
          },
          {
            path: "mensagem-do-presidente",
            element: <PresidentMessagePage />,
          },
        ],
      },
      {
        path: "sala-de-imprensa",
        element: <ConferencePage />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
