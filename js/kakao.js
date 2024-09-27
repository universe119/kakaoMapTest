const mapContainer = document.querySelector("#map");
const btnToggle = document.querySelector(".trafficToggle");
const viewToggle = document.querySelector(".viewToggle");

const mapOption = {
	center: new kakao.maps.LatLng(37.58206195368533, 127.00013868670247),
	level: 2,
};
let map = new kakao.maps.Map(mapContainer, mapOption);
let marker = new kakao.maps.Marker({ position: mapOption.center });
const mapTypeControl = new kakao.maps.MapTypeControl();
const zoomControl = new kakao.maps.ZoomControl();

map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
marker.setMap(map);

window.addEventListener("resize", () => {
	mapContainer.innerHTML = "";
	map = new kakao.maps.Map(mapContainer, mapOption);
	marker.setMap(map);

	map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
	map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

	btnToggle.classList.remove("on");
	btnToggle.innerText = "Traffic ON";
});

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

//roadview setting
const viewContainer = document.querySelector("#view"); //로드뷰를 표시할 div
const view = new kakao.maps.Roadview(viewContainer); //로드뷰 객체
const viewClient = new kakao.maps.RoadviewClient(); //좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체

// 특정 위치의 좌표와 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄운다.
viewClient.getNearestPanoId(mapOption.center, 50, (panoId) => {
	view.setPanoId(panoId, mapOption.center); //panoId와 중심좌표를 통해 로드뷰 실행
});

// 로드뷰에 마커 올리기
kakao.maps.event.addListener(view, "init", () => {
	// 로드뷰에 올릴 마커를 생성합니다.
	const rMarker = new kakao.maps.Marker({
		position: mapOption.center,
		map: view, //view로 설정하면 로드뷰에 올라갑니다.
	});

	// 로드뷰에 올릴 장소명 인포윈도우를 생성합니다.
	const rLabel = new kakao.maps.InfoWindow({
		position: mapOption.center,
		content: "서교주담",
	});

	rLabel.open(view, rMarker);
});
