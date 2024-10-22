import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import Layout from './Layout.jsx';
import Gallery from './pages/Gallery.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Layout>
    );
}

export default App;
