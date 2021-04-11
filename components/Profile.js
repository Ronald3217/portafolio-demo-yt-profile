import React from 'react';

const Profile = ({profile}) => {
    console.log(profile);
    const { name, username, phone, website } = profile
    return ( 
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name} </h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">{phone}</a>
            </div>
        </div>
     );
}
 
export default Profile;