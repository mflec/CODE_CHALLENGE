import axios from "axios";

export const GET_PROFILES = "GET_PROFILES";
export const GET_PROFILE= "GET_PROFILE";

export default function getProfiles() {
    return (dispatch) => {
        axios.get("https://randomuser.me/api/?results=50")
            .then((response) => {
                dispatch({ type: GET_PROFILES, payload: response.data.results });
            });
    }
}