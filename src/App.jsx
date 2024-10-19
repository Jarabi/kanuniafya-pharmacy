import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import Layout from './Layout.jsx';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Layout>
    );
}

export default App;
