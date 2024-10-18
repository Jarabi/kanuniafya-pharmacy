import PropTypes from 'prop-types';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Layout({ children }) {
    return (
        <div className='flex flex-col min-h-screen font-sans'>
            <Header />
            <main className='flex-grow'>{children}</main>
            <Footer />
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
