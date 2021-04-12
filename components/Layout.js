import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
    return ( 
        <>
        <Header />
        <div className="container py-4">
            {children}
        </div>
        <Footer />
        </>
     );
}
 
export default Layout;