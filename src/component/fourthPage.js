import React, { useEffect, useState } from 'react';
import "../assests/secondPage.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from "@mui/material/Button";
import { CircularProgress } from '@mui/material';

import { baseUrl } from "../utils";

const FourthPage = (props) => {

    const [value, setValue] = useState('');
    const [disableBtn, setDisableBtn] = useState(true)
    const [models, setModels] = useState([]);

    const {
        noOfWheels,
        vehicleType,
        fourthPageData
    } = props;

    useEffect(() => {
        fetch(`${baseUrl}/get-models?numberOfWheels=${noOfWheels}&type=${vehicleType}`)
            .then((res) => res.json())
            .then((json) => setModels(json.data.availableModels))
    }, [vehicleType, noOfWheels])

    useEffect(() => {
        if (value !== '') {
            setDisableBtn(false);
        }
    }, [value])

    const handleOnSubmit = () => {
        fourthPageData({ model: value });
    }

    return (
        <>
            <div className="header">
                Pick a Model, please?
            </div>
            {models.length === 0 ? (
                <div className="radio-btn">
                    <CircularProgress />
                </div>
            ) : (
                <div className="radio-btn">
                <RadioGroup
                    name="noOfWheels"
                    onChange={(evt) => setValue(evt.target.value)}
                    row
                >
                    {models.map((item) => {
                        return (
                            <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
                        )
                    })}
                </RadioGroup>
            </div>
            )}
            <Button disabled={disableBtn} variant="outlined" size="large" onClick={handleOnSubmit}>Next</Button>
        </>
    );
}
 
export default FourthPage;