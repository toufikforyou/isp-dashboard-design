// POPUP MASSAGE IN ALL PAGE
function successalert(text) {
    $("body").prepend(`<div class="popup-success">` + text + `</div>`);
    setTimeout(function () {
        $(".popup-success").remove();
    }, 5000);
}

function erroralert(text) {
    $("body").prepend(`<div class="popup-error">` + text + `</div>`);
    setTimeout(function () {
        $(".popup-error").remove();
    }, 5000);
}

// ADMIN UPDATE FUNCTION IN ADMIN PAGE
function adminUpdate() {
    const fullName = $("#fullName").val().trim();
    const phoneNumber = $("#phoneNumber").val().trim();

    if (fullName === '') {
        $("#fullName").focus();
        error($("#fullName"), 'আপনার নাম লিখুন।');
    } else if (phoneNumber === '') {
        success($("#fullName"));
        $("#phoneNumber").focus();
        error($("#phoneNumber"), 'মোবাইল নাম্বার লিখুন।');
    } else if (!bdphone(phoneNumber)) {
        success($("#fullName"));
        $("#phoneNumber").focus();
        error($("#phoneNumber"), 'মোবাইল নাম্বার সঠিক নয়।');
    } else {
        success($("#fullName"));
        success($("#fatherName"));
        success($("#motherName"));
        success($("#phoneNumber"));
        success($("#account"));

        //ajax code update user admin account
        //alert("success");
    }
}
// BILLER UPDATE FUNCTION IN BILLER PAGE

function billerUpdate() {
    const fullName = $("#fullName").val().trim();
    const phoneNumber = $("#phoneNumber").val().trim();

    if (fullName === '') {
        $("#fullName").focus();

        error($("#fullName"), "আপনার পুরো নাম লিখুন।")
    } else if (phoneNumber === '') {
        success($("#fullName"));
        $("#phoneNumber").focus();

        error($("#phoneNumber"), "আপনার মোবাইল নাম্বার লিখুন।")
    } else if (!bdphone(phoneNumber)) {
        success($("#fullName"));
        $("#phoneNumber").focus();

        error($("#phoneNumber"), "মোবাইল নাম্বার সঠিক নয়।")
    } else {
        success($("#fullName"));
        success($("#fatherName"));
        success($("#motherName"));
        success($("#phoneNumber"));
        success($("#account"));

        //ajax code
        //alert("success");
    }
}

// PASSWORD CHANGE FUNCTION IN PASSWORD CHANGE PAGE

function changepasscode() {
    const oldPassword = $("#oldPassword").val().trim();
    const newPassword = $("#newPassword").val().trim();
    const cfmPassword = $("#cfmPassword").val().trim();

    if (oldPassword === '') {
        $("#oldPassword").focus();

        error($("#oldPassword"), 'পুতারন পাসওয়ার্ড লিখুন।');
    } else if (newPassword === '') {
        success($("#oldPassword"));
        $("#newPassword").focus();

        error($("#newPassword"), 'পাসওয়ার্ড তৈরি করুন।');
    } else if (newPassword.length < 8) {
        success($("#oldPassword"));
        $("#newPassword").focus();

        error($("#newPassword"), 'পাসওয়ার্ড কমপক্ষে ৮ টি হতে হবে।');
    } else if (cfmPassword === '') {
        success($("#newPassword"));
        $("#cfmPassword").focus();

        error($("#cfmPassword"), 'কনফার্ম পাসওয়ার্ড লিখুন।');
    } else if (newPassword !== cfmPassword) {
        success($("#newPassword"));
        $("#cfmPassword").focus();

        error($("#cfmPassword"), 'কনফার্ম পাসওয়ার্ড ভুল');
    } else {
        success($("#oldPassword"));
        success($("#newPassword"));
        success($("#cfmPassword"));
        // Ajax Code
        //alert("success");
    }
}

// CUSTOMER UPDATE FUNCTION IN CUSTOMER DISH PAGE

function updateCustumer() {
    const fullName = $("#fullName").val().trim();
    const fatherName = $("#fatherName").val().trim();
    const mobail = $("#mobail").val().trim();
    const village = $("#village").val();

    if (fullName === '') {
        $("#fullName").focus();

        error($("#fullName"), 'কাস্টমার নাম ফাঁকা রাখা যাবে না।');

    } else if (fatherName === '') {
        success($("#fullName"));
        $("#fatherName").focus();

        error($("#fatherName"), 'কাস্টমারের পিতার নাম লিখুন।');
    } else if (mobail === '') {
        success($("#fatherName"));
        $("#mobail").focus();

        error($("#mobail"), 'মোবাইল নাম্বার ফাঁকা রাখা যাবে না।');
    } else if (!bdphone(mobail)) {
        success($("#fatherName"));
        $("#mobail").focus();

        error($("#mobail"), 'মোবাইল নাম্বারটি সঠিক নয়।');
    } else if (village === null) {
        success($("#mobail"));

        error($("#village"), 'গ্রাম নির্বাচন করুন।');
    } else {
        success($("#fullName"));
        success($("#fatherName"));
        success($("#motherName"));
        success($("#mobail"));
        success($("#nidNumber"));
        success($("#village"));
        // AJAX CODE
    }
}

