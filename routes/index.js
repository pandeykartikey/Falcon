var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    object = {
        train: [{
                name: 'ASDdas',
                num: '12231',
                path: [0,1, 2]
            },
            {
                name: 'jfklads',
                num: '12363',
                path: [0, 3]
            },
            {
                name: 'xmcxcnz',
                num: '16563',
                path: [0, 1]
            }
        ],
        station: [{
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
                latitude: 29.98,
                longitude: 77.75606155395502,
                name: "123",
                num: "123"
            }
        ]
    };
    res.render('index', object);
});

module.exports = router;