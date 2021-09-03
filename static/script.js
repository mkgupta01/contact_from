$(document).ready(function () {
    $("#contactus-submit").click(function () {
        var r = $('<i class="fa fa-spinner fa-spin"></i>');
        $("#contactus-submit").html(r);
        $("#contactus-submit").append(" Sending...");
        $("#contactus-submit").attr("disabled", true);


        setTimeout(function () {
            $("#contactus-submit").attr("disabled", false);
            $("#contactus-submit").html('Send');

        }, 3000);


    });
});