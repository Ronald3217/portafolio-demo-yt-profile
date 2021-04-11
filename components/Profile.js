import React from 'react';

const Profile = ({profile}) => {
    console.log(profile);
    const { name, username, phone, website } = profile
    return ( 
        <h1>{name} </h1>
     );
}
 
export default Profile;