// LINE STATUS UPDATE FUNCTION IN CUSTOMER DISH PAGE

function lineStatus() {
    const lineActive = $("#active").attr('id');
    const lineInActive = $("#inActive").attr('id');
    if (lineActive === 'active') {
        //ajax code 

        $("#active").html('<i class="fas fa-times"></i> লাইন বন্ধ আছে ');
        $("#active").attr('class', 'btn btn-danger');
        $("#active").attr('id', 'inActive');
        $("#lineStatus").trigger('reset');
    }
    if (lineInActive === 'inActive') {
        //ajax code

        $("#inActive").html('<i class="fas fa-check"></i> লাইন চালু আছে');
        $("#inActive").attr('class', 'btn btn-success');
        $("#inActive").attr('id', 'active');
        $("#lineStatus").trigger('reset');
    }
}

// LOGIN STATUS CHACK FUNCTION IN LOGIN PAGE

function logIN() {
    const user = $("#username").val().trim();
    const pass = $("#password").val().trim();

    if (user === '') {
        $("#username").focus();

        error($("#username"), 'ইউজার আইডি ফাঁকা রাখা যাবে না।');
    } else if (pass === '') {
        $("#password").focus();

        success($("#username"));

        error($("#password"), 'পাসওয়ার্ড ফাঁকা রাখা যাবে না।');
    } else {
        success($("#username"));
        success($("#password"));

        //ajax code
        alert("That Good");

    }
}

// ADMIN REGISTRATION FUNCTION IN NEW ADMIN PAGE

function adminRegister() {
    const fullName = $("#fullName").val().trim();
    const mobail = $("#mobail").val().trim();
    const password = $("#password").val().trim();
    const cfmPassword = $("#cfmPassword").val().trim();

    if (fullName === '') {
        $("#fullName").focus();

        error($("#fullName"), 'নাম ফাঁকা রাখা যাবে না।');

    } else if (mobail === '') {
        success($("#fullName"));
        $("#mobail").focus();

        error($("#mobail"), 'মোবাইল নাম্বার ফাঁকা রাখা যাবে না।');
    } else if (!bdphone(mobail)) {
        success($("#fullName"));
        $("#mobail").focus();

        error($("#mobail"), 'মোবাইল নাম্বারটি সঠিক নয়।');
    } else if (password === '') {
        success($("#mobail"));
        $("#password").focus();

        error($("#password"), 'পাসওয়ার্ড ফাঁকা রাখা যাবে না।');
    } else if (!(password.length > 7)) {
        success($("#mobail"));
        $("#password").focus();

        error($("#password"), 'পাসওয়ার্ড কমপক্ষে ৮টি হতে হবে।');

    } else if (cfmPassword === '') {
        success($("#password"));
        $("#cfmPassword").focus();

        error($("#cfmPassword"), 'পাসওয়ার্ড কনফর্ম করুন।');
    } else if (password !== cfmPassword) {
        success($("#password"));
        $("#cfmPassword").focus();

        error($("#cfmPassword"), 'পাসওয়ার্ড কনফর্ম সঠিক নয়।');
    } else {
        success($("#fullName"));
        success($("#mobail"));
        success($("#password"));
        success($("#cfmPassword"));
        //ajax code
        //alert("success");
    }
}

// ADMIN UPDATE FUNCTION IN EDIT ACCOUNT PAGE

function updateAccount() {
    const fullName = $("#fullName").val().trim();
    const fatherName = $("#fatherName").val().trim();
    const motherName = $("#motherName").val().trim();
    const dateofbirth = $("#dateofbirth").val().trim();
    const village = $("#village").val();

    if (fullName === '') {

        error($("#fullName"), 'আপনার নাম লিখুন।');
    } else if (fatherName === '') {
        success($("#fullName"));
        $("#fatherName").focus();

        error($("#fatherName"), 'পিতার নাম লিখুন।');
    } else if (motherName === '') {
        success($("#fatherName"));
        $("#motherName").focus();

        error($("#motherName"), 'মাতার নাম লিখুন।');
    } else if (dateofbirth === '') {
        success($("#motherName"));

        error($("#dateofbirth"), 'জন্ম তারিখ নির্বাচন করুন।');
    } else if (village === null) {

        success($("#dateofbirth"));

        error($("#village"), 'গ্রাম নির্বাচন করুন।');
    } else {
        success($("#fullName"));
        success($("#fatherName"));
        success($("#motherName"));
        success($("#dateofbirth"));
        success($("#village"));
    }
}
// BELLER REGISTRATION FUNCTION IN NEW BELLER PAGE

