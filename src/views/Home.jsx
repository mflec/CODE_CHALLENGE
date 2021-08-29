import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getProfiles from "../Redux/actions";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import Profile from "../components/Profile/Profile";
import s from "./Home.module.css"

function Home() {
    const profiles = useSelector((state) => state.profiles);
    const dispatch = useDispatch();
    const [profile, setProfile] = useState({})
    const [showProfile, setShowProfile] = useState(false)

    useEffect(() => {
        dispatch(getProfiles());
    }, [dispatch]);

    return <div className={s.container}>
        <nav role="nav" className={s.nav}> Intive Challenge: Lechares Milagros </nav>
        {profiles && !showProfile ? profiles.map((profile) =>
            <div className={s.profileContainer}>
                <ProfileCard
                    email={profile.email}
                    name={profile.name}
                    location={profile.location}
                    picture={profile.picture}
                />
                <button 
                className= {s.profilesButton}
                onClick={() => {
                    setProfile(profile)
                    setShowProfile(true)
                }}> See profile </button> <br/>
            </div>) : null
        }{showProfile ?
            <div>
                <button 
                className= {s.profileButton}
                onClick={
                    () => {
                        setProfile(null)
                        setShowProfile(false)
                    }
                }> See all profiles </button>
                <Profile
                    user={profile}
                />
                
            </div>
            : null
        }
    </div>
}

export default Home