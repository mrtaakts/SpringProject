
$(document).ready(function () {
    $("#iban").keyup(function(e) {
        // Our regex
        // a-z => allow all lowercase alphabets
        // A-Z => allow all uppercase alphabets
        // 0-9 => allow all numbers
        // @ => allow @ symbol
        var regex = /^[0-9]*$/;
        // This is will test the value against the regex
        // Will return True if regex satisfied
        if (regex.test(this.value) !== true)
            //alert if not true
            alert("Fax Alanına Numerik Karakter Giriniz");
        // You can replace the invalid characters by:
        this.value = this.value.replace(/[^0-9]+/, '');
    });

    $("#faxa").keyup(function(e) {
        // Our regex
        // a-z => allow all lowercase alphabets
        // A-Z => allow all uppercase alphabets
        // 0-9 => allow all numbers
        // @ => allow @ symbol
        var regex = /^[0-9]*$/;
        // This is will test the value against the regex
        // Will return True if regex satisfied
        if (regex.test(this.value) !== true)
            //alert if not true
            alert("Fax Alanına Numerik Karakter Giriniz");
        // You can replace the invalid characters by:
        this.value = this.value.replace(/[^0-9]+/, '');
    });

    $("#hnum").keyup(function(e) {
        // Our regex
        // a-z => allow all lowercase alphabets
        // A-Z => allow all uppercase alphabets
        // 0-9 => allow all numbers
        // @ => allow @ symbol
        var regex = /^[0-9]*$/;
        // This is will test the value against the regex
        // Will return True if regex satisfied
        if (regex.test(this.value) !== true)
            //alert if not true
            alert("Hesap No Alanına Numerik Karakter Giriniz");
        // You can replace the invalid characters by:
        this.value = this.value.replace(/[^0-9]+/, '');
    });



    $("#fyet").keyup(function(e) {

        var regex = /^[a-zA-Z ğüşıöçĞÜŞİÖÇ]*$/;
        // This is will test the value against the regex
        // Will return True if regex satisfied
        if (regex.test(this.value) !== true)
            //alert if not true
            alert("Yetkili Alanına alfabetik Karakter Giriniz");

        // You can replace the invalid characters by:
        this.value = this.value.replace(/[^a-zA-Z ğüşıöçĞÜŞİÖÇ]+/, '');
    });
    /* $("#").keyup(function(e) {
        // Our regex
        // a-z => allow all lowercase alphabets
        // A-Z => allow all uppercase alphabets
        // 0-9 => allow all numbers
        // @ => allow @ symbol
        var regex = /^[0-9]*$/;
        // This is will test the value against the regex
        // Will return True if regex satisfied
        if (regex.test(this.value) !== true)
        //alert if not true
            alert("Tc Alanına Numerik Karakter Giriniz");
        // You can replace the invalid characters by:
        this.value = this.value.replace(/[^0-9]+/, '');
    }); */
    $("#telefon").keyup(function(e) {
        // Our regex
        // a-z => allow all lowercase alphabets
        // A-Z => allow all uppercase alphabets
        // 0-9 => allow all numbers
        // @ => allow @ symbol
        var regex = /^[0-9]*$/;
        // This is will test the value against the regex
        // Will return True if regex satisfied
        if (regex.test(this.value) !== true)
            //alert if not true
            alert("Telefon Alanına Numerik Karakter Giriniz");
        // You can replace the invalid characters by:
        this.value = this.value.replace(/[^0-9]+/, '');
    });
    $("#vnum").keyup(function(e) {
        // Our regex
        // a-z => allow all lowercase alphabets
        // A-Z => allow all uppercase alphabets
        // 0-9 => allow all numbers
        // @ => allow @ symbol
        var regex = /^[0-9]*$/;
        // This is will test the value against the regex
        // Will return True if regex satisfied
        if (regex.test(this.value) !== true)
            //alert if not true
            alert("Vergi Numarası Alanına Numerik Karakter Giriniz");
        // You can replace the invalid characters by:
        this.value = this.value.replace(/[^0-9]+/, '');
    });
    $("#telno").keyup(function(e) {
        // Our regex
        // a-z => allow all lowercase alphabets
        // A-Z => allow all uppercase alphabets
        // 0-9 => allow all numbers
        // @ => allow @ symbol
        var regex = /^[0-9]*$/;
        // This is will test the value against the regex
        // Will return True if regex satisfied
        if (regex.test(this.value) !== true)
            //alert if not true
            alert("Tc Alanına Numerik Karakter Giriniz");
        // You can replace the invalid characters by:
        this.value = this.value.replace(/[^0-9]+/, '');
    });



    $("#selectCity").change(function() {
        var cityId = this.value;
        console.log(cityId)
        $.ajax({
            url: "/getilceByIlId/"+cityId,
            type: "get",
            //data: {ulkeId: cityId},
            success: function (response) {

                $('#loading-screen').fadeOut('slow');
                $('#selectDistrict').find('option').remove().end().append('<option disabled selected> ----- İlçe Seçiniz ----- </option>').val('');

                var i;
                for (i = 0; i < response.length; ++i) {
                    $('#selectDistrict').append(new Option(response[i].ilce, response[i].id));
                }

                $("#selectDistrict").val($("#selectDistrict option:first").val());

            },
            error: function(jqXHR, textStatus, errorThrown) {

            }
        });
    });


    $("#FormSave").validate({

        submitHandler: function (form) {

            $('#loading-screen').fadeIn();

            var postData = $('#FormSave').serializeJSON();


            $.ajax({
                type: "POST",
                contentType: "application/json",
                url: "/uyelik/olustur",
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
})
