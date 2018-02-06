var map;

function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
	addPushPin({
		latitude: 29.94879913330079,
		longitude: 77.89939880371088,
		num: '12231'
	})
}

// train = {latitude, longitude, num}
function addPushPin(train) {
    var pushpin = new Microsoft.Maps.Pushpin(
    { 
    	latitude: train.latitude,
    	longitude: train.longitude 
    },
	{ 
		icon: 'https://www.bingmapsportal.com/Content/images/poi_custom.png', 
		anchor: new Microsoft.Maps.Point(12, 39), 
		title: train.num 
	});
    map.entities.push(pushpin);
}

window.addEventListener('load', 
  function() { 
	loadMapScenario();
  }, false);