$(document).ready(function () {
    // SITEBAR MENU
    $("#dishNETWORK").click(function () {
        $(".dishNETWORK").slideToggle("slow");
    });
    $("#adminUSER").click(function () {
        $(".adminUSER").slideToggle("slow");
    });
    $("#billerUSER").click(function () {
        $(".billerUSER").slideToggle("slow");
    });
    $("#reportNETWORK").click(function () {
        $(".reportNETWORK").slideToggle("slow");
    });
    $("#newRecord").click(function () {
        $(".newRecord").slideToggle("slow");
    });
    $(".responciveIcon").click(function () {
        $(".profile").toggleClass("profile-block");
        $("#siteBarMenu").toggleClass("display-block");
        $("#contentBody").toggleClass("content-top");
    });
    //Today Data show

    $("#toDAY").on('click', function () {
        $("#moNTH").removeClass("listactive");
        $("#daTE").removeClass("listactive");
        $("#toTAL").removeClass("listactive");
        $(this).addClass('listactive');
        $("#todayBiller").addClass("activedetails");
        $("#monthBiller").removeClass("activedetails");
        $("#dateBiller").removeClass("activedetails");
        $("#totalBiller").removeClass("activedetails");
    });
    $("#moNTH").on('click', function () {
        $("#toDAY").removeClass("listactive");
        $("#daTE").removeClass("listactive");
        $("#toTAL").removeClass("listactive");
        $(this).addClass('listactive');
        $("#todayBiller").removeClass("activedetails");
        $("#monthBiller").addClass("activedetails");
        $("#dateBiller").removeClass("activedetails");
        $("#totalBiller").removeClass("activedetails");
    });
    $("#daTE").on('click', function () {
        $("#toDAY").removeClass("listactive");
        $("#moNTH").removeClass("listactive");
        $("#toTAL").removeClass("listactive");
        $(this).addClass('listactive');
        $("#todayBiller").removeClass("activedetails");
        $("#monthBiller").removeClass("activedetails");
        $("#dateBiller").addClass("activedetails");
        $("#totalBiller").removeClass("activedetails");
    });
    $("#toTAL").on('click', function () {
        $("#toDAY").removeClass("listactive");
        $("#moNTH").removeClass("listactive");
        $("#daTE").removeClass("listactive");
        $(this).addClass('listactive');
        $("#todayBiller").removeClass("activedetails");
        $("#monthBiller").removeClass("activedetails");
        $("#dateBiller").removeClass("activedetails");
        $("#totalBiller").addClass("activedetails");
    });
    // ADMIN DEBIT AND CREADIT PAGE
    $("#adminToday").on('click', function () {
        $("#adMonth").removeClass("listactive");
        $("#tkTotal").removeClass("listactive");
        $(this).addClass('listactive');
        $("#totalToday").addClass("activedetails");
        $("#adminMonth").removeClass("activedetails");
        $("#adminTotal").removeClass("activedetails");
    });
    $("#adMonth").on('click', function () {
        $("#adminToday").removeClass("listactive");
        $("#tkTotal").removeClass("listactive");
        $(this).addClass('listactive');
        $("#totalToday").removeClass("activedetails");
        $("#adminMonth").addClass("activedetails");
        $("#adminTotal").removeClass("activedetails");
    });
    $("#tkTotal").on('click', function () {
        $("#adminToday").removeClass("listactive");
        $("#adMonth").removeClass("listactive");
        $(this).addClass('listactive');
        $("#totalToday").removeClass("activedetails");
        $("#adminMonth").removeClass("activedetails");
        $("#adminTotal").addClass("activedetails");
    });


});
