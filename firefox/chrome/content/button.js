customerbuttonjs = {

1: function () {

  /*attempted to lift some data direct from the SQlite file but this did not work, thus commented out code below - Ahmad*/
  /*var statement = dbConn.createStatement("SELECT * FROM tipsy.sqlite");*/
  alert("No JavaScript functionaility has been implemented yet - Ahmad");
  
/*myWindow = window.open('','','resizable=yes,scrollbars=yes,width=100,height=100');
myWindow .document.body.innerHTML = "<div>hello world!!</div>";*/

}
}

vendorbuttonjs = {



/*
   // update the image and the label
   if( ) 
   {
      statusImage.src = "chrome://tipsy/skin/vendor-button-no-rdfa.png";
   }
   else
   {
      statusImage.src = "chrome://tipsy/skin/vendor-button-active-rdfa.png";
   }
*/
}


function open_webpage(url, event) {
   if (event.button == 0) {
   gBrowser.selectedTab = gBrowser.addTab(url);

   } else {
    window._content.document.location = url;
    window.content.focus();
   }
}

function simplealert () {
	alert("No JavaScript functionaility has been implemented yet - Ahmad");
}
