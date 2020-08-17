$(document).ready(function () {


    $(document).on('click', '#yukModal', function(){
        var name = $(this).attr("name");
        name = name.match(/\d+/)[0];
        $(".tral:nth-child(" + (parseInt(name) + 1) + ") .modal").modal("show");

    });


    $('a[href="#next"]').click(function () {
        console.log("Clicked on NExt");

    });

    function validateForm() {
        var x = document.forms["wizard-validation-form"]["yukSofor"].value;
        if (x == "") {
            alert("Yük Şöför Alanını doldurunuz");
            return false;
        }
    }


});