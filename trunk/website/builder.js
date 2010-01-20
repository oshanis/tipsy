pick_paymethod = function() {
    method = "#paymethod-" + jQuery("#paymethod-choice").attr("value");
    jQuery(".paymethod").css("display", "none");
    jQuery(method).css("display", "block");
};


generate_html = function() {
    // TODO: do some field verification and error correction
};

jQuery(document).ready(function() {
    pick_paymethod();
    jQuery("#paymethod-choice").change(pick_paymethod);
    jQuery("#generate").click(generate_html);
});
