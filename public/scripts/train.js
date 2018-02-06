//id, station_array, time_array, running
//somehow sort the json on the basis of decreasing time
//
//no of trains -> trains
//initialize bool array for stations: visited;


while(trains!=0){
    for(int i=0; i<trains;i++){
        if(!visited[json[i].stations[0]] && !visited[json[i].stations[1]] && !running)
        {
            visited[json[i].stations[0]] = visited[json[i].stations[1]] = true;
            json[i].time[0] -= 1;
            json[i].running = true;
            console.log("train with id " + json[i].id + "started from " + json[i].stations[0]);
        }

        else if(running){
            json[i].time[0] -= 1;
            if(json[i].time[0] ===0){
                visited[json[i].stations[0]] = visited.json[i].stations[1]] = false;
                json[i].time.splice(0,1);
                json[i].stations.splice(0,2);
                json[i].running = false;
                console.log("train with id " + json[i].id + " stopped at " + json[i].stations[1]);
                if(json[i].stations.length === 0){
                    trains -=1;
                    delete json[i];
                }

            }
        }
    }
}
