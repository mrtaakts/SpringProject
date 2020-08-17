!function ($) {
    "use strict";

    var FormWizard = function () {
    };
    var yukler=new Array();
    var formData= new FormData();
    //creates form with validation
    FormWizard.prototype.createValidatorForm = function ($form_container) {
        $form_container.validate({
            errorPlacement: function errorPlacement(error, element) {
                element.after(error);
            }
        });
        $form_container.children("div").steps({
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "slideLeft",
            onStepChanging: function (event, currentIndex, newIndex) {

                console.log("currenIndex: ", currentIndex, "NexIndex: ", newIndex);
                if (newIndex == 2) {
                    var ancestor = document.getElementById('lists'),
                        descendents = ancestor.getElementsByClassName('tral');
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
                        //"                        <th>Yükleme Yeri</th>\n" +
                        //"                        <th>Yükleme Tarihi</th>\n" +
                        //"                        <th>Boşaltma Yeri</th>\n" +
                        //"                        <th>Boşaltma Tarihi</th>\n" +
                        "                        <th>Yük Taşıma Ücreti</th>\n" +
                        "                    </tr>\n" +
                        "                    </thead>" +
                        "                    <tbody>";
                    for (i = 1; i < descendents.length + 1; i++) {

                        let s = i;
                        let yuk = $(document.querySelectorAll('.tral:nth-child(' + i + ')  select')[0]['selectedOptions'][0]).text();
                        let yukMiktari = $(document.querySelectorAll('.tral:nth-child(' + i + ')  input')[1]).val();
                        let yukBirimi = $(document.querySelectorAll('.tral:nth-child(' + i + ')  select')[1]['selectedOptions'][0]).text();
                        let gonderenvergi = $(document.querySelectorAll('.tral:nth-child(' + i + ') .modal input')[0]).val();
                        let gonderen = $(document.querySelectorAll('.tral:nth-child(' + i + ') .modal input')[1]).val();
                        let alicivergi = $(document.querySelectorAll('.tral:nth-child(' + i + ') .modal input')[2]).val();
                        let alici = $(document.querySelectorAll('.tral:nth-child(' + i + ') .modal input')[3]).val();
                        //let yukleTarihi = $(document.querySelectorAll('.tral:nth-child(' + i + ') .modal input')[4]).val();
                        let yukleSaat = $(document.querySelectorAll('.tral:nth-child(' + i + ') .modal input')[5]).val();
                        let bosaltTarih = $(document.querySelectorAll('.tral:nth-child(' + i + ') .modal input')[6]).val();
                        let bosaltSaat = $(document.querySelectorAll('.tral:nth-child(' + i + ') .modal input')[7]).val();
                        let ucret = $(document.querySelectorAll('.tral:nth-child(' + i + ') .modal input')[4]).val();
                        let yukleUlke = $(document.querySelectorAll('.tral:nth-child(' + i + ') .modal select')[0]['selectedOptions'][0]).text();
                        let yukleIl = $(document.querySelectorAll('.tral:nth-child(' + i + ') .modal select')[1]['selectedOptions'][0]).text();
                        let bosaltUlke = $(document.querySelectorAll('.tral:nth-child(' + i + ') .modal select')[2]['selectedOptions'][0]).text();
                        let bosaltIl = $(document.querySelectorAll('.tral:nth-child(' + i + ') .modal select')[3]['selectedOptions'][0]).text();
                        let ucretBirimi = $(document.querySelectorAll('.tral:nth-child(' + i + ') .modal select')[6]).val();
                        yukler.push({
                            "yuk":yuk,
                            "yukMiktar":yukMiktari
                        });
                        // var isLarger = new Date(yukleTarihi + " " + yukleSaat) >= new Date(bosaltTarih + " " + bosaltSaat);



                        detay_ozet +=

                            "                    <tr>\n" +
                            "                        <th>" + s + " #</th>\n" +
                            "                        <th>" + yuk + " / " + yukMiktari + " " + yukBirimi + "</th>\n" +
                            "                        <th>" + gonderen + " - " + gonderenvergi + "</th>\n" +
                            "                        <th>" + alici + " - " + alicivergi + "</th>\n" +
                            //"                        <th>(" + yukleUlke + ") - " + yukleIl + "</th>\n" +
                            // "                        <th>" + yukleTarihi + " " + yukleSaat + "</th>\n" +
                            //"                        <th>(" + bosaltUlke + ") - " + bosaltIl + "</th>\n" +
                            // "                        <th>" + bosaltTarih + " " + bosaltSaat + "</th>\n" +
                            "                        <th>" + ucret + " " + ucretBirimi + "</th>\n" +
                            "                     </tr>";

                    }
                    detay_ozet += "</tbody>";
                    detay_ozet += "</table>";
                    $("#s_yukDetay").html(detay_ozet);

                    var ozet_table = "" +
                        "<table class='table table-striped- table-bordered table-hover table-checkable' style=\"width:47vw\">\n" +
                        "  <tr>\n" +
                        "    <th>Şöför:</th>\n" +
                        "    <td>" + $("#yukSofor option:selected").text() + " - " + $("#yedekSofor option:selected").text() + "</td>\n" +
                        "  </tr>\n" +
                        "  <tr>\n" +
                        "    <th>Plaka:</th>\n" +
                        "    <td>" + $("#plaka1 option:selected").text() + " - " + $("#plaka2 option:selected").text() + "</td>\n" +
                        "  </tr>\n" +
                        "  <tr>\n" +
                        "    <th>Taşıma Ücreti:</th>\n" +
                        "    <td>" + $("#seferTasimaBedeli").val() + " " + $("#seferTasimaBedeliParaBirimi option:selected").text() + "</td>\n" +
                        "  </tr>\n" +
                        "  <tr>\n" +
                        "    <th>Sefer Başlangıç:</th>\n" +
                        "    <td>(" + $("#baslangicUlkeKodu option:selected").text() + " " + $("#baslangicIlIlceId option:selected").text() + ") / " + $("#seferBaslangicTarihi").val() + " " + $("#seferBaslangicSaati").val() + "</td>\n" +
                        "  </tr>\n" +
                        "  <tr>\n" +
                        "    <th>Sefer Bitiş:</th>\n" +
                        "    <td>(" + $("#bitisUlkeKodu option:selected").text() + ") " + $("#bitisIlIlceId option:selected").text() + " / " + $("#seferBitisTarihi").val() + " " + $("#seferBitisSaati").val() + "</td>\n" +
                        "  </tr>\n" +
                        "  <tr>\n" +
                        "    <th>Açıklama:</th>\n" +
                        "    <td>" + $("#not").val() + "</td>\n" +
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
                    alert("Submitted!");

                    var postData = $('#wizard-validation-form').serializeJSON();
                    console.log(postData)

                    for (let pair of formData.entries()) {
                        console.log(pair[0] + ': ' + pair[1]);
                    }
                    $.ajax({
                        type: "POST",
                        url: "/esya/addesya",
                        data:postData,
                        contentType: "application/json",
                        datatype:'json',
                        cache: false,
                        timeout: 600000,

                        success: function (data) {
                            $('#loading-screen').fadeOut('slow');
                            if(data.result){
                                console.log(data);
                                success_noti();
                                setTimeout(function() {
                                    window.location.replace("/personeller");
                                }, 1000);
                            }

                            else{
                                error_noti()
                                console.log(data.message+" sdfasdf")
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