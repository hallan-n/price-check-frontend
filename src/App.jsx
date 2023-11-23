import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Acount from './pages/Acount'
import PriceHome from './pages/PriceHome';


const App = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user" element={<Acount />} />
                <Route path="/check" element={<PriceHome />} />

            </Routes>
        </BrowserRouter>
    );
};

export default App;