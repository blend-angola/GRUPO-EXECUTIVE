import { Outlet } from "react-router-dom"
import Footer from "./components/global/footer"
import Header from "./components/global/header"

function App() {
  return (
    <section className="font-rubik flex flex-col ">
      <Header />
      <Outlet />
      <Footer />
    </section>
  )
}

export default App
