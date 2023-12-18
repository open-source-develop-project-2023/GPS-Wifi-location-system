import { DateClickArg } from '@fullcalendar/core/internal';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from "@fullcalendar/interaction";
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MyCalendar.css';

const MyCalendar = () => {

    const navigate = useNavigate();

    const [promiseList, setPromiseList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('/api/check_event')
        .then((response) => {
            setPromiseList(response.data);
            setIsLoading(false);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    const events = promiseList.map((promiseInfo) => ({ 
        title: promiseInfo._contents,
        date: promiseInfo._date
    }));

    const onClick_make = (info) => {
        let url = "/make_promise/";
        let date = info.dateStr;
        url += date
        console.log(info);
        navigate(url);
    }

        const onClick_check = (info) => {
            let url = "/check_promise/";
            let date = info.event.startStr;
            url += date
            console.log(date);
            navigate(url);
        }

        return (
            <div className="App">
                {
                    (isLoading) ?
                    <p>로딩중</p> 
                    :
                    <FullCalendar
                        defaultView="dayGridMonth"
                        plugins={[ dayGridPlugin, interactionPlugin ]}
                        events={events}
                        dateClick={onClick_make}
                        eventClick={onClick_check}
                    />
                }     
            </div>
        );
}


export default MyCalendar;