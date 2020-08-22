var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    var ulke = document.getElementById(ulke);
};

$(document).ready(function () {

    $("#FormSave").validate({

        submitHandler: function (form) {
            $('#loading-screen').fadeIn();
            var id = getUrlParameter('id');
            if(id==null){
                var formData = {
                    "name": $("#ad").val(),
                    "surname": $("#soyAdi").val(),
                    "email": $("#email").val(),
                    "username": $("#username").val(),
                    "password": $("#password").val(),

                }

            }
            console.log(formData);
            $.ajax({
                type: "POST",
                contentType: "application/json",
                url: "/uyelik/save",
                data: JSON.stringify(formData),
                dataType: 'json',
                cache: false,
                timeout: 60000,

                success: function (data) {
                    $('#loading-screen').fadeOut('slow');
                    if(data.result){
                        console.log(data);
                        success_noti_custom(data.message);
                        setTimeout(function() {
                            window.location.replace("/login");
                        }, 2000);
                    }
                    else{
                        error_noti_yuk(data.message);
                        console.log(data.message+" sdfasdf")
                    }
                },
                error: function (e) {
                    console.log("ERROR : ", e);
                    $("#btn-login").prop("disabled", false);
                }
            });
            return false;
        }
    });

    $("#getWorkExperience").validate({

        submitHandler: function (form) {
            $('#loading-screen').fadeIn();
            var id = getUrlParameter('id');
            if(id==null){
                var formData = {
                    "firmsName": $("#firmAd").val(),
                    "position": $('#position option:selected').val(),
                    "district": $('#selectDistrict option:selected').val(),
                    "startDate": $("#autoclose-datepickerStart").val(),
                    "finishDate": $("#autoclose-datepickerFinish").val(),
                    "workStatus": $("#myCheck").val(),
                    "webSite": $("#webSite").val(),
                    "companySector": $('#companySector option:selected').val(),
                    "wayOfWork": $('#wayOfWork option:selected').val(),

                }

            }
            console.log(formData);
            $.ajax({
                type: "POST",
                contentType: "application/json",
                url: "/cv/deneyim",
                data: JSON.stringify(formData),
                dataType: 'json',
                cache: false,
                timeout: 60000,

                success: function (data) {
                    $('#loading-screen').fadeOut('slow');
                    if(data.result){
                        console.log(data);
                        success_noti_custom(data.message);
                        setTimeout(function() {
                            window.location.replace("/anasayfa");
                        }, 2000);
                    }
                    else{
                        error_noti_yuk(data.message);
                        console.log(data.message+" sdfasdf")
                    }
                },
                error: function (e) {
                    console.log("ERROR : ", e);
                    $("#btn-login").prop("disabled", false);
                }
            });
            return false;
        }
    });



});