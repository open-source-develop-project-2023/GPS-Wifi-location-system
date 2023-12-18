import React, { useState, useEffect } from "react";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import './Location.scss';
const Location = (props) => {
  const { kakao } = window;
  const [info, setInfo] = useState()
  const [markers, setMarkers] = useState([])
  const [map, setMap] = useState()
  const [searchList, setSearchList] = useState([]);
  // useEffect(() => {
  //   console.log("Location: " + props.selectedPlaceName);
  //   setSearchList(dataState.map((place, index) => { 
  //     let content;
  //     console.log(props.selectedPlaceName === "" || (props.selectedPlaceName === place.place_name));
  //     if (props.selectedPlaceName === "" &&  index === 0) {
  //       content = <p id="selected">{place.place_name}</p>;
  //     }
  //     else if ((props.selectedPlaceName === place.place_name)) {
  //       content = <p id="selected">{place.place_name}</p>;
  //     } else {
  //       content = <p>{place.place_name}</p>;
  //     }
  //     return (
  //       <div className="place" key={index} data-key={place.place_name} onClick={(event) => props.updateSelectedPlaceName(event)}>
  //         {content}
  //       </div>
  //     );
  //   }));
  //   console.log(searchList);
  // }, [props.selectedPlaceName]);

  // useEffect(() => {
  //   console.log("First Search Data ", dataState);
  //   console.log("First Search: ", searchList);
  // }, [dataState]);
  

  useEffect(() => {
    if (!map) return
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(props.inputStr, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds()
        let markers = []

        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          })
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
        }
        setMarkers(markers)

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds)

        // data.map -> 리턴값: p 태그가 여러개 들어있는 배열
        // searchList: 배열state
        setSearchList(data.map((place, index) => { 
          let content;
          console.log(props.selectedPlaceName === "" || (props.selectedPlaceName === place.place_name));
          if (props.selectedPlaceName === "" &&  index === 0) {
            content = <p id="selected">{place.place_name}</p>;
          }
          else if ((props.selectedPlaceName === place.place_name)) {
            content = <p id="selected">{place.place_name}</p>;
          } else {
            content = <p>{place.place_name}</p>;
          }
          return (
            <div className="place" key={index} data-key={place.place_name} onClick={(event) => props.updateSelectedPlaceName(event)}>
              {content}
            </div>
          );
        }));
      }
    })
  }, [map])

  // useEffect({
  //   var selectedPlace = document.getElementsByClassName('').
  // }, [selectedIndex]);
  return (
    <div id="location">
      <div id="search-list">
        {searchList}
      </div>
      <p>{props.selectedPlaceName}</p>
      <Map // 로드뷰를 표시할 Container
      center={{
        lat: 37.566826,
        lng: 126.9786567,
      }}
      style={{
        width: "600px",
        height: "350px",
      }}
      level={3}
      onCreate={setMap}
    >
      {markers.map((marker) => (
        <MapMarker
          key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          onClick={() => setInfo(marker)}
        >
          {info &&info.content === marker.conRtent && (
            <div style={{color:"#000"}}>{marker.content}</div>
          )}
        </MapMarker>
      ))}
      </Map>
    </div>
    
  )
}
//
export default Location;