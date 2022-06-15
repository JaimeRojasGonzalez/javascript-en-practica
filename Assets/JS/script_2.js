$(document).ready(function () {

    $('body').on('click', 'button', function () {

        if ($(this).attr('id') === "btn-1") {
            document.getElementById("caja").style.backgroundColor = "#e53e3e";

        };
        if ($(this).attr('id') === "btn-2") {
            document.getElementById("caja").style.backgroundColor = "#dd6b20";
        };
        if ($(this).attr('id') === "btn-3") {
            document.getElementById("caja").style.backgroundColor = "#faf089";
        };
        if ($(this).attr('id') === "btn-4") {
            document.getElementById("caja").style.backgroundColor = "#48bb78";
        };
        if ($(this).attr('id') === "btn-5") {
            document.getElementById("caja").style.backgroundColor = "#81e6d9";
        };
        if ($(this).attr('id') === "btn-6") {
            document.getElementById("caja").style.backgroundColor = "#d53f8c";
        };
    });
});