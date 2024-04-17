import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ flex: 1 }}>
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;

