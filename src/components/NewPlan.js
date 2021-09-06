import React, { useState } from 'react';
import { postNewCountryPlan } from '../actions'
import { useParams } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../styles/new-plan.css';

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

const NewPlan = ({ setAddPlan }) => {
    const classes = useStyles();
    const { countryName } = useParams();
    const [newPlane, setNewPlane] = useState('');
    const [day, setDay] = useState('Sunday');
    const [errorFlag, setErrorFlag] = useState(false);

    const checkInput = (e) => {
        e.preventDefault();
        if ((newPlane) === '') {
            setErrorFlag(true);
        } else {
            if (errorFlag) setAddPlan(false)
            setAddPlan(false);
            postNewCountryPlan(countryName, day, newPlane);
        }
    }

    return (
        <div className="new-plan__container" >
            <div className="new-plan__form-container">
                <i className="window close icon" onClick={() => setAddPlan(false)}></i>
                <h2>New Plan</h2>
                <form className="new-trip__form" onSubmit={(e) => checkInput(e)}>
                    <table>
                        <tbody>
                            <tr>
                                <th>
                                    <h1 htmlFor="country">Day: </h1>
                                </th>
                                <th>
                                    <FormControl variant="filled" className={classes.formControl}>
                                        <InputLabel htmlFor="filled-age-native-simple">Day</InputLabel>
                                        <Select
                                            native
                                            value={day}
                                            onChange={(e) => { setDay(e.target.value) }}
                                            inputProps={{
                                                name: 'Sunday',
                                            }}
                                        >
                                            <option value={'Sunday'}>Sunday</option>
                                            <option value={'Monday'}>Monday</option>
                                            <option value={'Tuesday'}>Tuesday</option>
                                            <option value={'Wednesday'}>Wednesday</option>
                                            <option value={'Thursday'}>Thursday</option>
                                            <option value={'Friday'}>Friday</option>
                                            <option value={'Saturday'}>Saturday</option>
                                        </Select>
                                    </FormControl>
                                </th>
                            </tr>
                            <br />
                            <tr>
                                <th>
                                    <h1 htmlFor="country">Plan: </h1>
                                </th>
                                <th>
                                    <textarea
                                        className="textarea-container"
                                        rows="4" column="50"
                                        onChange={(e) => setNewPlane(e.target.value)}
                                    >
                                    </textarea>
                                </th>
                                <th>
                                    {errorFlag ? <span className="error_message">Cannot be empty</span> : null}
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Send
                    </Button>
                </form>
            </div>
        </div >
    )
}

export default NewPlan;