function billerRegister() {
    const fullName = $("#fullName").val().trim();
    const mobail = $("#mobail").val().trim();
    const password = $("#password").val().trim();
    const cfmPassword = $("#cfmPassword").val().trim();

    if (fullName === '') {
        $("#fullName").focus();

        error($("#fullName"), 'বিলারের নাম ফাঁকা রাখা যাবে না।');

    } else if (mobail === '') {
        success($("#fullName"));
        $("#mobail").focus();

        error($("#mobail"), 'মোবাইল নাম্বার ফাঁকা রাখা যাবে না।');
    } else if (!bdphone(mobail)) {
        success($("#fullName"));
        $("#mobail").focus();

        error($("#mobail"), 'মোবাইল নাম্বারটি সঠিক নয়।');
    } else if (password === '') {
        success($("#mobail"));
        $("#password").focus();

        error($("#password"), 'পাসওয়ার্ড ফাঁকা রাখা যাবে না।');
    } else if (!(password.length > 7)) {
        success($("#mobail"));
        $("#password").focus();

        error($("#password"), 'পাসওয়ার্ড কমপক্ষে ৮টি হতে হবে।');

    } else if (cfmPassword === '') {
        success($("#password"));
        $("#cfmPassword").focus();

        error($("#cfmPassword"), 'পাসওয়ার্ড কনফর্ম করুন।');
    } else if (password !== cfmPassword) {
        success($("#password"));
        $("#cfmPassword").focus();

        error($("#cfmPassword"), 'পাসওয়ার্ড কনফর্ম সঠিক নয়।');
    } else {
        success($("#fullName"));
        success($("#mobail"));
        success($("#password"));
        success($("#cfmPassword"));
        //ajax code
        //alert('success');
    }
}

// CUSTOMER REGISTRATION FUNCTION IN NEW CUSTOMER PAGE

function newCustumer() {
    const fullName = $("#fullName").val().trim();
    const fatherName = $("#fatherName").val().trim();
    const mobail = $("#mobail").val().trim();
    const village = $("#village").val();

    if (fullName === '') {
        $("#fullName").focus();

        error($("#fullName"), 'কাস্টমার নাম ফাঁকা রাখা যাবে না।');

    } else if (fatherName === '') {
        success($("#fullName"));
        $("#fatherName").focus();

        error($("#fatherName"), 'কাস্টমারের পিতার নাম লিখুন।');
    } else if (mobail === '') {
        success($("#fatherName"));
        $("#mobail").focus();

        error($("#mobail"), 'মোবাইল নাম্বার ফাঁকা রাখা যাবে না।');
    } else if (!bdphone(mobail)) {
        success($("#fatherName"));
        $("#mobail").focus();

        error($("#mobail"), 'মোবাইল নাম্বারটি সঠিক নয়।');
    } else if (village === null) {
        success($("#mobail"));
        $("#nidNumber").focus();

        error($("#village"), 'গ্রাম নির্বচন করুন।');
    }
    else {
        success($("#fullName"));
        success($("#fatherName"));
        success($("#mobail"));
        success($("#nidNumber"));
        success($("#village"));
        // AJAX CODE
        //alert('success');
    }
}

// VILLAGE REGISTRATION FUNCTION IN NEW RECORD PAGE

function villageRegistration() {
    const divisions = $("#divisions").val();
    const district = $("#distr").val();
    const upzila = $("#polic_sta").val();
    const union = $("#union_list").val();
    const village = $("#village").val().trim();

    if (divisions === null) {

        error($("#divisions"), 'বিভাগ নির্বাচন করুন।');

    } else if (district === null) {

        success($("#divisions"));

        error($("#distr"), 'জিলা নির্বাচন করুন।');

    } else if (upzila === null) {
        success($("#distr"));

        error($("#polic_sta"), 'উপজেলা নির্বাচন করুন।');
    } else if (union === null) {
        success($("#polic_sta"));

        error($("#union_list"), 'ইউনিয়ন নির্বাচন করুন।');

    } else if (village === '') {
        $("#village").focus();
        success($("#union_list"));

        error($("#village"), 'গ্রামের নাম লিখুন।');
    } else {
        success($("#divisions"));
        success($("#distr"));
        success($("#polic_sta"));
        success($("#union_list"));
        success($("#village"));
        success($("#post_code"));
        //ajax code
    }
}

