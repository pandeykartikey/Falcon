var map;
var index = 0;

var color = ['blue', 'red', 'green', 'pink', 'yellow']; 

function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
    for( i=0; i<station.length; i++) {
        addStations(station[i]);
    }
    for(i=0; i<train.length; i++) {
        locations = [];
        for(j=0; j<train[i].path.length; j++) {
            locations.push(new Microsoft.Maps.Location(station[train[i].path[j]].latitude, station[train[i].path[j]].longitude)) 
        }
        addPolyline(locations, color[i]);
    }
}

function addStations(station) {
    var pushpin = new Microsoft.Maps.Pushpin(
    { 
        latitude: station.latitude,
        longitude: station.longitude 
    },
    { 
        title: station.num 
    });
    map.entities.push(pushpin);
}

function addPolyline(path, color) {
    var polyline = new Microsoft.Maps.Polyline(path,{ strokeColor: color, strokeThickness: 3});
    map.entities.push(polyline);
}
// train = {latitude, longitude, num}
function addPushPin(train) {
    pushpin.push(new Microsoft.Maps.Pushpin(
    { 
    	latitude: train.latitude,
    	longitude: train.longitude 
    },
	{ 
		icon: 'https://www.bingmapsportal.com/Content/images/poi_custom.png',
		title: train.num 
	}));

    map.entities.push(pushpin[index]);
    index = index +1;
}

window.addEventListener('load', 
  function() { 
	loadMapScenario();
  }, false);

function trainSet(num) {
    map.entities.clear();
    idx = getTrainId(num);
    locations = [];
    for(j=0; j<train[idx].path.length; j++) {
        addStations(station[train[idx].path[j]]);
        locations.push(new Microsoft.Maps.Location(station[train[idx].path[j]].latitude, station[train[idx].path[j]].longitude)) 
    }
    addPolyline(locations, color[idx]);
}
function getTrainId(num) {
    idx = train.findIndex(x => {
        return x.num==num;});
    return idx;
}

function stationSet(num) {
    map.entities.clear();
    idx = getStationId(num.toString());
    id_array = getTrainIds(idx);
    for(i=0; i<id_array.length ; i++) {
        locations = [];
        for(j=0; j<train[id_array[i]].path.length; j++) {
            addStations(station[train[id_array[i]].path[j]]);
            locations.push(new Microsoft.Maps.Location(station[train[id_array[i]].path[j]].latitude, station[train[id_array[i]].path[j]].longitude)) 
        }
    addPolyline(locations, color[id_array[i]]);   
    } 
}

function getStationId(num) {
    idx = station.findIndex(x => {
        return x.num==num;});
    return idx;
}

function getTrainIds(idx) {
    id_array = []
    for (i=0; i< train.length; i++)
    {
        if(train[i].path.includes(idx))
            id_array.push(i);
    } 
    return id_array;
}