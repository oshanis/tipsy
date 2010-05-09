// Fail gracefully if Firebug's not installed
/*try {
    console.log('Firebug console found.');
} catch(e) { 
    console = { 
        log: function() {} 
    };
}
*/

//The code above does not seem to work. This is the correct way to log when debugging a Firefox extension. To see the log message, go to Tools –> Error Console. -- Oshani
function log(message) {
  var consoleService = Components.classes["@mozilla.org/consoleservice;1"].getService(Components.interfaces.nsIConsoleService);
  consoleService.logStringMessage("Tipsy: " + message);
}

