station =  [{
    latitude: 29.897321866263027,
    longitude: 77.81305313110346,
    name: "asdf",
    num: "RK"
},
{
    latitude: 29.949096612364364,
    longitude: 77.93321609497065,
    name: "123",
    num: "LK"
},
{
    latitude: 29.976460878565426,
    longitude: 77.83227920532221,
    name: "123",
    num: "asd"
},
{
    latitude: 30.006196098360498,
    longitude: 77.75606155395502,
    name: "123",
    num: "123"
}];

var map;
var polyline = [];
var index = 0;
var data = [];
var clickedBefore = null;

function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
    for( i=0; i<station.length; i++){
        addPushPin(station[i]);
    }
}
function addPushPin(train) {
    pushpin = new Microsoft.Maps.Pushpin(
    { 
        latitude: train.latitude,
        longitude: train.longitude 
    },
    { 
        title: train.num 
    });
    pushpin.setOptions({ enableHoverStyle: true, enableClickedStyle: true });
    map.entities.push(pushpin);
    Microsoft.Maps.Events.addHandler(pushpin, 'click', function (mouseEvent) {
        if (!index || index < 0){
            index = 0; 
        }
        idx = getStationId(mouseEvent.target.geometry);
        if(clickedBefore === null)
        {
            clickedBefore = idx;
            return;
        }
        else if(clickedBefore === idx)
        {
            clickedBefore = null;
        }
        else {
            polyline.push(new Microsoft.Maps.Polyline([new Microsoft.Maps.Location(station[idx].latitude, station[idx].longitude),
                new Microsoft.Maps.Location(station[clickedBefore].latitude, station[clickedBefore].longitude)], null));
            data.push({
                station1: station[idx],
                station2: station[clickedBefore]
            })
            clickedBefore = null;
            map.entities.push(polyline[index]);
            Microsoft.Maps.Events.addHandler(polyline[index], 'click', function (mouseEvent) {
                idx = getId(mouseEvent.target.geometry);
                idx1 = removePolyline(idx);
                Microsoft.Maps.Events.removeHandler(polyline[idx1],'click');
                fixIndex(idx1);
            });
            index++;
        }
    });
}
function removePolyline(idx) {
    map.entities.removeAt(station.length + idx);
    return idx;
}
function getId(location) {
    idx = data.findIndex(x => {
        return x.station1.latitude===location.y[0] && x.station2.latitude===location.y[1];
    })
    return idx;
}
function getStationId(location) {
    idx = station.findIndex(x => {
        return x.latitude==location.y;});
    return idx;
}

window.addEventListener('load', 
  function() { 
    loadMapScenario();
}, false);

function fixIndex(idx){
    polyline.splice(idx, 1);
    data.splice(idx, 1);
    index--;
}
