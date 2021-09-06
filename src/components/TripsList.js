import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCountry } from '../actions';
import { Link } from 'react-router-dom';
import '../styles/trips-list.css';

const TripsList = () => {
    const dispatch = useDispatch()
    const allTrips = useSelector(state => state.allTrips.allTrips)
    return (
        <div className="trips-list__container">
            {allTrips.map((trip) => {
                return (
                    <div className="trip__container" key={trip.key}>
                        <Link to={`/${trip.country}`}>
                            <div className="trip_details">
                                <span>{trip.country.toUpperCase()}</span>
                            </div>
                        </Link>
                        <button
                            className="trip_delete-button"
                            onClick={() => dispatch(deleteCountry(trip.key, trip.country))}
                        >DELETE
                        </button>

                    </div>
                )
            }
            )}
        </div>
    )
}

export default TripsList;
