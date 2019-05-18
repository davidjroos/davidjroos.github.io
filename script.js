//set the options
var center = new L.LatLng(42.3584308,-71.0597732);
var zoom = 8;
var url= "http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png";
var options={
        subdomains:["otile1","otile2",/*"otile3",*/"otile4"],//we'd usually use all 4 but something is up with #3 at the moment
        attribution:"Tiles Courtesy of <a href='http://www.mapquest.com/' target='_blank'>MapQuest</a> <img src='http://developer.mapquest.com/content/osm/mq_logo.png'>"
    };
//create the tiles
var tiles = new L.TileLayer(url,options);
//create the map
var m = new L.Map('map',{
    center:center,
    zoom:zoom,
    layers:[tiles]
    });
var gj =  new L.GeoJSON();
//create empty geojson object and add it to the map
m.addLayer(gj);
//create the popups
gj.on("featureparse", function (e) {
    if (e.properties){
        e.layer.bindPopup(makePop(e.properties));
    }
});
//get the current bounds
var bbox=m.getBounds().toBBoxString();
//the url
var url = "https://services2.arcgis.com/JkPEgZJGxhSjYOo0/arcgis/rest/services/BusService/FeatureServer/2/query?where=UPPER(ROUTEPATTERN)%20like%20%27%2502005%25%27&outFields=ROUTEPATTERN&outSR=4326&f=json"
//get the features
$.get(url+bbox,parseJSONP,"JSONP");
//this is the call back from the jsonp ajax request
function parseJSONP(data){
//we call the function to turn it into geoJSON and write a callback to add it to the geojson object
    toGeoJSON(data,
        function(d){
            gj.addGeoJSON(d)
        }
    );
}

//the function called earlier to make the popup, it goes through all the attributes and makes them into a nice key value list
function makePop(p){
var a = [];
 for(var key in p){
     a.push(key+": "+p[key]);
 }
 return a.join("<br/>");
};