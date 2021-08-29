import React from "react";
import s from "./Profile.module.css";

function Profile({ user }) {
    return (
        <div className={s.container}>
            <h3>{user.name.title} {user.name.first} {user.name.last}</h3>
            <img src={user.picture.large} />
            <p>Gender: {user.gender} </p>
            <p> Age: {user.registered.age} </p>
            <p>Location: </p>
            <p> Street: {user.location.street.name} {user.location.street.number} </p>
            <p> City:  {user.location.city} </p>
            <p> State: {user.location.state} , {user.location.country} </p>
            <p> Post Code:  {user.location.postcode} </p>
            <p> Coordinates: </p>
            <p> ❅ Latitude:  {user.location.coordinates.latitude} </p>
            <p> ❅ Longitude: {user.location.coordinates.longitude} </p>
            <p> Timezone: {user.location.timezone.offset} - {user.location.timezone.description} </p>
            <p> Email: {user.email} </p>
            <p> Phone: {user.phone} </p>
            <p> Cell: {user.cell} </p>
        </div>
    )
}

export default Profile