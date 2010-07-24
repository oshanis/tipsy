customerbuttonjs = {

1: function () {

  /*alert("No JavaScript functionaility has been implemented yet - Ahmad")	*/
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
