import { firebase } from '../firebase/firebase';
const db = firebase.database();


export const postNewTrip = (country) => {
    fetch("https://triplan-1cab8-default-rtdb.firebaseio.com/all-trips.json", {
        method: "POST",
        body: JSON.stringify({ country: country })
    })
}

export const postNewCountryPlan = (country, day, plan) => {
    let obj = {};
    let id = day;
    obj[id] = plan
    fetch(`https://triplan-1cab8-default-rtdb.firebaseio.com/${country}.json`, {
        method: "POST",
        body: JSON.stringify(obj)
    })
}

export const getAllPlans = (country) => {
    let newCountryPlansArray = [];
    return (dispatch) => {
        fetch(`https://triplan-1cab8-default-rtdb.firebaseio.com/${country}.json`)
            .then(response => { return response.json() })
            .then(data => {
                if (data) {
                    newCountryPlansArray = Object.values(data).map((plan, index) => {
                        plan['key'] = Object.keys(data)[index]
                        return plan
                    })
                }
                data ?
                    dispatch({
                        type: "SET_TRIP_DETAILS",
                        payload: newCountryPlansArray

                    }) :
                    dispatch({
                        type: "SET_TRIP_DETAILS",
                        payload: [],
                    });
            })

    }
}

export const getAllTrips = () => {
    let newCountryArray = []
    return (dispatch) => {
        fetch("https://triplan-1cab8-default-rtdb.firebaseio.com/all-trips.json")
            .then(response => { return response.json() })
            .then(data => {
                if (data) {
                    newCountryArray = Object.values(data).map((country, index) => {
                        country['key'] = Object.keys(data)[index]
                        return country
                    })
                }
                data ?
                    dispatch({ type: "SET_TRIPS", payload: newCountryArray })
                    :
                    dispatch({ type: "SET_TRIPS", payload: [] });
            })
    }
}

export const deleteCountry = (key, country) => {
    return (dispatch) => {
        db.ref(`all-trips/${key}`).remove();
        db.ref(country).remove();
        setTimeout(function () {
            dispatch(getAllTrips())
        }, 600)

    }
}

export const deletePlane = (country, key) => {
    return (dispatch) => {
        db.ref(`${country}/${key}`).remove();
        setTimeout(function () {
            dispatch(getAllPlans(country))
        }, 800)

    }
}