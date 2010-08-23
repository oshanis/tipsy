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
        
		//alert('onPageLoad entered');
        tipsy.changeVendorButtonColor('grey');

        var doc = aEvent.originalTarget;
        if (doc instanceof HTMLDocument){

            //Try to parse the RDFa out of the HTML
            var rdf = $('#tipsy')
                 .rdf()
                 .prefix('pmt','http://tipsy.googlecode.com/svn/trunk/vocab/pmt#')
                 .prefix('rdfs','http://www.w3.org/2000/01/rdf-schema#')
                 .prefix('dc', 'http://purl.org/dc/elements/1.1/')
                 .where('?method pmt:username ?username')
                 .where('?doc pmt:hasPaymentMethod ?method')
                 .where('?creator dc:creator ?site')
                 .each(function(){
                    log('Parsed the following out of the rdfa\nMethod = '+ this.method.value + '\nSite = '+this.site.value+'\nCreator = '+this.creator.value+'\nUsername = '+this.username.value +"\nDoc = "+ this.doc.value);
                    tipsy.db.visit(this.site.value, this.creator.value, this.username.value, this.doc.value);
                    tipsy.changeVendorButtonColor('red');

                 });
                 
                
                }
        
    },
	
	/* //Tried to directly check for tab events using 'onTabChange' and 'onTabSitch' but these did not work
	    onTabChange: function(aEvent) {
        
		alert('onTabChange entered');
		tipsy.changeVendorButtonColor('grey');
		        if (doc instanceof HTMLDocument){

            //Try to parse the RDFa out of the HTML
            var rdf = $('#tipsy')
                 .rdf()
                 .prefix('pmt','http://tipsy.googlecode.com/svn/trunk/vocab/pmt#')
                 .prefix('rdfs','http://www.w3.org/2000/01/rdf-schema#')
                 .prefix('dc', 'http://purl.org/dc/elements/1.1/')
                 .where('?method pmt:username ?username')
                 .where('?doc pmt:hasPaymentMethod ?method')
                 .where('?creator dc:creator ?site')
                 .each(function(){
                    tipsy.changeVendorButtonColor('red');

                 });
                 
                
                }
        
    },*/
    
	//So now I am trying to call the function below from the tab_listener file once a progress event has be identified.
	switchVendorButtons: function (aEvent){
        alert('calling switchvendorbuttons');
			tipsy.changeVendorButtonColor('grey');
	        var doc = aEvent.originalTarget;
        if (doc instanceof HTMLDocument){

            //Try to parse the RDFa out of the HTML
            var rdf = $('#tipsy')
                 .rdf()
                 .prefix('pmt','http://tipsy.googlecode.com/svn/trunk/vocab/pmt#')
                 .prefix('rdfs','http://www.w3.org/2000/01/rdf-schema#')
                 .prefix('dc', 'http://purl.org/dc/elements/1.1/')
                 .where('?method pmt:username ?username')
                 .where('?doc pmt:hasPaymentMethod ?method')
                 .where('?creator dc:creator ?site')
                 .each(function(){
                    tipsy.changeVendorButtonColor('red');

                 });
                
                }
    },
	
	    changeVendorButtonColor: function (color){
        var redbutton = document.getElementById('vendor-button-active-rdfa');
        var greybutton = document.getElementById('vendor-button-no-rdfa');
        if (color == 'red'){
                greybutton.style.display = 'none';
            redbutton.style.display = '';
        }
        else{
            greybutton.style.display = '';
            redbutton.style.display = 'none';

        }
    },
	
};

//Create and open the tipsy db (Note: Moved this out of the init method because, we would like to have the db before the document content is loaded)
tipsy.db = create_tipsy_db();
tipsy.db.opendb();

window.addEventListener("load", tipsy.init , false);
