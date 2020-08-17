$(document).ready(function () {

    $("#yukmiktar").keyup(function(e) {
        // Our regex
        // a-z => allow all lowercase alphabets
        // A-Z => allow all uppercase alphabets
        // 0-9 => allow all numbers
        // @ => allow @ symbol
        var regex = /^[0-9]*$/;
        // This is will test the value against the regex
        // Will return True if regex satisfied
        if (regex.test(this.value) !== true){
            date_msg("Dikkat!", "Miktar Alanına Numerik Karakter Giriniz")
            // You can replace the invalid characters by:
            this.value = this.value.replace(/[^0-9]+/, '')
        };
    });
    $("#gvergy").keyup(function(e) {
        // Our regex
        // a-z => allow all lowercase alphabets
        // A-Z => allow all uppercase alphabets
        // 0-9 => allow all numbers
        // @ => allow @ symbol
        var regex = /^[0-9]*$/;
        // This is will test the value against the regex
        // Will return True if regex satisfied
        if (regex.test(this.value) !== true){
            date_msg("Dikkat!", "Vergi No Alanına Numerik Karakter Giriniz")
            // You can replace the invalid characters by:
            this.value = this.value.replace(/[^0-9]+/, '')
        };
    });
    $("#avergy").keyup(function(e) {
        // Our regex
        // a-z => allow all lowercase alphabets
        // A-Z => allow all uppercase alphabets
        // 0-9 => allow all numbers
        // @ => allow @ symbol
        var regex = /^[0-9]*$/;
        // This is will test the value against the regex
        // Will return True if regex satisfied
        if (regex.test(this.value) !== true){
            date_msg("Dikkat!", "Vergi No Alanına Numerik Karakter Giriniz")
            // You can replace the invalid characters by:
            this.value = this.value.replace(/[^0-9]+/, '')
        };
    });
    $("#tucr").keyup(function(e) {
        // Our regex
        // a-z => allow all lowercase alphabets
        // A-Z => allow all uppercase alphabets
        // 0-9 => allow all numbers
        // @ => allow @ symbol
        var regex = /^[0-9]*$/;
        // This is will test the value against the regex
        // Will return True if regex satisfied
        if (regex.test(this.value) !== true){
            date_msg("Dikkat!", "Ücret Alanına Numerik Karakter Giriniz")
            this.value = this.value.replace(/[^0-9]+/, '')
        };
    });
});

