// Fail gracefully if Firebug's not installed
/*try {
    console.log('Firebug console found.');
} catch(e) { 
    console = { 
        log: function() {} 
    };
}
*/

//This is the correct way to log when debugging a Firefox extension -- oshani
function log(message) {
  var consoleService = Components.classes["@mozilla.org/consoleservice;1"].getService(Components.interfaces.nsIConsoleService);
  consoleService.logStringMessage("Tipsy: " + message);
}

