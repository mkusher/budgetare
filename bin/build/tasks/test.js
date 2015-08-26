"use strict";

var gulp = require("gulp");
var webpack = require("webpack");
var Mocha = require("mocha");
var glob = require("glob");
var path = require("path");
var fs = require("fs");

function createGlobal(){
    require("babel/polyfill");
    var chai = require("chai");
    var sinon = require("sinon");
    var sinonChai = require("sinon-chai");
    chai.use(sinonChai);
    global.expect = chai.expect;
    global.sinon = sinon;
    global.document = {
        "addEventListener": function(){}
    };
    global.window = {};
}

module.exports = function (config){
    var mocha = new Mocha(config.mocha);
    var build = config.build;
    var pattern = build.context + 'src/' + config.path;
    return function(){
        createGlobal();
        glob(pattern, function(er, files){
            files.forEach(function(file){
                var base = path.basename(file).split('.')[0];
                var relative = path.relative(build.context, file);
                build.entry[base] = './' + relative;
                mocha.addFile(
                    path.join(
                        build.output.path,
                        build.output.filename.replace('[name]', base)
                    )
                );
            });
            if(fs.existsSync(build.output.path)){
                fs.readdirSync(build.output.path).forEach(function(file){
                    fs.unlinkSync(path.join(build.output.path, file));
                });
            }
            var compiler = webpack(config.build);
            compiler.run(function(err, stats){
                if(err){
                    console.error(err);
                }
                else {
                    mocha.run(function(fails){
                        process.on('exit', function () {
                            process.exit(fails);
                        });
                    });
                }
            });
        });
        return gulp;
    };
};