!function ($) {
    "use strict";

    var FormWizard = function () {
    };
    var yukler=new Array();
    //creates form with validation
    FormWizard.prototype.createValidatorForm = function ($form_container) {

        jQuery.validator.addMethod('yuklemeulke', function (value, element) {
            if ($('#yulkilk').val()==="TR") {

                if(element.name=="seferBilgileriInputDTO[baslangicIlMernisKodu]"){
                    if($( "#selectCity" ).val()){
                        return true
                    }

                    return false;
                }
                else if(element.name=="seferBilgileriInputDTO[baslangicIlceMernisKodu]"){
                    if($("#selectCity" ).val()&& $('#selectDistrict').val()){
                        return true
                    }
                    return false;
                }
            }
            else {
                return true;
            };
        });

        jQuery.validator.addMethod('bosaltmaulke', function (value, element) {
            if ($('#bulkilk').val()==="TR") {

                if(element.name=="seferBilgileriInputDTO[bitisIlMernisKodu]"){
                    if($( "#selectCityBos" ).val()){
                        return true
                    }
                    return false;
                }
                else if(element.name=="seferBilgileriInputDTO[bitisIlceMernisKodu]"){
                    if($( "#selectCityBos" ).val()&& $('#selectDistrictBos').val()){
                        return true
                    }
                    return false;
                }
            }
            else {
                return true;
            };
        });


        $form_container.validate({
            rules: {

                "seferBilgileriInputDTO[persnel]": {
                    required: true,
                },
                "seferBilgileriInputDTO[baslangicUlkeKodu]": {
                    required: true,
                },
                "seferBilgileriInputDTO[baslangicIlMernisKodu]": {
                    yuklemeulke: true,
                },
                "seferBilgileriInputDTO[baslangicIlceMernisKodu]": {
                    yuklemeulke: true,
                },
                "seferBilgileriInputDTO[aracId]": {
                    required: true,
                },
                "seferBilgileriInputDTO[seferBaslangicTarihi]": {
                    required: true,
                },
                "seferBilgileriInputDTO[seferBaslangicSaati]": {
                    required: true,
                },
                "seferBilgileriInputDTO[bitisUlkeKodu]": {
                    required: true,
                },
                "seferBilgileriInputDTO[bitisIlMernisKodu]": {
                    bosaltmaulke: true,
                },
                "seferBilgileriInputDTO[bitisIlceMernisKodu]": {
                    bosaltmaulke: true,
                },
                "seferBilgileriInputDTO[seferBitisTarihi]": {
                    required: true,
                },
                "seferBilgileriInputDTO[seferBitisSaati]": {
                    required: true,
                },
                "yukBilgileriInputDTO[tasimaSekliId]": {
                    required: true,
                },
                "yukBilgileriInputDTO[yukMiktari]": {
                    required: true,
                },
                "yukBilgileriInputDTO[gonderenVergiNo]":{
                    required: true,
                }

            },
            messages: {

                "seferBilgileriInputDTO[persnel]": {
                    required: "Şoför Alanını Seçiniz",
                },
                "seferBilgileriInputDTO[baslangicUlkeKodu]": {
                    required: "Yükleme Ülkesini Seçiniz",
                },
                "seferBilgileriInputDTO[baslangicIlMernisKodu]": {
                    yuklemeulke: "Başlangıç Ülkesi Türkiye Olan Seferler İçin Zorunlu Alandır",
                },
                "seferBilgileriInputDTO[baslangicIlceMernisKodu]": {
                    yuklemeulke: "Başlangıç Ülkesi Türkiye Olan Seferler İçin Zorunlu Alandır",
                },
                "seferBilgileriInputDTO[aracId]": {
                    required: "Taşıma Aracını Seçiniz"
                },
                "seferBilgileriInputDTO[seferBaslangicTarihi]": {
                    required: "Yükleme Tarihi Alanını Doldurunuz",
                },
                "seferBilgileriInputDTO[seferBaslangicSaati]": {
                    required: "Yükleme saati Alanını Doldurunuz",
                },
                "seferBilgileriInputDTO[bitisUlkeKodu]": {
                    required: "Boşaltma Ülkesini Seçiniz",
                },
                "seferBilgileriInputDTO[bitisIlMernisKodu]": {
                    bosaltmaulke: "Başlangıç Ülkesi Türkiye olan Seferler İçin Zorunlu Alan",
                },
                "seferBilgileriInputDTO[bitisIlceMernisKodu]": {
                    bosaltmaulke: "Başlangıç Ülkesi Türkiye olan Seferler İçin Zorunlu Alan",
                },
                "seferBilgileriInputDTO[seferBitisTarihi]": {
                    required: "Boşaltma Tarihi Alanını Doldurunuz"
                },
                "seferBilgileriInputDTO[seferBitisSaati]": {
                    required: "Boşaltma Saati Alanını Doldurunuz",
                },
                "yukBilgileriInputDTO[gonderenVergiNo]":{
                    gvergy: "Gönderici Vergi Numarası Giriniz.",
                    required: "Gönderici Vergi Numarası Giriniz.",
                },
            }

        });
        $form_container.children("div").steps({
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "slideLeft",
            labels: {
                cancel: "Cancel",
                current: "current step:",
                pagination: "Pagination",
                finish: "Gönder",
                next: "İleri",
                previous: "Geri",
                loading: "Loading ..."
            },

            onStepChanging: function (event, currentIndex, newIndex) {
                //sayfa geri tuşu validasyona takılmaz
                if(currentIndex>newIndex){
                    return true;
                }
                //sayfa 1 den 2 ye gecerken ki alan
                if(currentIndex==0 && newIndex==1){

                    var basTarih=moment($("#autoclose-datepicker1").val() + " " + $("#timepicker3").val(),"DD-MM-YYYY HH:mm");
                    var bitisTarih=moment($("#autoclose-datepicker2").val() + " " + $("#timepicker4").val(),"DD-MM-YYYY HH:mm");
                    var isLarger =  basTarih>= bitisTarih;
                    if(isLarger){
                        date_msg("Boşaltma Tarihi Yükleme Tarihinden Önce Olamaz.")
                        return false
                    }
                    $form_container.validate().settings.ignore = ":disabled,:hidden";
                    return $form_container.valid();
                }



                console.log("currenIndex: ", currentIndex, "NexIndex: ", newIndex);
                //repeater olan 2.sayfamız için yazılan validation
                if (newIndex == 2) {
                    var ancestor = document.getElementById('lists'),//data-repeater-list olan kısım
                        descendents = ancestor.getElementsByClassName('tral');//data-repeater-item itemların classı
                    // gets all descendent of ancestor
                    var i, e, d;
                    var durum = true;
                    let total = descendents.length;
                    let basarili = 0;

                    let detay_ozet = "" +
                        " <table class=\"table table-striped- table-bordered table-hover table-checkable\"\n" +
                        "                       id=\"kt_table_1\">\n" +
                        "                    <thead>\n" +
                        "                    <tr>\n" +
                        "                        <th>Yuk No #</th>\n" +
                        "                        <th>Yük</th>\n" +
                        "                        <th>Gönderici</th>\n" +
                        "                        <th>Alıcı</th>\n" +
                        "                        <th>Yükleme Yeri</th>\n" +
                        //"                        <th>Yükleme Tarihi</th>\n" +
                        "                        <th>Boşaltma Yeri</th>\n" +
                        //"                        <th>Boşaltma Tarihi</th>\n" +
                        "                        <th>Yük Taşıma Ücreti</th>\n" +
                        "                    </tr>\n" +
                        "                    </thead>" +
                        "                    <tbody>";

                    for (i = 1; i < descendents.length + 1; i++) {

                        let s = i;
                        let yuk = $(document.querySelectorAll('.tral:nth-child(' + i + ')  select')[0]['selectedOptions'][0]).text();
                        let yukMiktari = $(document.querySelectorAll('.tral:nth-child(' + i + ')  input')[0]).val();
                        let yukBirimi = $(document.querySelectorAll('.tral:nth-child(' + i + ')  select')[1]['selectedOptions'][0]).text();
                        let gonderenvergi = $(document.querySelectorAll('.tral:nth-child(' + i + ') .modal input')[0]).val();
                        let gonderen = $(document.querySelectorAll('.tral:nth-child(' + i + ') .modal input')[1]).val();
                        let alicivergi = $(document.querySelectorAll('.tral:nth-child(' + i + ') .modal input')[2]).val();
                        let alici = $(document.querySelectorAll('.tral:nth-child(' + i + ') .modal input')[3]).val();
                        let yukleTarihi = $(document.querySelectorAll('.tral:nth-child(' + i + ') .modal input')[4]).val();
                        let yukleSaat = $(document.querySelectorAll('.tral:nth-child(' + i + ') .modal input')[5]).val();
                        let bosaltTarih = $(document.querySelectorAll('.tral:nth-child(' + i + ') .modal input')[6]).val();
                        let bosaltSaat = $(document.querySelectorAll('.tral:nth-child(' + i + ') .modal input')[7]).val();
                        let ucret = $(document.querySelectorAll('.tral:nth-child(' + i + ') .modal input')[8]).val();
                        let yukleUlke = $(document.querySelectorAll('.tral:nth-child(' + i + ') .modal select')[0]['selectedOptions'][0]).text();
                        let yukleIl = $(document.querySelectorAll('.tral:nth-child(' + i + ') .modal select')[1]['selectedOptions'][0]).text();
                        let yukleIlce = $(document.querySelectorAll('.tral:nth-child(' + i + ') .modal select')[2]['selectedOptions'][0]).text();
                        let bosaltUlke = $(document.querySelectorAll('.tral:nth-child(' + i + ') .modal select')[3]['selectedOptions'][0]).text();
                        let bosaltIl = $(document.querySelectorAll('.tral:nth-child(' + i + ') .modal select')[4]['selectedOptions'][0]).text();
                        let bosaltIlce = $(document.querySelectorAll('.tral:nth-child(' + i + ') .modal select')[5]['selectedOptions'][0]).text();
                        let ucretBirimi = $(document.querySelectorAll('.tral:nth-child(' + i + ') .modal select')[6]['selectedOptions'][0]).text();

                        var isLarger = moment(yukleTarihi + " " + yukleSaat,"DD-MM-YYYY HH:mm") >= moment(bosaltTarih + " " + bosaltSaat,"DD-MM-YYYY HH:mm");


                        if (gonderen == "" || alici == "" || yukleTarihi == "" || yukleSaat == "" || bosaltTarih == "" || bosaltSaat == "" || ucret == "" || ucretBirimi == "") {
                            //alert fırlatıyor
                            swal({
                                title: s + ". Yük Eksik Bilgi Girişi",
                                text: "Lütfen Detaylar Bölümündeki Zorunlu Alanları Doldurun.",
                                icon: "warning",
                                confirmButtonClass: "btn btn-secondary"
                            })
                            return false;
                            break;
                            //ulkesi tr olanlar il ilçe secmek zorunda
                        } else if (yukleUlke == "" || (jQuery.trim(yukleUlke) == "Türkiye" && (yukleIl == null || yukleIl == "")  && (yukleIlce == null || yukleIlce == ""))
                            || (jQuery.trim(yukleUlke) == "Türkiye" && (yukleIl != null || yukleIl == "")  && (yukleIlce == null || yukleIlce == "")) ||
                             bosaltUlke == "" || (jQuery.trim(bosaltUlke) == "Türkiye" && (bosaltIl == null || bosaltIl == "")&& (bosaltIlce == null || bosaltIlce == ""))
                           || bosaltUlke == "" || (jQuery.trim(bosaltUlke) == "Türkiye" && (bosaltIl != null || bosaltIl == "")&& (bosaltIlce == null || bosaltIlce == ""))
                            ){
                            swal({
                                title: s + ". Yük Eksik Bilgi Girişi",
                                text: "Lütfen Detaylar Bölümündeki Yükleme - Boşaltma Yer Bilgilerini Seçiniz.",
                                icon: "warning",
                                confirmButtonClass: "btn btn-secondary"
                            });
                            return false;
                            break;
                        } else if (isLarger === true) {

                            swal({
                                title: s + ". Yük",
                                text: "Yükleme Tarihi Boşaltma Tarihinden Önce Olmalıdır.",
                                type: "warning",
                                confirmButtonClass: "btn btn-secondary"
                            });
                            return false;
                            break;
                        }
                        //özet ekranlar burda dolduruldu..

                        detay_ozet +=

                        "                         <tr>\n" +
                        "                         <th>" + s + " #</th>\n" +
                        "                         <th>" + yuk + " / " + yukMiktari + " " + yukBirimi + "</th>\n" +
                        "                         <th>" + gonderen + " - " + gonderenvergi + "</th>\n" +
                        "                         <th>" + alici + " - " + alicivergi + "</th>\n" +
                        "                        <th>(" + yukleUlke + ") - " + yukleIl + "</th>\n" +
                        //"                        <th>" + yukleTarihi + " " + yukleSaat + "</th>\n" +
                        "                        <th>(" + bosaltUlke + ") - " + bosaltIl + "</th>\n" +
                        //"                        <th>" + bosaltTarih + " " + bosaltSaat + "</th>\n" +
                        "                          <th>" + ucret + " " + ucretBirimi + "</th>\n" +
                        "                          </tr>";

                    }
                    detay_ozet += "</tbody>";
                    detay_ozet += "</table>";
                    $("#s_yukDetay").html(detay_ozet);

                    var ozet_table = "" +
                        "<table class='table table-striped- table-bordered table-hover table-checkable' style=\"width:80vw\">\n" +
                        "  <tr>\n" +
                        "    <th>Şoför:</th>\n" +
                        "    <td>\n" + $("#yukSofor option:selected").text() + " - " + $("#yedekSofor option:selected").text() + "</td>\n" +
                        "    <th>Araç/Dorse:</th>\n" +
                        "    <td>" + $("#tarac option:selected").text() + " - " + $("#dorse option:selected").text() + "</td>\n" +
                        "  </tr>\n" +
                        "  <tr>\n" +
                        "    <th>Sefer Başlangıç:</th>\n" +
                        "    <td>" + $("#selectCity option:selected").text() + " / " + $("#selectDistrict option:selected").text() + "</td>\n" +
                        "    <td>(" + $("#yulkilk option:selected").text() + ")</td>\n" +
                        "    <td>" + $("#autoclose-datepicker1").val() + " " + $("#timepicker3").val() + "</td>\n" +
                        "  </tr>\n" +
                        "  <tr>\n" +
                        "    <th>Sefer Bitiş:</th>\n" +
                        "    <td>" + $("#selectCityBos option:selected").text() + " / " + $("#selectDistrictBos option:selected").text() + "</td>\n" +
                        "    <td>(" + $("#bulkilk option:selected").text() + ")</td>\n" +
                        "    <td>" + $("#autoclose-datepicker2").val() + " " + $("#timepicker4").val() + "</td>\n" +
                        "  </tr>\n" +
                        "  <tr>\n" +
                        "    <th>Açıklama:</th>\n" +
                        "    <td>" + $("#not").val() +
                        "  </tr>\n" +
                        "</table>";


                    $("#s_sefer").html(ozet_table);

                }
                //$form_container.validate().settings.ignore = ":disabled,:hidden";
                return true;
            }
            ,
                onFinishing: function (event, currentIndex) {
                    //$form_container.validate().settings.ignore = ":disabled";
                    //return $form_container.valid();
                    return true;
                }
            ,
                onFinished: function (event, currentIndex) {
                    //en son submit edilen kısım
                    var postData = $('#wizard-validation-form').serializeJSON();
                    console.log(postData)

                    $.ajax({
                        type: "POST",
                        url: "/yuk/bildirim",
                        data:postData,
                        contentType: "application/json",
                        datatype:'json',
                        cache: false,
                        timeout: 600000,
                        success: function (data) {
                            $('#loading-screen').fadeOut('slow');
                            if(data.sonucKodu==0){
                                success_noti_custom("Seferiniz Ulaştırma ve Altyapı Bakanlığı'na Başarılı Şekilde Bildirilmiştir.");
                                setTimeout(function() {
                                    window.location.replace("/yuk/yukler");
                                },2000);
                            }

                            else{
                                // var myJSON = JSON.stringify(data.sonucMesaji)
                                error_noti_yuk(data.sonucMesaji)
                                console.log(data.sonucMesaji+" Başarısız işlem")
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

        return $form_container;
    },
        //creates vertical form
        FormWizard.prototype.init = function () {
            //initialzing various forms

            //form with validation
            this.createValidatorForm($("#wizard-validation-form"));
        },
        //init
        $.FormWizard = new FormWizard, $.FormWizard.Constructor = FormWizard
}(window.jQuery),

//initializing 
    function ($) {
        "use strict";
        $.FormWizard.init()
    }(window.jQuery);