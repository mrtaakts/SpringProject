
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

        var regex = /^[a-zA-Z ğüşıöçĞÜŞİÖÇ]*$/;
        // This is will test the value against the regex
        // Will return True if regex satisfied
        if (regex.test(this.value) !== true)
            //alert if not true
            alert("Model Alanına alfabetik Karakter Giriniz");

        // You can replace the invalid characters by:
        this.value = this.value.replace(/[^a-zA-Z ğüşıöçĞÜŞİÖÇ]+/, '');
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

    $("#FaturaEkle").validate({
        ignore: ":hidden",
        rules: {

            mark: {
                required: true,
                minlength: 2,
            },
            mode: {
                required: true,
                minlength: 2,
            },
            uyil: {
                required: true,
                minlength: 2,
            },
        },
        messages: {

            plak: {
                required: "Plaka Alanını Doldurun",
                minlength: "En Az 2 Karakter",

            },
            mark: {
                required: "Marka Alanını Doldurun",
                minlength: "En Az 2 Karakter",

            },
            mode: {
                required: "Model Alanını Doldurun",
                minlength: "En Az 2 Karakter",
            },
            uyil: {
                required: "Üretim Yılı Alanını Doldurun",
                minlength: "En Az 2 Karakter",
            },

            submitHandler: function (form) {
                alert("aha oldu işte")
                var postData = $('#FaturaEkle').serializeJSON();
                console.log(postData)
            }
        }});
})

