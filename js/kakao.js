const mapContainer = document.querySelector("#map");

const mapOption = {
	center: new kakao.maps.LatLng(37.58206195368533, 127.00013868670247),
	level: 2,
};

const map = new kakao.maps.Map(mapContainer, mapOption);
const marker = new kakao.maps.Marker({ position: mapOption.center });
marker.setMap(map);

const mapTypeControl = new kakao.maps.MapTypeControl();

const zoomControl = new kakao.maps.ZoomControl();

map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// const [btnOn, btnOff] = document.querySelectorAll("nav button");

// // 지도인스턴스에 교통량정보 레이어 추가
// btnOn.addEventListener("click", () =>
// 	map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
// );

// // 아래 코드는 위에서 추가한 교통정보 지도타입을 제거합니다
// btnOff.addEventListener("click", () =>
// 	map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
// );

const btnToggle = document.querySelector(".trafficToggle");

btnToggle.addEventListener("click", (e) => {
	e.target.classList.toggle("on");

	if (e.target.classList.contains("on")) {
		map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
		e.target.innerText = "Traffic OFF";
	} else {
		map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
		e.target.innerText = "Traffic ON";
	}
});
