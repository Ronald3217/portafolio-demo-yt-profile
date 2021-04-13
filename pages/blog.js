import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

import { Posts } from '../posts'

const Blog = ({articulos}) => {
    
    return (
        <Layout>
            <Head>
                <title>Blog - Portafolio Next.js</title>
            </Head>
            <h1>Blog en Construccion</h1>
            {
                articulos.map(articulo =>(
                    <li key={articulo.slug}>
                        {/** 
                         * pages/blog/[slug].js
                         *  → 
                         * /blog/:slug 
                         * ( /blog/hello-world) 
                         * https://nextjs.org/docs/routing/introduction
                         * **/}
                        <Link href='/blog/[id]' as={`/blog/${articulo.slug}`}>
                            <a>{articulo.title}</a>
                        </Link>
                    </li>
                ))
            }
        </Layout>
    );
}

export default Blog;

export async function getStaticProps() {
    
    const articulos = Posts
  
    return {
      props: {articulos:articulos}, // will be passed to the page component as props
    }
  }