import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';

import "../assests/firstPage.css";

const FirstPage = (props) => {

    const {
        firstPageData
    } = props;

    const [tfOneValue, setTfOneValue] = useState('');
    const [tfTwoValue, setTfTwoValue] = useState('');
    const [disableBtn, setDisableBtn] = useState(true);

    useEffect(() => {
        if (tfOneValue !== '' && tfTwoValue !== '') {
            setDisableBtn(false);
        } else {
            !disableBtn && setDisableBtn(true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tfOneValue, tfTwoValue])

    const handleOnSubmit = () => {
        if (tfOneValue !== '' || tfTwoValue !== '') {
            firstPageData({
                firstName: tfOneValue,
                lastName: tfTwoValue
            })
        }
    }

    return (
        <>
            <div className="title">
                <p>First, what's your name?</p>
            </div>
            <div className="tf1">
                <TextField onChange={(evt) => setTfOneValue(evt.target.value)} required className="tf" label="First Name" variant="outlined"></TextField>
            </div>
            <div className="tf2">
                <TextField onChange={(evt) => setTfTwoValue(evt.target.value)} required className="tf" label="Last Name" variant="outlined"></TextField>
            </div>
            <Button disabled={disableBtn} variant="outlined" size="large" onClick={handleOnSubmit}>Next</Button>
        </>
    );
}

export default FirstPage;