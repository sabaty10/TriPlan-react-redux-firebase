import React from 'react';
import '../styles/error.css';

function Error({ input }) {
    return (
        <>
            {input === 'invalidString' ? <div className="error__container"> Wrong inputs.<br />Please try again..</div> : null}
        </>
    )
}

export default Error;