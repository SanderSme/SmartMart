import { Route, Routes} from 'react-router-dom';
import HomePage from '../components/views/HomePage';
import SingleProduct from '../components/views/SingleProduct';
function Router() {
    return( 
        <>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/products" element={<HomePage />}/>
                <Route path="/product/:id" element={<SingleProduct/>}/>
                <Route path="/products/:id" element={<SingleProduct/>}/>
            </Routes>
        </>
    );
}

export default Router;
