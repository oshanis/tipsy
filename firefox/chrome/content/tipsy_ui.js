/**
* All the UI Interaction code goes here.
* refer to: https://developer.mozilla.org/en/Code_snippets/Sidebar if strange UI behavior is encountered
*/


//var sidebar = top.document.getElementById("sidebar");
            
refreshTable = function(){
    
    var visits = tipsy.db.getvisits();
    //var document = sidebar.contentDocument;
    var website_history = document.getElementById("website_history");
    
    //Clear the contents of the table
    //@@TODO: this will be wasteful if there are millions of entries, and you would 
    //only need to add one entry to the table
    while(  website_history.hasChildNodes()){
        website_history.removeChild(website_history.firstChild);
    }
    //After flushing all the content, add the headers.
    var headers = document.createElement("listhead");
    headers.appendChild(document.createElement("listheader").appendChild(document.createTextNode("Web Site")));
    headers.appendChild(document.createElement("listheader").appendChild(document.createTextNode("Creator")));
    headers.appendChild(document.createElement("listheader").appendChild(document.createTextNode("Username")));
    headers.appendChild(document.createElement("listheader").appendChild(document.createTextNode("Page URL")));
    headers.appendChild(document.createElement("listheader").appendChild(document.createTextNode("Datetime")));
    
    /*var columns = document.createElement("listcols");
    for (var i=0; i<5; i++)
        columns.appendChild(document.createElement("listCol"));*/
    
    website_history.appendChild(headers);
    //website_history.appendChild(columns);
    
    
    while (visits.executeStep()) {
        var website_listitem = document.createElement("listitem");
        
        var website = document.createElement("listcell");
        website.appendChild(document.createTextNode(visits.row.site));
        var creator = document.createElement("listcell");
        creator.appendChild(document.createTextNode(visits.row.creator));
        var username = document.createElement("listcell");
        username.appendChild(document.createTextNode(visits.row.username));
        var pageurl = document.createElement("listcell");
        pageurl.appendChild(document.createTextNode(visits.row.pageurl));
        var datetime = document.createElement("listcell");
        datetime.appendChild(document.createTextNode(visits.row.datetime));
    
        try{
            website_listitem.appendChild(website);
            website_listitem.appendChild(creator);
            website_listitem.appendChild(username);
            website_listitem.appendChild(pageurl);
            website_listitem.appendChild(datetime);

            website_history.appendChild(website_listitem);

            document.appendChild(website_listitem);
        }
        catch(e){
            log("Tried to add " +visits.row.site + " , " + visits.row.creator +  " , " + 
                visits.row.username +  " , " + visits.row.pageurl +  " , " + visits.row.datetime +
                " in the UI. But encountered the following error: ");
            log(e);
            
        }
    }
    
}

sidebar.contentWindow.addEventListener( "DOMContentLoaded", refreshTable, false);
  
/** Clears the tipsy history containing the sites visited by the user, and sites liked by the user**/
clearHistory = function(){
    alert("clearHistory: Not Implemented!");
}

/** Tempoarary function to manully add data to the list**/
myAppendItem = function(){
	website_history.appendItem(testlabel, testvalue);
}

/** This function should validate the number of sites the user wishes to select through the lottery process
Validate for high numbers like 99 and for non numbers**/
function validateNumberOfSitesToPay(){
    alert("validateNumberOfSitesToPay: Not Implemented!");
}


/**Once the user clicks on the disabled paypal account text box, this shoule be called, and it should verify with the user whether she really wants to change the PayPal account or not, and handle that event.**/
function changePayPalAccount(){
    alert("changePayPalAccount: Not Implemented");
}

/**Run some randomized algo, and pick the winners**/
function runElection(){
    alert("runElection: Not Implemented");
}

/**Validate for negative amounts. Also, may be currency convertions?*/
function validateWebWorth(){
    alert("validateWebWorth: Not Implemented");
}

/**
* Validate the web worth field, the frequency of running the election (may be not required), and the PayPal account. Upon success call the relevant database update methods, otherwise notify the problem(s) to the user
**/
function updateInfo (){
    alert("updateInfo: Not Implemented");
}

/**Validate the frequency of which the election is being run
@@ We might not really need this method!
**/
function validateFrequency(){
    alert("validateFrequency: Not Implemented");
}
