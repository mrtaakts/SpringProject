
$(document).ready(function () {

    $("#FormSave").validate({

        submitHandler: function (form) {
            $('#loading-screen').fadeIn();
            var id = getUrlParameter('id');
            if(id==null){
                var formData = {
                    "title": $("#tittle").val(),
                    "country": $('#selectCountry option:selected').html(),
                    "city": $('#selectCity option:selected').html(),
                    "companySector": $('#selectCompanySector option:selected').html(),
                    "businessArea": $('#selectBusinessArea option:selected').html(),
                    "position": $('#selectPosition option:selected').html(),
                    "wayOfWork": $('#selectWayOfWork option:selected').html(),
                    "workExperience": $('#selectWorkExperience option:selected').html(),
                    "DriverLicence": $('#selectDriverLicense option:selected').html(),
                    "Information": $("#information").val()


                }

            }
            console.log(formData);
            $.ajax({
                type: "POST",
                contentType: "application/json",
                url: "/firma/save", // buraya kendi path'in gelecek
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