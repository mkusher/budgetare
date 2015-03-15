var gulp = require('gulp');
var fs = require("fs");
var map = require('map-stream');
var path = require("path");
var extend = require("lodash").extend;

function createFromDist(){
    return map(function createFromDist(file,cb){
        if (file.isNull()) return cb(null, file); // pass along
        if (file.isStream()) return cb(new Error("Streaming not supported"));

        var path = file.path.replace(/\.dist$/i, '');
        if(!fs.existsSync(path)){
            fs.appendFile(path, file.contents, function(err){
                if(err) throw err;
            });
        }
        else {
            var source = JSON.parse(file.contents),
                dest = require(path) || {};
            dest = extend({}, source, dest);
            var destId = fs.openSync(path, 'w');
            fs.writeSync(destId, JSON.stringify(dest));
        }

        cb(null,file);
    })
}

module.exports = function(config){
    return function(){
        return gulp.src(config)
            .pipe(createFromDist());
    };
};
