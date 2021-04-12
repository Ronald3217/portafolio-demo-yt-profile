import React from 'react';
import Head from 'next/head'
import Header from '../components/Header'
import Profile from '../components/Profile'

const About = ({ profile }) => {

    return (
        <React.Fragment>
            <Head>
                <title>Acerca de {profile.name} </title>
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

export async function getStaticProps() {

    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const resultado = await respuesta.json()

    return {
        props: {
            profile: resultado
        }
    }
}