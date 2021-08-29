import { GET_PROFILES, GET_PROFILE } from "./actions"

const initialState = {
    profiles: [],
    profile: null,
}

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_PROFILES: return {
            ...state,
            profiles: payload,
        }
        case GET_PROFILE: return {
            ...state,
            profile: payload,
        }
        default: return state
    }
}