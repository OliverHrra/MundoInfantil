function initMap() {
    let coord = {lat:-12.3894 , lng:-76.7803 };
    let map = new google.maps.Map(document.getElementById("map"),{
        zoom: 13,
        center: coord,
        saturation: -90,
        lightness: 50,
    });
    let marker = new google.maps.Marker({
        position: coord,
        map: map
    });
};
