import React, { useEffect, useState } from "react"; 

export default function Kakao() {

    useEffect(() => {
        const kakaoMapScript = document.createElement('script')
        kakaoMapScript.async = false
        kakaoMapScript.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=f3bf6495216810e09bd6c6cfba23248c&autoload=false'
        document.head.appendChild(kakaoMapScript)

        const onLoadKakaoAPI = () => {
            window.kakao.maps.Load(() => {
                var container = document.getElementById('map');
                var options = {
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3,
                }

            var map = new window.kakao.maps.Map(container, options)
            })
        }

        kakaoMapScript.addEventListener('load', onLoadKakaoAPI)
    }, [])


    return  <main className="w-full flex flex-col items-center justify-center pt-4">
        <div classNmae="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
            <div id="map" style={{ width: "100%", height: "100%" }}></div>
        </div>
        </main>

}