import { lazy } from "react"
import { Route, Routes } from "react-router-dom"

const Home = lazy(() => import("./pages/Home"))
const Header = lazy(() => import("./components/Header"))
const About = lazy(() => import("./pages/About"))
const Service = lazy(() => import("./pages/About"))


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service/>} />
      </Routes>
    </div>
  )
}

export default App
