//지도를 생성할 프레임요소 변수에 할당
const mapContainer = document.querySelector("#map");

//지도에 적용할 옵션값을 객체로 묶어서 할당
const mapOption = {
	center: new kakao.maps.LatLng(37.58206195368533, 127.00013868670247), //출력할 지도의 위도, 경도
	level: 2, //지도의 확대 정도
};

//new 연산자로 카카오 지도 인스턴스를 생성 (지도를 출력한 DOM, 지도옵션객체)
const map = new kakao.maps.Map(mapContainer, mapOption);

// 지도위치에 관한 인스턴스 생성
const markerPosition = new kakao.maps.LatLng(
	37.58206195368533,
	127.00013868670247
);

// 마커에 대한 인스턴스 생성(인수로 위에서 생성된 지도위치 인스턴스 필요)
const marker = new kakao.maps.Marker({
	position: markerPosition,
});

// 마커인스턴스에 setmap함수를 호출해서 인수로 지도 인스턴스 집어넣음.
marker.setMap(map);

// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
// marker.setMap(null);

// 카카오 맵 api에서 샘플에 클릭한 위치에 마커 표시하기 직접해보기로 정밀하게 좌표를 얻을 수 있습니다.
