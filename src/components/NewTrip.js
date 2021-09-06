import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { postNewTrip } from '../actions';
import { useHistory } from "react-router-dom";
import Error from './Error';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/new-trip.css';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const NewTrip = ({ setAddNewTrip, setIsExist }) => {
    let history = useHistory();
    const classes = useStyles();
    const [countryName, setCountryName] = useState('');
    const countryList = useSelector(state => state.allTrips.allTrips);
    const [errorFlag, setErrorFlag] = useState(false);

    const createNewTrip = (e) => {
        e.preventDefault()
        if (!/^[a-zA-Z]+$/.test(countryName)) {
            setErrorFlag(true)
            setTimeout(() => {
                setErrorFlag(false)
            }, 4000);
        } else {
            if (!countryList.map((obj) => obj['country']).includes(countryName)) {
                postNewTrip(countryName);
                history.push(`/${countryName}`)
            } else {
                console.log("country already exist");
                setAddNewTrip(false)
                setIsExist(true)

                setTimeout(function () {
                    setIsExist(false)
                    history.push(`/${countryName}`)
                }, 3000)

                setTimeout(() => {
                    console.log("cancel");
                }, 0)
            }
        }
    }
    return (
        <div className="new-trip__container" >
            <div className="close-from-outside" onClick={() => setAddNewTrip(false)} ></div>
            <div className="new-trip__form-container">
                <i className="window close icon" onClick={() => setAddNewTrip(false)}></i>
                <h1>Going to Explore!</h1>
                <form className="new-trip__form" onSubmit={(e) => createNewTrip(e)}>
                    <table>
                        <tbody>
                            <tr>
                                <th>
                                    <h1 htmlFor="country">Country: </h1>
                                </th>
                                <th>
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        label="Country"
                                        variant="outlined"
                                        value={countryName}
                                        onChange={(e) => setCountryName(e.target.value)}
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th></th>
                                <div className="input_note">
                                    *Please insert only letters
                                </div>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Send
                    </Button>
                </form>
                {errorFlag ? <Error input={'invalidString'} /> : null}
            </div>
        </div >
    )
}

export default NewTrip;
