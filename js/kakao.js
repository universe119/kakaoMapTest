const mapContainer = document.querySelector("#map");

const mapOption = {
	center: new kakao.maps.LatLng(37.58206195368533, 127.00013868670247),
	level: 2,
};

const map = new kakao.maps.Map(mapContainer, mapOption);
const marker = new kakao.maps.Marker({ position: mapOption.center });
marker.setMap(map);

// 맵 위에 올릴 타입 컨트롤 컨트롤 인스턴스 생성
const mapTypeControl = new kakao.maps.MapTypeControl();

//맵 위에 올릴 줌 컨트롤 인스턴스 생성
const zoomControl = new kakao.maps.ZoomControl();

// 타입컨트롤러의 위치값 지정하는 함수
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 줌 컨트롤러의 위치값 지정하는 함수
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
