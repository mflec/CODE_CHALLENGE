import React from "react";

function ProfileCard({
    name,
    location,
    picture,
    }) {

    return (
        <div >
            <img src={picture.thumbnail} />
            <h3>Fullname: {name.first} {name.last}</h3>
            <p>City: {location.city}</p>
            <p>Country: {location.country}</p>
        </div>
    )
}

export default ProfileCard