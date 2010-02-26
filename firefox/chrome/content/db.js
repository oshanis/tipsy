/*
 * Wrapper around mozilla's sqlite storage API, defined in:
 *    https://developer.mozilla.org/en/Storage
 * Create the tipsy DB connection by calling create_tipsy_db()
 */

// Prototype for the tipsy DB wrapper
_tipsyDbProto = function() {
    // Error Check -- Make sure 'new' keyword was used
    // ----------------------------------------------------------------
    if ( !(this instanceof _tipsyDbProto) ) 
       return new _tipsyDbProto();
       
    // Member Variables
    // ----------------------------------------------------------------
    this._dbConn = null;
    this._timers = null;
    
    // Methods
    // ----------------------------------------------------------------
    this.opendb = function(name) {
        if (this._dbConn == null) {
            var file = Components.classes["@mozilla.org/file/directory_service;1"]  
                .getService(Components.interfaces.nsIProperties)  
                .get("ProfD", Components.interfaces.nsIFile);  
            file.append("tipsy.sqlite");  

            var storageService = Components.classes["@mozilla.org/storage/service;1"]  
                .getService(Components.interfaces.mozIStorageService);  
            // Create the file if it does not exist
            var this._dbConn = storageService.openDatabase(file); 
        }
    };
};

// Builds a tipsy DB
create_tipsy_db = function() {
    var db = new _tipsyDbProto();
    return db;
};
