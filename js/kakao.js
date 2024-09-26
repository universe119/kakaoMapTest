// new kakao.maps.LatLng(위도, 경도) : 지도와 마커를 출력할때 필요한 위치 인스턴스 반환
// new kakao.maps.Map(DOM, option) : 지도 인스턴스 반환
// new kakao.maps.Market({position: 위치 인스턴스}) : 특정 위치에 생성되는 마커인스턴스 반환

// 마커인스턴스.setMap(지도 인스턴스) : 기존 지도에 마커를 세팅해주는 함수

//frame El
const mapContainer = document.querySelector("#map");

//map option(position instance, level)
const mapOption = {
	center: new kakao.maps.LatLng(37.58206195368533, 127.00013868670247),
	level: 2,
};

//map instance
const map = new kakao.maps.Map(mapContainer, mapOption);

//marker instance
const marker = new kakao.maps.Marker({ position: mapOption.center });

//binding marker
marker.setMap(map);
