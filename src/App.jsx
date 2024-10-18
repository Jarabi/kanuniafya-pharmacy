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
        <>
            <Routes>
                <Route
                    path='/'
                    element={
                        <Layout>
                            <Home />
                        </Layout>
                    }
                />
                <Route
                    path='/about'
                    element={
                        <Layout>
                            <About />
                        </Layout>
                    }
                />
                <Route
                    path='/services'
                    element={
                        <Layout>
                            <Services />
                        </Layout>
                    }
                />
                <Route
                    path='/contact'
                    element={
                        <Layout>
                            <Contact />
                        </Layout>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
