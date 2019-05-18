	var m = L.map('mapid', {dragging: false, tap: false}).setView([-36.848616216005304, 174.7682547569275], 13);
	
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}@2x.png?access_token={accessToken}', {
	    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	    id: 'mapbox.light',
	    accessToken: 'pk.eyJ1IjoiZGF2aWRqcm9vcyIsImEiOiJjam9nOXIyaXEwMTFsM2txb2hocXZhb3dmIn0.fNjYBqw-stgxvdFtLdOiwg'
	}).addTo(m);



var gj =  new L.GeoJSON();
//create empty geojson object and add it to the map
m.addLayer(gj);

//the url
var url = "https://services2.arcgis.com/JkPEgZJGxhSjYOo0/arcgis/rest/services/BusService/FeatureServer/2/query?where=UPPER(ROUTEPATTERN)%20like%20%27%2502005%25%27&outFields=ROUTEPATTERN&outSR=4326&f=json"
//get the features
$.get(url,parseJSONP,"JSONP");
//this is the call back from the jsonp ajax request
function parseJSONP(data){
//we call the function to turn it into geoJSON and write a callback to add it to the geojson object
    toGeoJSON(data,
        function(d){
            gj.addGeoJSON(d)
        }
    );
}