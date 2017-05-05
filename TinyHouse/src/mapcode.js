/**
 * Authority belongs to Worcester Web Workshop
 *
 */


/*************** MapBox Only************************/
mapboxgl.accessToken = 'pk.eyJ1IjoiZWF0YmFubGkiLCJhIjoiY2oyNm9kMmNrMDEzajMzbzV4dzlvZDJ4YiJ9.Vd_nQMEfIVtqRytVSCDQOg';
var mapBoxMap = new mapboxgl.Map({
 container: 'mapboxOnly',
 style: 'mapbox://styles/mapbox/streets-v9'
});


/*************** Leaflet + MapBox ************************/
//var mymap = L.map('mapid').setView([51.505, -0.09], 13, 13);
var mymap = L.map('mapid').setView([51.505, 100.09], 13);
var layer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZWF0YmFubGkiLCJhIjoiY2oyNm85Zm8wMDExbDMyc2Nyamg1Z3JmOSJ9.hHJd89gkLS-oC6QSs41ojA' ).addTo(mymap);
mymap.setMaxBounds([
    [5.499550, -167.276413], //Southwest
     [83.162102, -52.233040]  //Northeast
]);

/*************** Markers ************************/
var marker = L.marker([51.5, -0.09]).addTo(mymap);
var circle = L.circle([51.508, -0.11], {
                        color: 'red',
                        fillColor: '#f03',
                        fillOpacity: 0.5,
                        radius: 500
                    }).addTo(mymap);
var polygon = L.polygon([
                        [51.509, -0.08],
                        [51.503, -0.06],
                        [51.51, -0.047]
                        ]).addTo(mymap);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");
