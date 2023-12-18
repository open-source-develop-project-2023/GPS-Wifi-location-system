import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { GiReturnArrow } from "react-icons/gi";
import axios from 'axios';
import './IconButton.scss';

const IconButton = (props) => {

    const navigate = useNavigate();

    var iconComponent;
    var onClick;
    var className = "icon-button ";
    const modifyPromise = (event) => {
        console.log("수정");
    };
    const deletePromise = (event) => {
        console.log(props.date);
        axios.post('/api/delete_promise', {
            _date: props.date,
            _location: "",
            _contents: ""
        },
        {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            console.log(response);
            navigate("/");
        })
        .catch(error => {
            console.log(error);
        });
        console.log("삭제");
    };

    const navigateBack = (event) => {
        console.log("빠꾸");
        navigate("/");
    }

    switch(props.shape) {
        case "trash":
            iconComponent = <FaRegTrashAlt style={{ fontSize: '1.5em' }} />;
            onClick = deletePromise;
            className += "trash";
            break;
        case "pencil":
            iconComponent = <FaPencil style={{ fontSize: '1.5em' }} />;
            onClick = modifyPromise;
            className += "pencil";
            break;  
        case "arrow":
            iconComponent = <GiReturnArrow style={{ fontSize: '1.5em'}} />
            onClick = navigateBack;
            className += "arrow";
            break;
    }
    return (
        <button 
            className={className}
            onClick={() => {
                onClick();
            }}
        >
            {iconComponent}
        </button>
    )
}

export default IconButton;