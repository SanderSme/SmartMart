import { Route, Routes} from 'react-router-dom';
import HomePage from '../components/views/HomePage';
function Router() {
    return(
        <>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/products" element={<HomePage />}/>
            </Routes>
        </>
    );
}

export default Router;
