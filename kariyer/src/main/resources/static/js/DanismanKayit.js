
$(document).ready(function () {
    $("#namef").keyup(function(e) {
        var regex = /^[a-zA-Z ğüşıöçĞÜŞİÖÇ]*$/;
        if (regex.test(this.value) !== true)
        date_msg("Dikkat!", "Ad Alanına alfabetik Karakter Giriniz")
        this.value = this.value.replace(/[^a-zA-Z ğüşıöçĞÜŞİÖÇ]+/, '');
    });
    $("#input-2").keyup(function(e) {
        var regex = /^[a-zA-Z ğüşıöçĞÜŞİÖÇ]*$/;
        if (regex.test(this.value) !== true)
            date_msg("Dikkat!", "Soyad Alanına alfabetik Karakter Giriniz")
        this.value = this.value.replace(/[^a-zA-Z ğüşıöçĞÜŞİÖÇ]+/, '');
    });
    $("#input-6").keyup(function(e) {
        var regex = /^[0-9]*$/;
        if (regex.test(this.value) !== true)
            date_msg("Dikkat!", "Telefon Alanına Numerik Karakter Giriniz")
        this.value = this.value.replace(/[^0-9]+/, '');
    });
    $("#input-4").keyup(function(e) {
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
            date_msg("Dikkat!", "Telefon Alanına Numerik Karakter Giriniz")
        // You can replace the invalid characters by:
        this.value = this.value.replace(/[^0-9]+/, '');
    });
    $("#input-18").keyup(function(e) {
        var regex = /^[0-9]*$/;
        if (regex.test(this.value) !== true)
            date_msg("Dikkat!", "IBAN Alanına Numerik Karakter Giriniz")
        this.value = this.value.replace(/[^0-9]+/, '');
    });
    $("#input-11").keyup(function(e) {
        var regex = /^[0-9]*$/;
        if (regex.test(this.value) !== true)
        date_msg("Dikkat!", "Sertifika No Alanına Numerik Karakter Giriniz")
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



    jQuery.validator.addMethod('ad_rule', function (value, element) {
        if (/^[a-zA-ZğüşıöçĞÜŞİÖÇ,]+(\s{0,1}[a-zA-Z-ğüşıöçĞÜŞİÖÇ, ])*$/.test(value)) {
            return true;
        } else {
            return false;
        };
    });
    jQuery.validator.addMethod('numerik', function (value, element) {
        if (/^[0-9]*$/.test(value)) {
            return true;
        } else {
            return false;
        };
    });

    $("#DanismanKayit").validate({
        "ignore": ":hidden",
        "rules": {
            adi: {
                "required": true,
                "minlength": 2,
                "maxlength": 25,
                "ad_rule":true,
            },
            soyAdi: {
                "required": true,
                "minlength": 2,
                "maxlength": 25,
                "ad_rule":true,
            },
            sertifikaNo: {
                "required": true,
                "minlength": 1,
                "maxlength": 5,

            },
            email: {
                "required": true,
                "minlength": 7,
                "maxlength": 50,
                "email": true,

            },
            telefon: {
                "required": true,
                "minlength": 10,
                "maxlength": 11,
                "numerik":true,
            },

            iban: {
                "required": true,
                "minlength": 24,
                "maxlength": 24,
                "numerik":true,
            },
            password: {
                "required": true,
                "minlength": 5,
                "maxlength": 20,
            },
            password2: {
                "required": true,
                "minlength": 5,
                "maxlength": 20,
            },

            il: {
                "required": true,

            },
            ilce: {
                "required": true,

            },
            firmaTelefon: {

                "minlength": 11,
                "maxlength": 11,
                "numerik":true
            },
            adres: {

                "minlength": 2,
                "maxlength": 250,

            },
            firmaAdi: {
                "minlength": 2,
                "maxlength": 40,

            },

        },
        "messages": {

            adi: {
                "required": "Ad Alanını Doldurunuz",
                "minlength": "En Az 2 Karakter",
                "maxlength": "En Çok 25 Karakter Girilebilir",
                "ad_rule":"Sadece Alfabetik Karakter Giriniz",
            },
            soyAdi: {
                "required": "Soyad Alanını Doldurunuz",
                "minlength": "En Az 2 Karakter",
                "maxlength": "En Çok 25 Karakter Girilebilir",
                "ad_rule":"Sadece Alfabetik Karakter Giriniz",
            },
            email: {
                "required": "E-mail Alanını Doldurunuz",
                "minlength": "En Az 7 Karakter Girilebilir",
                "maxlength": "En Çok 50 Karakter Girilebilir",
                "email": "Lütfen Geçerli Bir E-Mail Adresi Giriniz",
            },
            sertifikaNo: {
                "required": "Sertİfİka Alanını Doldurunuz",
                "minlength": "En az 1 Hane Gerekli",
                "maxLength": "En Çok 5 hane girilebilir",

            },
            iban: {
                "required": "Komisyon Ödemesi İçin IBAN Alanını Doldurmalısınız",
                "minlength": "En az 24 Hane Gerekli",
                "maxLength": "En Çok 24 hane girilebilir",

            },
            telefon: {
                "required": "İletişim Numarası Alanını Doldurunuz",
                "minlength": "Min. 10 Hane Girilebilir",
                "maxlength": "Max. 11 Hane Girilebilir",
                "numerik": "Sadece Rakam Girilebilir",
            },
            firmaTelefon: {

                "minlength": "Min. 11 Hane Girilebilir",
                "maxlength": "Max. 11 Hane Girilebilir",
                "numerik": "Sadece Rakam Girilebilir",
            },
            adres: {

                "minlength": "Min. 2 Hane Girilebilir",
                "maxlength": "Max. 250 Hane Girilebilir",


            },
            il: {
                "required": "Lütfen Bir İl Seçiniz",

            },
            ilce: {
                "required": "Lütfen Bir İlçe Seçiniz",

            },
            password: {
                "required": "Şifre Alanı Zorunludur",
                "minlength": "Min. 5 Hane Girilebilir",
                "maxlength": "Max. 20 Hane Girilebilir",
            },
            password2: {
                "required": "Şifre Alanı Zorunludur",
                "minlength": "Min. 5 Hane Girilebilir",
                "maxlength": "Max. 20 Hane Girilebilir",
            },


        },



        "submitHandler": function (form) {
            var postData = $('#DanismanKayit').serializeJSON();
            console.log(postData)

            $.ajax({
                type: "POST",
                contentType: "application/json",
                url: "/danisman/kaydet",
                data: postData,
                dataType: 'json',
                cache: false,
                timeout: 60000,

                success: function (data) {
                    $('#loading-screen').fadeOut('slow');
                    if (data.result) {
                        console.log(data);
                        success_noti_custom(data.message);
                        setTimeout(function () {
                            window.location.replace("/login");
                        }, 1000);
                    } else {
                        error_noti_yuk(data.message)
                    }

                },

                error: function (e) {

                    console.log("ERROR : ", e);
                    $("#btn-login").prop("disabled", false);

                }
            });

            return false; // required to block normal submit since you used ajax
        }
    });

});