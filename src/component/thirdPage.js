import React, { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from "@mui/material/Button";
import { CircularProgress } from '@mui/material';

import { baseUrl } from "../utils";

import "../assests/secondPage.css";

const ThirdPage = (props) => {

    const [value, setValue] = useState('');
    const [disableBtn, setDisableBtn] = useState(true)
    const [vehicleTypes, setVehicleTypes] = useState([]);

    const {
        noOfWheels,
        thirdPageData
    } = props;

    useEffect(() => {
        fetch(`${baseUrl}/vehicle-types?numberOfWheels=${noOfWheels}`)
            .then((res) => res.json())
            .then((json) => setVehicleTypes(json.data.types))
    }, [noOfWheels])

    useEffect(() => {
        if (value !== '') {
            setDisableBtn(false);
        }
    }, [value])

    const handleOnSubmit = () => {
        thirdPageData({ vehicleType: value });
    }

    return (
        <>
            <div className="header">
                Pick a Vehicle Type:
            </div>
            {vehicleTypes.length === 0 ? (
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
                    {vehicleTypes.map((item) => {
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

export default ThirdPage;