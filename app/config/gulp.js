module.exports = {
    "browserify": [
        {
            "src": "./src/index.js",
            "filename": "app.min.js",
            "dest": "public/scripts"
        }
    ],
//    "resources": {
//        "fonts": {
//            "src": [],
//            "dest": vendor.fonts.dest.base
//        },
//        "images": {
//            "src": [
//                "src/client/**/*.png",
//                "src/client/**/*.jpeg",
//                "src/client/**/*.jpg",
//                "src/client/**/*.gif",
//                "src/client/**/*.ico"
//            ],
//            "dest": "public/images"
//        }
//    },
    "test": {
        "configFile": __dirname + '/../../tests/karma.conf.js',
        "singleRun": true
    },
//    "styles": [
//        vendor.styles,
//        app.styles,
//        front.styles
//    ],
    "watch": {
//        "watch": [
//            {
//                "src": app.styles.src,
//                "name": "styles"
//            },
//            {
//                "src": front.styles.src,
//                "name": "styles"
//            }
//        ],
        "watchify": [
            {
                "src": "./src/index.js",
                "filename": "app.min.js",
                "dest": "public/scripts"
            }
        ]
    }
};
