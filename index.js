#!/usr/bin/env node

var argv = require('optimist').argv;
var gaze = require('gaze');
// console.log(argv);

var exec = require('child_process').exec;
function puts(error, stdout, stderr) {
    console.log(stdout);
}


try {
    gaze(argv.p, function(err, watcher) {
        console.log('Watching for glob %s', argv.p);
        this.on('all', function(event, filepath) {
            exec(argv.c, puts);
        });
    });
} catch (e) {
    console.error(e);
}
