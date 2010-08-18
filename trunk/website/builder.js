pick_paymethod = function() {
    method = "#paymethod-" + jQuery("#paymethod-choice").attr("value");
    jQuery(".paymethod").css("display", "none");
    jQuery(method).css("display", "block");
};

urlize = function(url) {
    return url.replace(/\/+$/g, "") + "/";
}


generate_html = function() {
    // TODO: do some field verification and error correction
    organization_url = urlize(jQuery('#orgurl').val());
    website_url = urlize(jQuery('#weburl').val());
    payment_url = organization_url + "tipsypayment";
    var data = {
        organization_url : organization_url,
        website_url : website_url,
        organization_name : jQuery('#orgname').val(),
        payment_url : payment_url,
        paypal_email : jQuery('#paypal-username').val(),
    };
    var html = new EJS({url: 'template.ejs'}).render(data);
    jQuery('#copy-html').val(html);
    jQuery('#copy-area').css("display", "block");
    jQuery('#copy-area').focus();
};

jQuery(document).ready(function() {
    pick_paymethod();
    jQuery("#copy-area").css("display", "none");
    jQuery("#paymethod-choice").change(pick_paymethod);
    jQuery("#generate").click(generate_html);
});
