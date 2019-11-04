//var TdClient = require('tdweb');
import TdClient from 'tdweb'

let options = {
    logVerbosityLevel: 1,
    jsLogVerbosityLevel: 3,
    mode: 'wasm', 
    prefix: 'tdlib_test',
    readOnly: false,
    isBackground: false,
    useDatabase: false,
};

var client = new TdClient(options);

document.write('hola mundo');
console.log("hola mundo");