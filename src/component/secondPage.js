import React, { useEffect, useState } from 'react';

import "../assests/secondPage.css";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from "@mui/material/Button";

const SecondPage = (props) => {

    const [value, setValue] = useState('');
    const [disableBtn, setDisableBtn] = useState(true)

    useEffect(() => {
        if (value !== '') {
            setDisableBtn(false);
        }
    }, [value])

    const {
        secondPageData,
    } = props;

    const handleOnSubmit = () => {
        secondPageData({ numberOfWheels: value });
    }
    
    return ( 
        <>
            <div className="header">
               Select Number of wheels ?
            </div>
            <div className="radio-btn">
                <RadioGroup
                    name="noOfWheels"
                    onChange={(evt) => setValue(evt.target.value)}
                    row
                >
                    <FormControlLabel key={"one"} value="2" control={<Radio />} label="Bike" />
                    <FormControlLabel key={"two"} style={{ marginLeft: "40px" }} value="4" control={<Radio />} label="Car" />
                </RadioGroup>
            </div>
            <Button disabled={disableBtn} variant="outlined" size="large" onClick={handleOnSubmit}>Next</Button>
        </>
     );
}
 
export default SecondPage;