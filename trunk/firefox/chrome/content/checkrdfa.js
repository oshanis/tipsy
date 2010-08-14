/*
//Have to set the correct context for Jquery to pick things up
jQuery.noConflict();
$ = function(selector,context){ return new jQuery.fn.init(selector,context||window.content.document); };
$.fn = $.prototype = jQuery.fn;

var tipsy = {

    db: null,

    init: function() {
        var appcontent = top.document.getElementById("appcontent");
        if(appcontent) {
            appcontent.addEventListener("DOMContentLoaded", tipsy.onPageLoad, true);
        }
    },
    onPageLoad: function(aEvent) {
        var doc = aEvent.originalTarget;
        if ((doc instanceof HTMLDocument) && (rdf = $('#tipsy'))){
            //Try to parse the RDFa out of the HTML
			
		}
        
    },
    
};
*/

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

function switchbuttons() {
	var redbutton = document.getElementById('vendor-button-active-rdfa');
	var greybutton = document.getElementById('vendor-button-no-rdfa');
	
	if ( redbutton.style.display != 'none' ) {
		greybutton.style.display = '';
		redbutton.style.display = 'none';
	}
	else {
		redbutton.style.display = '';
		greybutton.style.display = 'none';
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
       
     // need to add code to check for RDF here
	 
	 switchbuttons();
	 
   },
  
   
 };  
   
 window.addEventListener("load", function() {myExtension.init()}, false);  
 window.addEventListener("unload", function() {myExtension.uninit()}, false);