//to denote that a train has stopped at a station, set the destination as the origin and set time as the waiting time
for(int a=0; a<time; a++){
    if(trains >1)
    {
        for(int b=0; b<trains-1; b++){
            for(int c=b+1; c<trains; c++){
                if((json[b].stations[0] == json[c].stations[1] || json[c].stations[1] == json[b].stations[0]) && json[b].stations[0] != json[b].stations[1] && json[c].stations[0] != json[c].stations[1]){
                    console.log("There was a collision between trains " + json[b].id + " and " + json[c].id);
                    trains-=2;
                    delete json[b];
                    delete json[c];
                }
            }

            json[b].time[0] -= 1;

            if(json[b].time[0] == 0){
                json[i].time.splice(0,1);
                json[i].stations(0,1);

                if(json[i].stations.length == 1){
                    trains -=1;
                    delete json[i];
                }
            }
        }
    }
}
