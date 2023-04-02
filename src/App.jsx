import { BrowserRouter } from "react-router-dom"
import Router from "./routes/Router"
import Loader from "./components/layout/Loader"
import { useSelector } from "react-redux"
import Layout from "./components/layout/Layout"
function App() {
  const {isLoading} = useSelector(state => state.loader)
  return (
  <>
    <BrowserRouter>
      <Layout>
        <Router/>
        {isLoading && <Loader/>}
      </Layout>
    </BrowserRouter>
  </>
  )
}

export default App