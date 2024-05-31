import { Outlet } from "react-router-dom"
import Footer from "./components/global/footer"
import Header from "./components/global/header"
import CarrouselPosts from "./components/global/carrousel-posts"

function App() {
  return (
    <section className="font-rubik flex flex-col h-full">
      <Header />
      <main className="w-full h-auto">
        <Outlet />
      </main>
      <CarrouselPosts />
      <Footer />
    </section>
  )
}

export default App
