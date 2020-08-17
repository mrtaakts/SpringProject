!function ($) {
    "use strict";

    var FormWizard = function () {
    };
    var yolcular=new Array();
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
                        " <table class=\"table table-striped- table-bordered table-hover table-checkable\" style=\"width:70vw\">\n" +
                        // "                       id=\"kt_table_1\">\n" +
                        "                    <thead>\n" +
                        "                    <tr>\n" +
                        "                        <th>Yolcu No #</th>\n" +
                        "                        <th>Yolcu Adı Soyadı</th>\n" +
                        "                        <th>Cinsiyeti</th>\n" +
                        "                        <th>Telefon Numarası</th>\n" +
                        "                        <th>Koltuk No</th>\n" +
                        "                    </tr>\n" +
                        "                    </thead>" +
                        "                    <tbody>";
                    for (i = 1; i < descendents.length + 1; i++) {

                        let s = i;
                        let ad = $(document.querySelectorAll('.tral:nth-child(' + i + ')  input')[0]).val();
                        let soy = $(document.querySelectorAll('.tral:nth-child(' + i + ')  input')[1]).val();
                        let cinsiyet = $(document.querySelectorAll('.tral:nth-child(' + i + ') select')[0]['selectedOptions'][0]).text();
                        let telno = $(document.querySelectorAll('.tral:nth-child(' + i + ')  input')[2]).val();
                        let koltukno = $(document.querySelectorAll('.tral:nth-child(' + i + ') .modal input')[6]).val();
                        yolcular.push({
                            "ad":ad,
                            "soy":soy,
                            "cinsiyet":cinsiyet,
                            "telno":telno,
                        });
                        // var isLarger = new Date(yukleTarihi + " " + yukleSaat) >= new Date(bosaltTarih + " " + bosaltSaat);



                        detay_ozet +=
                            "                         <tr>\n" +
                            "                         <th>" + s + " #</th>\n" +
                            "                         <th>" + ad + " " + soy + "</th>\n" +
                            "                         <th>" + cinsiyet + "</th>\n" +
                            "                         <th>" + telno + "</th>\n" +
                            "                         <th>" + koltukno + "</th>\n" +
                            "                          </tr>";

                    }
                    detay_ozet += "</tbody>";
                    detay_ozet += "</table>";
                    $("#s_yukDetay").html(detay_ozet);

                    var ozet_table = "" +
                        "<table class='table table-striped- table-bordered table-hover table-checkable' style=\"width:70vw\">\n" +
                        "  <tr>\n" +
                        "    <th>Görevliler:</th>\n" +
                        "    <td>\n" + $("#sefper option:selected").text() + " - " + $("#sefpery option:selected").text() + "</td>\n" +
                        "    <th>Araç:</th>\n" +
                        "    <td>\n" + $("#plak option:selected").text() + "</td>\n" +
                        "  </tr>\n" +
                        "  <tr>\n" +
                        "    <th>Hareket Tarihi:</th>\n" +
                        "    <td>\n" + $("#autoclose-datepicker1").val() + "</td>\n" +
                        "    <th>Hareket Saati:</th>\n" +
                        "    <td>\n" + $("#timepicker1").val() + "</td>\n" +
                        "  </tr>\n" +
                        "  <tr>\n" +
                        "    <th>Güzergah:</th>\n" +
                        "    <td>\n" + $("#sefguz").val() + "</td>\n" +
                        "    <th>Sefer No:</th>\n" +
                        "    <td>\n" + $("#sefno").val() + "</td>\n" +
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

                    // for (let pair of formData.entries()) {
                    //     console.log(pair[0] + ': ' + pair[1]);
                    // }
                    $.ajax({
                        type: "POST",
                        url: "/tarifeli/add",
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
                                    window.location.replace("/tarifeli/seferler");
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