// BILL UPDATE FUNCTION IN NEW RECORD PAGE

function billUpdate() {
    const billFixed = $("#billFixed").val().trim();

    if (billFixed === '') {
        $("#billFixed").focus();
        error($("#billFixed"), 'টাকার পরিমান লিখুন।');
    } else if (billFixed < 50) {
        $("#billFixed").focus();
        error($("#billFixed"), 'টাকার পরিমান সর্বনিম্ন ৫০ হতে হবে।');
    } else {
        success($("#billFixed"));
        // ajax code
    }
}

// NEW REPORT FUNCTION IN NEW REPORT PAGE

function newReport() {
    const fullName = $("#fullName").val().trim();
    const mobail = $("#mobail").val().trim();
    const village = $("#village").val();
    const report = $("#report").val();

    if (fullName === '') {
        $("#fullName").focus();

        error($("#fullName"), 'অভিযোগকারীর নাম লিখুন।');

    } else if (mobail === '') {
        success($("#fullName"));
        $("#mobail").focus();

        error($("#mobail"), 'মোবাইল নাম্বার ফাঁকা রাখা যাবে না।');
    } else if (!bdphone(mobail)) {
        success($("#fullName"));
        $("#mobail").focus();

        error($("#mobail"), 'মোবাইল নাম্বারটি সঠিক নয়।');
    } else if (village === null) {
        $("#report").focus();
        success($("#mobail"));

        error($("#village"), 'গ্রাম নির্বাচন করুন।');
    } else if (report === '') {
        success($("#village"));

        error($("#report"), 'অভিযোগ লিখুন');

    } else {
        success($("#fullName"));
        success($("#mobail"));
        success($("#village"));
        success($("#report"));
        //ajax code
    }
}

// FIND CUSTOMER FUNCTION IN PAYMENT DISH PAGE

function findCustomerBill() {
    const userID = $("#userID").val().trim();

    if (userID === '') {
        $("#userID").focus();

        error($("#userID"), 'মোবাইল নাম্বার লিখুন।');
    } else {
        success($("#userID"));

        //ajax
    }
}

// BILL PAYMENT CUSTOMER FUNCTION IN PAYMENT DISH PAGE

function paymentBill() {
    $("#money").focus();
    const money = $("#money").val().trim();
    if (money === '') {
        $("#money").focus();

        error($("#money"), 'টাকার পরিমান লিখুন');
    } else {
        success($("#money"));
        //ajax
    }
}

// VILLAGE UPDATE FUNCTION IN RECORD PAGE

function updateVillage() {
    const divisions = $("#divisions").val();
    const district = $("#distr").val();
    const upzila = $("#polic_sta").val();
    const union = $("#union_list").val();
    const village = $("#village").val().trim();

    if (divisions === null) {

        error($("#divisions"), 'বিভাগ নির্বাচন করুন।');

    } else if (district === null) {

        success($("#divisions"));

        error($("#distr"), 'জিলা নির্বাচন করুন।');

    } else if (upzila === null) {
        success($("#distr"));

        error($("#polic_sta"), 'উপজেলা নির্বাচন করুন।');
    } else if (union === null) {
        success($("#polic_sta"));

        error($("#union_list"), 'ইউনিয়ন নির্বাচন করুন।');

    } else if (village === '') {
        $("#village").focus();
        success($("#union_list"));

        error($("#village"), 'গ্রামের নাম লিখুন।');
    } else {
        success($("#divisions"));
        success($("#distr"));
        success($("#polic_sta"));
        success($("#union_list"));
        success($("#village"));
        //ajax code
    }
}






//==========THIS IS MASSAGE AND NUMBER VALIDATION CODE==========//
//==========THIS IS MASSAGE AND NUMBER VALIDATION CODE==========//
//==========THIS IS MASSAGE AND NUMBER VALIDATION CODE==========//
//==========THIS IS MASSAGE AND NUMBER VALIDATION CODE==========//


// LOGIN PAGE FUNCTION JAVASCRIPT CODE //
function success(success) {
    success.parent().removeClass("error");
    success.parent().addClass("form-style success");
    success.parent().children('small').text('');
}
function error(error, msg) {
    const formStyle = error.parent();
    const small = formStyle.children('small');
    small.text(msg);
    formStyle.removeClass("success");
    formStyle.addClass("form-style error");
}

// PHONE NUMBER VALIDATION JAVASCRIPT CODE //
function bdphone(mobail) {
    const number = /^(\+88|88)?01[3-9]\d{8}$/g;
    if (mobail.match(number)) {
        return true;
    } else {
        return false;
    }

}
// PHONE NUMBER VALIDATION JAVASCRIPT //
