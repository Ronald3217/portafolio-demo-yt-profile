import Head from 'next/head'
import { Posts } from '../../posts'
import Layout from '../../components/Layout'

const Post = (props) => {
    const { post } = props
    const { title } = post[0]
    return ( 
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <h1>{title}</h1>
        </Layout>
     );
}
 
export default Post;

//getStaticPaths
export async function getStaticPaths() {
    const paths = Posts.map(post=>{
        return {
            params: {
                id: post.slug
              }
        }
    })
  return {
    paths,
    fallback: false // See the "fallback" section below
  };
}

export async function getStaticProps({params}){

    const currentPost = Posts.filter(post => params.id === post.slug)
    return {
        props: {
            post:currentPost
        }
    }
}
