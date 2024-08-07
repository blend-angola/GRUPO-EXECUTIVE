import { Outlet } from "react-router-dom"
import Footer from "./components/global-components/footer"
import Header from "./components/global-components/header"

function App() {
  return (
    <section className="font-rubik flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </section>
  )
}

export default App
