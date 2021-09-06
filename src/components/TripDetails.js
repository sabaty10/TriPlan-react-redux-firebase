import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPlans } from '../actions';
import { useParams } from 'react-router-dom';
import NewPlan from './NewPlan';
import Plan from './Plan';
import '../styles/trip-details.css';


const TripDetails = () => {
    const dispatch = useDispatch();
    const { countryName } = useParams();
    const tripsDetails = useSelector(state => state.allTrips.tripsDetails);
    const [addPlan, setAddPlan] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            dispatch(getAllPlans(countryName));
        }, 300)
    }, [addPlan])

    return (
        <div className="trip-details__container">
            <div className="trip-details__header">
                <h1 className="trip-details__country">{countryName.toUpperCase()}</h1>
            </div>
            <button
                className="add-trip__icon"
                onClick={() => setAddPlan(!addPlan)}
            >
                {addPlan ? <i className="x icon"></i> : <i className='plus icon'></i>}
            </button>
            <h2>Add Plan</h2>
            {addPlan ? <NewPlan setAddPlan={setAddPlan} /> : null}
            {tripsDetails.length !== 0 ? tripsDetails.map((currentPlan) => {
                let key = Object.keys(currentPlan)[0];
                let plan = Object.values(currentPlan)[0]
                return (
                    <Plan key={key} id={key} planKey={currentPlan['key']} plan={plan} countryName={countryName} />
                )
            }) : null}
        </div >
    )
}

export default TripDetails;
