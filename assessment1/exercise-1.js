/*
  Name: Huynh Le Diem Qui
  WeCamp Batch 7 - JS Assessment
  Exercise 1
*/

/* Solution */
function Logger(prefix) {
  return (message) => console.log(`[${prefix.toUpperCase()}]: ${message}`);
}


/* Driving code */
// Create loggers
const infoLog = Logger('info');
const debugLog = Logger('debug');
const errorLog = Logger('error');

// Test logs
infoLog('hello world');  // [INFO]: hello world
debugLog('Something went wrong');  // [DEBUG]: Something went wrong
infoLog('Another info log');  // [INFO]: Another info log
errorLog('Critical failure!'); // [ERROR]: Critical failure!