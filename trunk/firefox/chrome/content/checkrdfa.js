
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
		redbutton.style.display = 'none';
		greybutton.style.display = '';
			
	/*Another attempt to move the r-buttons before the url bar, based on another add-on googlebuttons, however this also does not work
			try {
				var firefoxnav = document.getElementById("nav-bar");
				var curSet = firefoxnav.currentSet;
				if (curSet.indexOf("vendor-button-active-rdfa") == -1)
				{
				var set;
				// place r-button before the urlbar
				if (curSet.indexOf("urlbar-container") != -1)
					set = curSet.replace(/urlbar-container/, "vendor-button-active-rdfa,urlbar-container");
				else  // at the end
					set = curSet + ",vendor-button-active-rdfa";
				firefoxnav.setAttribute("currentset", set);
				firefoxnav.currentSet = set;
				document.persist("nav-bar", "currentset");
				// If you don't do the following call, funny things happen
				try {
					BrowserToolboxCustomizeDone(true);
				}
					catch (e) { alert("Error on automatic adding (inner try):\n" + e.name + ", " + e.message); }
				}
			}
			catch(e) { alert("Error on automatic adding:\n" + e.name + ", " + e.message); }
	*/
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