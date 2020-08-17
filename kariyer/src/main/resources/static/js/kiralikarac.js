$(document).ready(function () {

    $("#mark").keyup(function(e) {
        var regex = /^[a-zA-Z ğüşıöçĞÜŞİÖÇ]*$/;
        // This is will test the value against the regex
        // Will return True if regex satisfied
        if (regex.test(this.value) !== true)
            //alert if not true
            alert("Marka Alanına alfabetik Karakter Giriniz");

        // You can replace the invalid characters by:
        this.value = this.value.replace(/[^a-zA-Z ğüşıöçĞÜŞİÖÇ]+/, '');
    });
    $("#mode").keyup(function(e) {

        var regex = /^[a-zA-Z ğüşıöçĞÜŞİÖÇ 0-9]*$/;
        // This is will test the value against the regex
        // Will return True if regex satisfied
        if (regex.test(this.value) !== true)
            //alert if not true
            alert("Model Alanına alfabetik Karakter Giriniz");

        // You can replace the invalid characters by:
        this.value = this.value.replace(/[^a-zA-Z ğüşıöçĞÜŞİÖÇ 0-9]+/, '');
    });
    $("#atur").keyup(function(e) {

        var regex = /^[a-zA-Z ğüşıöçĞÜŞİÖÇ]*$/;
        // This is will test the value against the regex
        // Will return True if regex satisfied
        if (regex.test(this.value) !== true)
            //alert if not true
            alert("Soyad Alanına alfabetik Karakter Giriniz");

        // You can replace the invalid characters by:
        this.value = this.value.replace(/[^a-zA-Z ğüşıöçĞÜŞİÖÇ]+/, '');
    });
    $("#ytur").keyup(function(e) {

        var regex = /^[a-zA-Z ğüşıöçĞÜŞİÖÇ]*$/;
        // This is will test the value against the regex
        // Will return True if regex satisfied
        if (regex.test(this.value) !== true)
            //alert if not true
            alert("Soyad Alanına alfabetik Karakter Giriniz");

        // You can replace the invalid characters by:
        this.value = this.value.replace(/[^a-zA-Z ğüşıöçĞÜŞİÖÇ]+/, '');
    });
    $("#uyil").keyup(function(e) {
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
            alert("Üretim Yılı Alanına Numerik Karakter Giriniz");
        // You can replace the invalid characters by:
        this.value = this.value.replace(/[^0-9]+/, '');
    });

    $("#KiraSave").validate({
        ignore: ":hidden",
        rules: {

            aracMarka: {
                required: true,
                minlength: 2,
                maxlength: 15,
            },
            plaka: {
                required: true,
                minlength: 6,
                maxlength: 9,
            },
            kiralamaBitisTarih: {
                required: true,

            },
            kiralamaTarih: {
                required: true,

            },

            aracTurId: {
                required: true,

            },
            acentaAdi: {

                minlength: 2,
                maxlength: 50,
            },

            yakitId: {
                required: true,

            },
            model: {
                required: true,
                minlength: 2,
                maxlength: 15,
            },
            yil: {
                required: true,
                minlength: 2,
                maxlength: 4,
            },
        },
        messages: {

            plaka: {
                required: "Plaka Alanını Doldurunuz",
                minlength: "En Az 6 Karakter",
                maxlength: "En fazla 8 Hane Girilebilir"

            },
            aracMarka: {
                required: "Marka Alanını Doldurunuz",
                minlength: "En Az 2 Karakter Girilebilir",
                maxlength: "En fazla 15 Karakter Girilebilir"

            },
            yakitId: {
                required: "Yakıt Türü Seçiniz",

            },
            kiralamaBitisTarih: {
                required: "Sözleşme Bitiş Tarihini Seçiniz",

            },
            aracTurId: {
                required: "Araç Türü Alanını Doldurunuz",

            },
            kiralamaTarih: {
                required: "Kiralama Tarihi Seçiniz",

            },
            model: {
                required: "Model Alanını Doldurunuz",
                minlength: "En Az 2 Karakter",
                maxlength: " En Fazla 15 Karakter Girilebilir"
            },
            acentaAdi: {

                minlength: "En Az 2 Karakter",
                maxlength: " En Fazla 50 Karakter Girilebilir"
            },
            yil: {
                required: "Üretim Yılı Alanını Doldurunuz",
                minlength: "En Az 2 Karakter",
            },
        },
        submitHandler: function (form) {

            $('#loading-screen').fadeIn();

            var postData = $('#KiraSave').serializeJSON();


            $.ajax({
                type: "POST",
                contentType: "application/json",
                url: "/arac/kiralikSave",
                data: postData,
                dataType: 'json',
                cache: false,
                timeout: 600000,

                success: function (data) {
                    $('#loading-screen').fadeOut('slow');
                    if (data.result) {
                        console.log(data);
                        success_noti_custom(data.message)
                        setTimeout(function () {
                            window.location.replace("/arac/araclar");
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