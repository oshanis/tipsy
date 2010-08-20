/**
* All the UI Interaction code goes here.
* refer to: https://developer.mozilla.org/en/Code_snippets/Sidebar if strange UI behavior is encountered
*/


//var sidebar = top.document.getElementById("sidebar");
            
refreshTable = function(){
    try{
    var visits = tipsy.db.getvisits();
    var website_history = document.getElementById("website_history");
    
    
    while (visits.executeStep()) {
    
        var row = document.createElement('listitem');
        
        var site_cell = document.createElement('listcell');
        site_cell.setAttribute('label', visits.row.site);
        row.appendChild(site_cell);

        var creator_cell = document.createElement('listcell');
        creator_cell.setAttribute('label',  visits.row.creator );
        row.appendChild(creator_cell);

        var username_cell = document.createElement('listcell');
        username_cell.setAttribute('label',  visits.row.username );
        row.appendChild(username_cell);

        var pageurl_cell = document.createElement('listcell');
        pageurl_cell.setAttribute('label',  visits.row.pageurl );
        row.appendChild(pageurl_cell);

        var datetime_cell = document.createElement('listcell');
        datetime_cell.setAttribute('label',  visits.row.datetime );
        row.appendChild(datetime_cell);

        website_history.appendChild(row);

    }
    }
    catch(e){
        alert(e);
    }
    
}

//sidebar.contentWindow.addEventListener( "DOMContentLoaded", refreshTable, false);
//prefwindow.addEventListener( "DOMContentLoaded", refreshTable, false);
  
/** Clears the tipsy history containing the sites visited by the user, and sites liked by the user**/
clearHistory = function(){
    //alert("clearHistory: Not Implemented!");
}

/** Tempoarary function to manully add data to the list**/
myAppendItem = function(){
	website_history.appendItem(testlabel, testvalue);
}

/** This function should validate the number of sites the user wishes to select through the lottery process
Validate for high numbers like 99 and for non numbers**/
function validateNumberOfSitesToPay(){
    //alert("validateNumberOfSitesToPay: Not Implemented!");
}


/**Once the user clicks on the disabled paypal account text box, this shoule be called, and it should verify with the user whether she really wants to change the PayPal account or not, and handle that event.**/
function changePayPalAccount(){
    //alert("changePayPalAccount: Not Implemented");
}

/**Run some randomized algo, and pick the winners**/
function runElection(){
    //alert("runElection: Not Implemented");
}

/**Validate for negative amounts. Also, may be currency convertions?*/
function validateWebWorth(){
    //alert("validateWebWorth: Not Implemented");
}

/**
* Validate the web worth field, the frequency of running the election (may be not required), and the PayPal account. Upon success call the relevant database update methods, otherwise notify the problem(s) to the user
**/
function updateInfo (){
   // alert("updateInfo: Not Implemented");
}

/**Validate the frequency of which the election is being run
@@ We might not really need this method!
**/
function validateFrequency(){
   // alert("validateFrequency: Not Implemented");
}
