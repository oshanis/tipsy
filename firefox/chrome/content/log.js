// Fail gracefully if Firebug's not installed
try {
    console.log('Firebug console found.');
} catch(e) { 
    console = { 
        log: function() {} 
    };
}

