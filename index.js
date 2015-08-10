#!/usr/bin/env node

var argv = require('optimist').argv;
var gaze = require('gaze');

var pattern = argv.p;
var cmd = argv.c;

var exec = require('child_process').exec;
function puts(error, stdout, stderr) {
    console.log(stdout);
}

if(pattern.indexOf(' ') !== -1) {
    pattern = pattern.split(' ');
}

try {
    gaze(pattern, function(err, watcher) {
        console.log('Watching for glob %s', argv.p);
        this.on('all', function(event, filepath) {
            exec(cmd, puts);
        });
    });
} catch (e) {
    console.error(e);
}
