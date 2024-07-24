import React from "react"
import App from "./App.tsx"
import ReactDOM from "react-dom/client"

import Home from "./pages/home.tsx"
import CulturePage from "./pages/group-executive-pages/culture-page.tsx"
import ConferencePage from "./pages/conference-page/conference-page.tsx"
import PageNotFound from "./components/global-components/page-not-found.tsx"
import SearchResultPage from "./pages/search-result-page/search-result-page.tsx"
import GroupExecutiveLayout from "./pages/group-executive-pages/group-executive-layout.tsx"
import PresidentMessagePage from "./pages/group-executive-pages/president-message-page.tsx"

import { RouterProvider, createBrowserRouter } from "react-router-dom"

import "./index.css"
import "./utils/i18next/index.ts"

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
        path: "resultado",
        element: <SearchResultPage />,
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
