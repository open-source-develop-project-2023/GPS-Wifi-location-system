import { useParams } from 'react-router-dom';
import React, {useState} from 'react';
import axios from 'axios';
import Location from '../location/Location';
import IconButton from '../icon_button/IconButton';
import '../../App.css';
import './CheckPromise.scss';

const CheckPromise = () => {

    const [ promiseList, setPromiseList ] = useState([]);

    const { date } = useParams();
    
    axios.post('/api/check_promise', {
        _date: date, 
    }, 
    {
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) => {
        setPromiseList(response.data.map((promiseInfo, index) => {
            return (
                // classNAme을 쓴 이유: promise div 태그는 여러 개가 있기 때문에
                <div className="check-list" key={index}>
                    <div className="check-list-info">
                        <p>{promiseInfo._location}</p>
                        <p>{promiseInfo._contents}</p>
                    </div>
                </div>
            );
        }));
    })     
    .catch((error) => {
        console.log(error);
    })

    return (
        <div id="check-promise">
            <header>
                <IconButton shape="arrow" />
                <h1>{date}</h1>
                <IconButton shape="trash" date={date} />
            </header>
            {promiseList}
            
        </div>
    )
}

export default CheckPromise;