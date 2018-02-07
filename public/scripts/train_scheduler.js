//id, station_array, time_array, running
//somehow sort the json on the basis of decreasing time
//
//no of trains -> trains
//routeExists stores whether a route between two stations exists
//usingRoute is a 2d array that will store whether a route is being used or not

window.createArray = function(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

var routeExists = createArray(stations, stations);
var usignRoute = createArray(stations, stations);

for(int a=0; a<stations; a++){
    for(int b=0; b<stations; b++){
        routeExists[a][b] = usingRoute[a][b] = 0;
    }
}

while(trains!=0){
    for(int i=0; i<trains;i++){
        var station1 = json[i].stations[0];
        var station2 = json[i].stations[1];
        if(routeExists[station1][station2] && !usingRoute[station1][station2] && !running)
        {
            usingRoute[station1][station2] = true;
            json[i].time[0] -= 1;
            json[i].running = true;
            console.log("train with id " + json[i].id + "started from " + station0);
        }

        else if(running){
            json[i].time[0] -= 1;
            if(json[i].time[0] == 0){
                usingRoute[station1][station2] = false;
                json[i].time.splice(0,1);
                json[i].stations.splice(0,1);
                json[i].running = false;
                console.log("train with id " + json[i].id + " stopped at " + station1);
                if(json[i].stations.length == 1){
                    trains -=1;
                    delete json[i];
                }
            }
        }
    }
}
