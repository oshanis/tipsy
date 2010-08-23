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
    
	 tipsy.switchVendorButtons('aEvent');
	 
   },
  
 };  
   
 window.addEventListener("load", function() {myExtension.init()}, false);  
 window.addEventListener("unload", function() {myExtension.uninit()}, false);
