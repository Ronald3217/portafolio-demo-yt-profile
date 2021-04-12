import Link from 'next/link'
import Layout from '../components/Layout'

const Error404 = () => {
    return ( 
        <Layout>
            <h1>Error, Esta pagina no existe</h1>
            <Link href='/'>
                <a><h2>Volver a Inicio</h2></a>
            </Link>
        </Layout>
     );
}
 
export default Error404;