customerbuttonjs = {

1: function () {

  /*attempted to lift some data direct from the SQlite file but this did not work, thus commented out code below - Ahmad*/
  /*var statement = dbConn.createStatement("SELECT * FROM tipsy.sqlite");*/
  alert("No JavaScript functionaility has been implemented yet - Ahmad")
  },

}

vendorbuttonjs = {

1: function () {
  alert("No JavaScript functionaility has been implemented yet - Ahmad")	
  },

}

function open_webpage(url, event) {
   if (event.button == 0) {
   gBrowser.selectedTab = gBrowser.addTab(url);

   } else {
    window._content.document.location = url;
    window.content.focus();
   }
}
