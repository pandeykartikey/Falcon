station = JSON.parse(localStorage.getItem('dashboard_stations'));

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

function submitTrainFinal() {
    var name = prompt('Enter train name');
    var value = prompt('Enter train no.');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            removePolylineAll();
            window.location = "/";
        }
    };
    xhttp.open("POST", "/train", true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    data.name = name;
    data.value = value;
    xhttp.send(JSON.stringify(data));
    data=[];
    index=0;
}

function submitTrain() {
    var name = prompt('Enter train name');
    var value = prompt('Enter train no.');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            removePolylineAll();
        }
    };
    xhttp.open("POST", "/train", true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    data.name = name;
    data.value = value;
    xhttp.send(JSON.stringify(data));
    data=[];
    index=0;
}

function removePolylineAll() {
    for(i=0; i<index; i++) {
        map.entities.removeAt(station.length + i);
    }
}