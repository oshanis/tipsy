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
            this._dbConn = storageService.openDatabase(file); 
            var cStmt = this._dbConn.createStatement("CREATE TABLE IF NOT EXISTS Sites (id INTEGER PRIMARY KEY, site TEXT UNIQUE, creator TEXT, username TEXT);");
            cStmt.execute();
            cStmt.reset();
            cStmt = this._dbConn.createStatement("CREATE TABLE IF NOT EXISTS Visits (siteid INTEGER, pageurl TEXT, datetime TEXT DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY (siteid) REFERENCES Sites (id));");
            cStmt.execute();
            cStmt.reset();
        }
    };
    
    this.visit = function(site, creator, username, page) {
        // look for site by id
        var findsite = this._dbConn.createStatement("SELECT id FROM Sites WHERE site = ?1");
        findsite.bindStringParameter(0, site);
        var id = 0;
        if (findsite.executeStep()) {
            id = findsite.row.id
        } else {
            var addsite = this._dbConn.createStatement("INSERT INTO Sites (site, creator, username) VALUES (?1, ?2, ?3);");
            addsite.bindStringParameter(0, site);
            addsite.bindStringParameter(1, creator);
            addsite.bindStringParameter(2, username);
            addsite.execute();
            id = this._dbConn.lastInsertRowID;
            addsite.reset();
        }
        findsite.reset();
        var addvisit = this._dbConn.createStatement("INSERT INTO Visits (siteid, pageurl) VALUES (?1, ?2);");
        addvisit.bindInt32Parameter(0, id);
        addvisit.bindStringParameter(1, page);
        addvisit.execute();
        addvisit.reset();
    };
    
    this.getvisits = function(daysback) {
        var visits = this._dbConn.createStatement("SELECT site.site, site.creator, site.username, visit.pageurl, visit.datetime FROM Sites AS site, Visits as visit where site.id = visit.siteid ORDER BY visit.datetime DESC");
        return visits;
        //while (visits.executeStep()) {
        //    console.log(visits.row.site + visits.row.creator + visits.row.username + visits.row.pageurl + visits.row.datetime);
        //}
    };
};

// Builds a tipsy DB
create_tipsy_db = function() {
    var db = new _tipsyDbProto();
    return db;
};
