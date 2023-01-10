function initMap() {
    // The location of Uluru
    const Company = { lat: 21.02199935913086, lng: 105.83999633789062 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: Company,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: Company,
        map: map,
    });
}


