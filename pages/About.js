import React from 'react';
import Head from 'next/head'
import Header from '../components/Header'
import Profile from '../components/Profile'

const About = ({profile}) => {
    
    return ( 
        <React.Fragment>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous" />
            </Head>
            <Header />
            <h1>Acerca de: {profile.name} </h1>
            <Profile 
                profile={profile}
            />
        </React.Fragment>
     );
}
 
export default About;

export async function getStaticProps(){

    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const resultado = await respuesta.json()

    return {
        props: {
            profile:resultado
        }
    }
}