
$(document).ready(function () {

    $("#JobPost").validate({

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

});