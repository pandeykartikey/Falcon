var map;
var pushpin = [];
var index = 0;
function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
	addPushPin({
		latitude: 29.94879913330079,
		longitude: 77.89939880371088,
		num: '12231'
	});
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

function userInput() {
	Microsoft.Maps.Events.addHandler(map, 'click', function (mouseEvent) {
    	//TODO: alert for train number
    	console.log(mouseEvent.location);
    	//TODO: Add a pushpin in map
    	//TODO: Add a pushpin in table
    	//TODO: Add an on click handler on push pin to remove it 
	});
}