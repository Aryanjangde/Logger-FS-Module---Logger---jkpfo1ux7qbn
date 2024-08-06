const fs = require('fs');

function loggingMessage(message, type){
  let ans = "\n" + new Date().toISOString() + " " + "|"+ " " + type + " " + "|" + " " + message;
  return ans
}

function logInfo(message) {

  fs.appendFileSync("logs/app.log", loggingMessage(message, "INFO"));
}

function logWarning(message) {

  fs.appendFileSync("logs/app.log", loggingMessage(message, "WARNING"));
}

function logError(message) {
  fs.appendFileSync("logs/app.log", loggingMessage(message, "ERROR"));

}

logInfo("This is an info message");
logWarning("This is a warning message");
logError("This is an error message");

module.exports = {
  logInfo,
  logWarning,
  logError,
};
