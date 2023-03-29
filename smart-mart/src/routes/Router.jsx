import { Route, Routes} from 'react-router-dom';
import HomePage from '../components/views/HomePage';
import SingleProduct from '../components/views/SingleProduct';
import Sale from '../components/views/Sale';
import ShoppingCart from '../components/views/ShoppingCart';
import Contact from '../components/views/Contact';
function Router() {
    return( 
        <>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/sale" element={<Sale />}/>
                <Route path="/products" element={<HomePage />}/>
                <Route path="/product/:id" element={<SingleProduct/>}/>
                <Route path="/products/:id" element={<SingleProduct/>}/>
                <Route path="/cart" element={<ShoppingCart/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </>
    );
}

export default Router;
