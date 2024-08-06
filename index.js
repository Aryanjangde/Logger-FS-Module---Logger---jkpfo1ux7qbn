const fs = require('fs');

function logInfo(message) {
  let ans = "\n" + new Date().toISOString() + " " + "|"+ " " + "INFO" + " " + "|" + " " + message;
  fs.appendFileSync("logs/app.log", ans);
}

function logWarning(message) {
  let ans = "\n" + new Date().toISOString() + " " + "|"+ " " + "WARN" + " " + "|" + " " + message;
  fs.appendFileSync("logs/app.log", ans);
}

function logError(message) {
  let ans = "\n" + new Date().toISOString() + " " + "|"+ " " + "ERROR" + " " + "|" + " " + message;
  fs.appendFileSync("logs/app.log", ans);

}

logInfo("This is an info message");
logWarning("This is a warning message");
logError("This is an error message");

module.exports = {
  logInfo,
  logWarning,
  logError,
};
