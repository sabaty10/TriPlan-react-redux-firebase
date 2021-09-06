const initialState = {
    allTrips: [],
    tripsDetails: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_TRIPS":
            return { ...state, allTrips: action.payload };
        case "SET_COUNTRY_TO_PLAN":
            return { ...state, tripsDetails: action.payload };
        case "SET_TRIP_DETAILS":
            return { ...state, tripsDetails: action.payload };
        default:
            return state;
    }
}