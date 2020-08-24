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

        // $("#iletisimInput").hide();
    $('#hide').hide();

    $("#getFormCommunication").validate({

        submitHandler: function (form) {

            $('#loading-screen').fadeIn();

            var postData = $('#getFormCommunication').serializeJSON();

            console.log(postData);
            $.ajax({
                type: "POST",
                contentType: "application/json",
                url: "/cv/iletisim",
                data: postData,
                dataType: 'json',
                cache: false,
                timeout: 600000,

                success: function (data) {
                    $('#loading-screen').fadeOut('slow');
                    if (data.result) {
                        console.log(data);
                        success_noti_custom(data.message);
                        setTimeout(function () {
                            window.location.replace("/uyelik/olustur");
                        }, 2000);
                    } else {
                        error_noti_yuk(data.message)
                        console.log(data.message + " sdfasdf")
                    }

                },

                error: function (e) {

                    console.log("ERROR : ", e);
                    error_noti_yuk("Teknik Bir Sorun Oluştu Lütfen Bize Bildiriniz!")
                    $("#btn-login").prop("disabled", false);

                }
            });

            return false; // required to block normal submit since you used ajax
        }
    });

    $("#getuserPrivateInfo").validate({

        submitHandler: function (form) {

            $('#loading-screen').fadeIn();

            var postData = $('#getuserPrivateInfo').serializeJSON();

            console.log(postData);
            $.ajax({
                type: "POST",
                contentType: "application/json",
                url: "/cv/ozel",
                data: postData,
                dataType: 'json',
                cache: false,
                timeout: 600000,

                success: function (data) {
                    $('#loading-screen').fadeOut('slow');
                    if (data.result) {
                        console.log(data);
                        success_noti_custom(data.message);
                        setTimeout(function () {
                            window.location.replace("/uyelik/olustur");
                        }, 2000);
                    } else {
                        error_noti_yuk(data.message)
                        console.log(data.message + " sdfasdf")
                    }

                },

                error: function (e) {

                    console.log("ERROR : ", e);
                    error_noti_yuk("Teknik Bir Sorun Oluştu Lütfen Bize Bildiriniz!")
                    $("#btn-login").prop("disabled", false);

                }
            });

            return false; // required to block normal submit since you used ajax
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