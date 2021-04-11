import React from 'react';
import Profile from '../components/Profile'

const About = ({profile}) => {
    
    return ( 
        <React.Fragment>
            <h1>Pagina sobre mi</h1>
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