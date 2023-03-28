import { BrowserRouter } from "react-router-dom"
import Header from "./components/layout/Header"
import Router from "./routes/Router"
import Footer from "./components/layout/Footer"
function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Router/>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App