var intersecting_station = [{
        latitude1: 29.897321866263027,
        longitude1: 77.81305313110346,
        latitude2: 29.949096612364364,
        longitude2: 77.93321609497065,
        num1: "asdd",
        num2: "RK"
    },
    {
        latitude1: 29.976460878565426,
        longitude1: 77.83227920532221,
        latitude2: 30.006196098360498,
        longitude2: 77.75606155395502,
        num1: "asfas",
        num2: "asd"
    }
];

function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
    Microsoft.Maps.loadModule('Microsoft.Maps.HeatMap', function () {
    var locations = [];
    for (i = 0; i < intersecting_station.length; i++) {
        locations.push(new Microsoft.Maps.Location(
            (intersecting_station[i].latitude1 + intersecting_station[i].latitude2) / 2,
            (intersecting_station[i].longitude1 + intersecting_station[i].longitude2) / 2
            )
        )
    }
    var heatMap = new Microsoft.Maps.HeatMapLayer(locations,{intensity: 0.65,
        radius: 20,
        colorGradient: {
            '0': 'Black',
            '0.4': 'Purple',
            '0.6': 'Red',
            '0.8': 'Yellow',
            '1': 'White'
        }});
    map.layers.insert(heatMap);
});
}

window.addEventListener('load', 
  function() { 
    loadMapScenario();
}, false);
