/**
 * Authority belongs to Worcester Web Workshop
 *
 */


var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.mapbox.tileLayer('mapbox.streets').addTo(mymap);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,
        <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,
        Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets'
    accessToken: 'pk.eyJ1IjoiZWF0YmFubGkiLCJhIjoiY2oyNm9kMmNrMDEzajMzbzV4dzlvZDJ4YiJ9.Vd_nQMEfIVtqRytVSCDQOg'
}).addTo(mymap);

mapboxgl.accessToken = 'pk.eyJ1IjoiZWF0YmFubGkiLCJhIjoiY2oyNm9kMmNrMDEzajMzbzV4dzlvZDJ4YiJ9.Vd_nQMEfIVtqRytVSCDQOg';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9'
    });





//<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
//  type="text/javascript"></script>
//AIzaSyDSVQt05mIwLeN_oZlsBklyz2z8mR-GbYs



