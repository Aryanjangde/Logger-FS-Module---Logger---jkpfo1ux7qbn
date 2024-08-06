const fs = require('fs');

function loggingMessage(message, type){
  let ans = "\n" + new Date().toISOString() + " " + "|"+ " " + type + " " + "|" + " " + message;
  fs.appendFileSync("logs/app.log", ans);
}

function logInfo(message) {
  loggingMessage(message, "INFO")
}

function logWarning(message) {
  loggingMessage(message, "WARNING")
}

function logError(message) {
  loggingMessage(message, "ERROR")
}

logInfo("This is an info message");
logWarning("This is a warning message");
logError("This is an error message");

module.exports = {
  logInfo,
  logWarning,
  logError,
};
