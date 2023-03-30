import { BrowserRouter } from "react-router-dom"
import Header from "./components/layout/Header"
import Router from "./routes/Router"
import Footer from "./components/layout/Footer"
import Loader from "./components/layout/Loader"
import { useSelector } from "react-redux"
function App() {
  const {isLoading} = useSelector(state => state.loader)
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Router/>
      {isLoading && <Loader/>}
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App