//function() {
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
            alert(doc.location);
            doc.test = 'yoooo';
            doc.tipsy = tipsy;
            doc.defaultView.test = 'yooo';
            alert(doc.test);
        },
    };
    window.addEventListener("load", tipsy_init.init , false);
//}();
