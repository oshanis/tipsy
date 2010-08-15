
var myExt_urlBarListener = {  
   QueryInterface: function(aIID)  
   {  
    if (aIID.equals(Components.interfaces.nsIWebProgressListener) ||  
        aIID.equals(Components.interfaces.nsISupportsWeakReference) ||  
        aIID.equals(Components.interfaces.nsISupports))  
      return this;  
    throw Components.results.NS_NOINTERFACE;  
   },  
   
   onLocationChange: function(aProgress, aRequest, aURI)  
   {  
     myExtension.processNewURL(aURI);  
   },  
   
   onStateChange: function(a, b, c, d) {},  
   onProgressChange: function(a, b, c, d, e, f) {},  
   onStatusChange: function(a, b, c, d) {},  
   onSecurityChange: function(a, b, c) {}  
 };

function rdfaStatus() {
	var redbutton = document.getElementById('vendor-button-active-rdfa');
	var greybutton = document.getElementById('vendor-button-no-rdfa');
	
	if (true) {
	// currently the above line of code always executes to true, I need to replace this so that it checks for rdfa on the page
    //if (doc instanceof HTMLDocument){ //rdfa found:
		redbutton.style.display = '';
		greybutton.style.display = 'none';
	}
	else {
		greybutton.style.display = '';
		redbutton.style.display = 'none';
	}
}; 
   
 var myExtension = {  
   oldURL: null,  
     
   init: function() {  
     // Listens for webpage loads  
     gBrowser.addProgressListener(myExt_urlBarListener,  
         Components.interfaces.nsIWebProgress.NOTIFY_LOCATION);  
   },  
     
   uninit: function() {  
     gBrowser.removeProgressListener(myExt_urlBarListener);  
   },
   
   processNewURL: function(aURI) {  
     if (aURI.spec == this.oldURL)  
       return;  
    
	 rdfaStatus();
	 
   },
  
 };  
   
 window.addEventListener("load", function() {myExtension.init()}, false);  
 window.addEventListener("unload", function() {myExtension.uninit()}, false);