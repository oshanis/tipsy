var tipsy = {
    test : function() {
        alert('yay');
    },
    parseDomElement : function(selectorId){
    },
};

var tipsy_init = {
    init: function() {
        var appcontent = document.getElementById("appcontent");
        if(appcontent) {
            appcontent.addEventListener("DOMContentLoaded", tipsy_init.onPageLoad, true);
        }
    },
    onPageLoad: function(aEvent) {
        var doc = aEvent.originalTarget;
        /*alert(doc.location);
        doc.test = 'yoooo';
        doc.tipsy = tipsy;
        doc.defaultView.test = 'yooo';
        alert(doc.test);
        */
        if (doc instanceof HTMLDocument){
            //Try to parse the RDFa out of the HTML anyway
            var rdf = $('#tipsy')
                 .rdf()
                 .prefix('pmt','http://tipsy.googlecode.com/svn/trunk/vocab/pmt#')
                 .prefix('rdfs','http://www.w3.org/2000/01/rdf-schema#')
                 .prefix('dc', 'http://purl.org/dc/elements/1.1/')
                 .where('?method pmt:username ?username')
                 .where('?doc pmt:hasPaymentMethod ?method')
                 .where('?creator dc:creator ?site')
                 .each(function(){
                    //Populate the stuff in the sqlite db
                    //$('#list').append('Site = '+this.site.value+'<br/>Creator = '+this.creator.value+'<br/>Username = '+this.username.value);
                 });

        }
    },
};
window.addEventListener("load", tipsy_init.init , false);
