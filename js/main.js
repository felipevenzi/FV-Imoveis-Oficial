//OWL
jQuery(document).ready(function ($) {

   window.onscroll = function () {
        if (window.pageYOffset > 140) {
          $("#header").addClass("active");
        } else {
          $("#header").removeClass("active");
        }
      };

    //ISOTOPE
    let btns = $("#add-hoje .button-group button");

    btns.click(function (e) {
        $("#add-hoje .button-group button").removeClass("active");
        e.target.classList.add("active");

        let selector = $(e.target).attr("data-filter");
        $("#add-hoje .grid").isotope({
        filter: selector,
        });
    });

    $(window).on("load", function () {
        $("#add-hoje .grid").isotope({
          filter: "*",
        });
      });

    //Select tipo de Imóvel
    VirtualSelect.init({ 
      ele: '#multipleSelect' 
    });

  });

  //Não notificar
  function visita() {

    var data = null;
  
    $.ajax({
      beforeSend: function() {
      },
      complete: function() {
  
        console.log(data);
        
      },
      url: "https://us-central1-use-broker-beta.cloudfunctions.net/sendNotification",
      //timeout: 20000,
      type: "GET",	
      //data: {icRequest:1, nuUsuario:nuUsuario, nuNegocio:nuNegocio},
      success: function(response) {
        data = response;
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        var error = textStatus + ", " + errorThrown;
        console.log("Request Failed: " + error);
      }
    });
    
  }

  function mascaraData( campo, e )
{
	var kC = (document.all) ? event.keyCode : e.keyCode;
	var data = campo.value;
	
	if( kC!=8 && kC!=46 )
	{
		if( data.length==2 )
		{
			campo.value = data += '/';
		}
		else if( data.length==5 )
		{
			campo.value = data += '/';
		}
		else
			campo.value = data;
	}
}

const handlePhone = (event) => {
  let input = event.target
  input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{2})(\d)/,"($1) $2")
  value = value.replace(/(\d)(\d{4})$/,"$1-$2")
  return value
}