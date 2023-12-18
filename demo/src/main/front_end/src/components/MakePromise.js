import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Location from './location/Location';

const MakePromise = () => {
    const navigate = useNavigate();
    const { date } = useParams(); // 동적 라우팅으로 생성된 path variable을 가져오는 것
    console.log(date);

    const [location, setLocation] = useState(""); // 형이 검색창에 입력하는 주소 state, Kakaomap이랑 Location.js
    const [contents, setContents] = useState("");
    const [isSearched, setIsSearched] = useState(false); // 검색 버튼을 눌렀는지 여부
    const [selectedPlaceName, setSelectedPlaceName] = useState(""); 
    // 자식 component, 즉 Location.js한테 보내줄 state
    // 부모 component가 자식 component의 state를 가져오는 것은 어려움
    // 부모 component의 state를 자식 component가 이용하도록 함.

    useEffect(() => { // selectedPlaceName
        console.log("MakePromise: " + selectedPlaceName);
    }, [selectedPlaceName]);
    // useEffect, 새로고침

    const updateLocation = (event) => { 
        setLocation(event.currentTarget.value); 
        console.log(location);
        setIsSearched(false);
    }

    const updateContents = (event) => { // 2. contents state 변수를 update
        setContents(event.currentTarget.value); // 3. event.currentTarget.value는 input value
        console.log(contents);
    }
    
    const updateSelectedPlaceName = (event) => { // 자식 component, 즉 Location.js한테 보내줄 setState 함수
        const selectedPlaceName = event.currentTarget.dataset.key; // event.currentTarget.dataset.key = place.place_name
        setSelectedPlaceName(selectedPlaceName);
    };


    const onSearch = (event) => {
        event.preventDefault();
        setIsSearched(true);
    }
     
    const onSubmit = (event) => {
        event.preventDefault();   
        axios.post('/api/make_promise', { // /api -> localhost:8080
            _date: date, 
            _location: selectedPlaceName,
            _contents: contents
        }, 
        {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            console.log(response);
            console.log("제출 완료");
        })     
        .catch((error) => {
            console.log(error);
        })
        navigate("/");
    }

    return (
        <div className="make-promise">
            <h1>{ date }</h1> 
            <input 
                type="text" 
                name="location" 
                placeholder="약속 장소" 
                onChange={updateLocation}
            />
            <button onClick={onSearch} id="make-promise-btn">장소 검색</button>
            <input 
                type="text" 
                name="contents" 
                placeholder="약속 내용" 
                onChange={updateContents} // 1. input value의 값이 변하는 event가 발생했을 때 updateContents 함수를 실행
            />
            {
                // 자식 컴포넌트에게 보내줄 state (선택)
                // 자식 컴포넌트에게 보내줄 setState가 포함되어 있는 함수 (필수)
                (isSearched) ? <Location inputStr={location} selectedPlaceName={selectedPlaceName} updateSelectedPlaceName={updateSelectedPlaceName} /> : <></>
            }
            <button onClick={onSubmit} id="make-promise-btn">저장하기</button>
        </div>
    );
}


export default MakePromise;