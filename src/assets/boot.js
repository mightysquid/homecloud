if(typeof require !== 'undefined') {
    // create the nw_global 
    window.nw_global = window.global;
    window.global = undefined;
    //const win = nw.Window.get();
    //alert(JSON.stringify(win));
    //window.global = win.window;
    // alert(JSON.stringify(window));
    fs = require('fs');
    path = require('path');
    cp = require('child_process');
    os = require('os');
    // window.fs = require('fs-extra');
    // window.path = require('path');
    // window.cp = require('child_process'); // delete child process and prefer execa
    // window.execa = require('execa');
    // add other node modules here
} else {
// alert('this app must not run in browser');
    console.log("This is a desktop app, forbidden to run in browser");
}