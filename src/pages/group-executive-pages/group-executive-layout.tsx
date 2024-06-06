import Container from "@/components/global-components/container"
import { Outlet } from "react-router-dom"

const GroupExecutiveLayout = () => {
  return (
    <main className="min-h-screen w-full">
      <Container>
        <Outlet />
      </Container>
    </main>
  )
}

export default GroupExecutiveLayout
