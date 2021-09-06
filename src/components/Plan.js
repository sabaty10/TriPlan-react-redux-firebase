import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePlane } from '../actions';
import '../styles/plan.css';

const Plan = ({ plan, id, countryName, planKey }) => {
    const dispatch = useDispatch();
    return (
        <div className="plan__container">
            <section>
                <h1 className="plan__day">{id}</h1>
                <h2 className="plan__plan-details">{plan}</h2>
            </section>
            <button
                className="plan__delete-button"
                onClick={() => { dispatch(deletePlane(countryName, planKey)) }}
            >DELETE
            </button>
        </div>
    )
}

export default Plan;