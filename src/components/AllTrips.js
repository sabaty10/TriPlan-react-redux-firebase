import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTrips } from '../actions';
import NewTrip from './NewTrip';
import TripsList from './TripsList';
import AlreadyExist from './AlreadyExist.js';
import '../styles/all-trips.css';


const AllTrips = () => {
    const [addNewTrip, setAddNewTrip] = useState(false);
    const allTrips = useSelector(state => state.allTrips.allTrips);
    const countryKey = useSelector(state => state.allTrips.countryKey);
    const [isExist, setIsExist] = useState(false);
    const dispatch = useDispatch();

    const message = 'Lets  start ! choose your first Country that you  want to plan...';
    const [showMessage, setShowMessage] = useState('')
    useEffect(() => {
        dispatch(getAllTrips());

        const displayMessage = () => {
            const messageToDisplay = message.split('')
            let index = 0;

            const interval = setInterval(() => {
                if (index !== messageToDisplay.length) {
                    setShowMessage(messageToDisplay.slice(0, index + 1))
                    ++index
                } else {
                    clearInterval(interval)
                }
            }, 50);
        }
        displayMessage()
    }, [])

    return (
        <div className="all-trips__container">
            {allTrips.length === 0 ? null : <h2 className="all-trips__header">Another country? Add it!</h2>}
            <button
                onClick={() => setAddNewTrip(true)}
                className="add-trip__icon">
                <i className="plus icon"></i>
            </button>
            <h2>Add country</h2>
            {addNewTrip ?
                <NewTrip setAddNewTrip={setAddNewTrip} setIsExist={setIsExist} />
                : null}
            {allTrips ? <TripsList countryKey={countryKey} /> : null}
            {isExist ? < AlreadyExist /> : null}
            {allTrips.length === 0 ? <h1 className="all-trips_message">{showMessage}</h1> : null}
        </div >
    )
}

export default AllTrips;
