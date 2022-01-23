import React, { useEffect, useState } from 'react';
import Button from "@mui/material/Button";
import { Modal, DatePicker } from 'antd';

import "../assests/fifthPage.css";

import { baseUrl } from "../utils";

const { RangePicker } = DatePicker;

const FifthPage = (props) => {

    const [value, setValue] = useState('');
    const [disableBtn, setDisableBtn] = useState(true)
    const [isError, setIfError] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    const [msg, setMsg] = useState(true)

    const {
        data,
        onFinish
    } = props;

    useEffect(() => {
        if (value.length !== 0) {
            setDisableBtn(false);
        }
    }, [value])

    const handleOnSubmit = async () => {
        await fetch(`${baseUrl}/book`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...data, bookedDate: ["2021-01-15", "2021-01-18"] })
        })
        .then((res) => {
            if (!res.ok) {
                setDisableBtn(true);
                setIfError(true);
            } else {
                setSuccess(true);
            }

            return res.json();
        })
        .then((data) => {
            setMsg(data.message)
        })
    }

    const handleRangePicker = (param, date) => {
        setValue(date)
    }

    const handleClose = () => {
        if (isError) {
            setDisableBtn(true);
            setIfError(false);
        } else {
            setSuccess(false);
            onFinish();
        }
    }

    const getContext = () => {
        return (
            <>
                <div>
                    {msg}
                </div>
            </>
        )
    }

    return (
        <>
            <div className="header">
                Pick a Date For Ride!
            </div>
            <div className='rangePicker'>
                <RangePicker onChange={handleRangePicker} />
            </div>
            <Modal
                visible={isError || isSuccess}
                okText={isError ? "Cancel" : "Start Over"}
                onOk={handleClose}
                cancelText={() => <></>}
            >
                {getContext()}
            </Modal>
            <Button disabled={disableBtn} variant="outlined" size="large" onClick={handleOnSubmit}>Finish</Button>
        </>
    );
}

export default FifthPage;