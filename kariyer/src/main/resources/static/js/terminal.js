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
};

$(document).ready(function () {
    $("#ad").keyup(function(e) {
        var regex = /^[a-zA-Z ğüşıöçĞÜŞİÖÇ]*$/;
        // This is will test the value against the regex
        // Will return True if regex satisfied
        if (regex.test(this.value) !== true)
            //alert if not true
            alert("Ad Alanına Alfabetik Karakter Giriniz");

        // You can replace the invalid characters by:
        this.value = this.value.replace(/[^a-zA-Z ğüşıöçĞÜŞİÖÇ]+/, '');
    });
    $("#soyAdi").keyup(function(e) {

        var regex = /^[a-zA-Z ğüşıöçĞÜŞİÖÇ]*$/;
        // This is will test the value against the regex
        // Will return True if regex satisfied
        if (regex.test(this.value) !== true)
            //alert if not true
            alert("Soyad Alanına Alfabetik Karakter Giriniz");

        // You can replace the invalid characters by:
        this.value = this.value.replace(/[^a-zA-Z ğüşıöçĞÜŞİÖÇ]+/, '');
    });
    $("#tcPasaport").keyup(function(e) {
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

    $("#FormSave").validate({
        ignore: ":hidden",
        rules: {
            ad: {
                required: true,
                minlength: 2,
                ad_rule:true,
            },
            soyAdi: {
                required: true,
                minlength: 2,
                ad_rule:true,
            },
            email: {
                required: true,
                minlength: 7,
                maxlength: 50,

            },

            konusu: {
                required: true,
                minlength: 3,
                maxlength: 50,

            },
            talep: {
                required: true,
                minlength: 10,
                maxlength: 500,

            },
            telefon: {
                required: true,
                minlength: 11,
                maxlength: 11,
                numerik:true,
            },


        },
        messages: {

            ad: {
                required: "Ad Alanını Doldurunuz",
                minlength: "En Az 2 Karakter Girilebilir",
                ad_rule:"Sadece Alfabetik Karakter Giriniz",
            },
            soyAdi: {
                required: "Soyad Alanını Doldurunuz",
                minlength: "En Az 2 Karakter Girilebilir",
                ad_rule:"Sadece Alfabetik Karakter Giriniz",
            },

            email: {
                required: "E-Mail Alanını Doldurunuz",
                minlength: "En Az 7 Karakter Girilebilir",

            },
            konusu: {
                required: "Talebin Konusu Alanını Doldurunuz",
                minlength: "En Az 2 Karakter Girilebilir",
                maxlength: "En Fazla 50 Karakter Girilebilir",

            },

            talep: {
                required: "Talebin Detayları Alanını Doldurunuz",
                minlength: "En Az 10 Karakter Girilebilir",

            },

            telefon:{
                required: "Telefon Numaranızı Giriniz",
                minlength: "En Az 11 Hane Girilebilir",
                maxlength: "En Fazla 11 Hane Girilebilir",
                numerik: "Sadece Rakam Girilebilir",
            },

        },
        submitHandler: function (form) {
            // $('#loading-screen').fadeIn();
            var id = getUrlParameter('id');
            if(id==null){
                if ($("#giris").prop('checked',false)){
                    var formData = {
                        "hareketTuru": $("#cikis").val(),
                        "terminalBelgeNo" : $("#terbel").val(),
                        "aracPlaka":$("#plaka").val(),
                        "detay":$("#hardetay").val(),
                        "hareketTarihi":$("#autoclose-datepicker1").val(),
                        "hareketSaati" : $("#timepicker1").val(),
                    }
                }else {
                    var formData = {

                        "hareketTuru": $("#giris").val(),
                        "terminalBelgeNo": $("#terbel").val(),
                        "aracPlaka": $("#plaka").val(),
                        "detay": $("#hardetay").val(),
                        "hareketTarihi": $("#autoclose-datepicker1").val(),
                        "hareketSaati": $("#timepicker1").val(),
                    }
                }
            }
            else {
                var formData = {
                    "id":id,
                    "adi": $("#ad").val(),
                    "soyadi" : $("#soyAdi").val(),
                    "email":$("#email").val(),
                    "telefon":$("#telefon").val(),
                    "talepKonusu":$("#konusu").val(),
                    "talepDetay" : $("#talep").val(),
                }

            }

            console.log(formData)

            $.ajax({
                type: "POST",
                contentType: "application/json",
                url: "/terminal/seferEkle",
                data: JSON.stringify(formData),
                dataType: 'json',
                cache: false,
                timeout: 600000,

                success: function (formData) {
                    $('#loading-screen').fadeOut('slow');
                    if(formData.result){
                        console.log(formData);
                        success_noti();
                        setTimeout(function() {
                            window.location.replace("/terminal/hareketler");
                        }, 1000);
                    }

                    else{
                        error_noti()
                        console.log(formData.message+" Kayıt Başarısız")
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

