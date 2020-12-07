/*jslint browser: true*/
/*global $, jQuery, alert*/
$( function() {
    $("#datepicker").datepicker();      //календарь
    
    $("#range1").slider({               //передача значения с слайдера в textbox
        range: "min",
        min: 1000,
        max: 3000000,
        step: 1000,
        value: 1000,
        slide: function(event, ui){
            $("#fromr1").val(ui.value);
        }
    });
    $("#fromr1").keyup(function(){      //передача значения с textbox в слайдер
        $("#range1").slider("value", $(this).val());
    })
    
    $("#range2").slider({               //передача значения с слайдера в textbox
        range: "min",
        min: 1000,
        max: 3000000,
        step: 1000,
        value: 1000,
        slide: function(event, ui){
            $("#fromr2").val(ui.value);
        }
    });
    $("#fromr2").keyup(function(){      //передача значения с textbox в слайдер
        $("#range2").slider("value", $(this).val());
    })
  } );
