import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import Navigation from './components/Navigation.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;
