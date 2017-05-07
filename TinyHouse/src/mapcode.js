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
var mymap = L.map('mapid').setView([42.2581, -71.8144], 13);
var layer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZWF0YmFubGkiLCJhIjoiY2oyNm85Zm8wMDExbDMyc2Nyamg1Z3JmOSJ9.hHJd89gkLS-oC6QSs41ojA' ).addTo(mymap);
mymap.setMaxBounds([
    [30, -100], //Southwest
     [50, -50]  //Northeast
]);

/*************** Markers ************************/
var marker = L.marker([42.2481, -71.8155]).addTo(mymap);
var circle = L.circle([42.2580, -71.8269], {
                        color: 'red',
                        fillColor: '#f03',
                        fillOpacity: 0.5,
                        radius: 1000
                    }).addTo(mymap);
var polygon = L.polygon([
                        [42.2581, -71.8044],
                        [42.2381, -71.8144],
                        [42.2781, -71.8244]
                        ]).addTo(mymap);
marker.bindPopup("<b>Good Spot!</b> <br>I am a popup.").openPopup();
circle.bindPopup("Restriction needed.");
polygon.bindPopup("Ideal place to build.");
