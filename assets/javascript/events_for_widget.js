
// Definimos el nuevo Evento
document.body.addEventListener("onWidgetDisplayed", function(e) {
	// Obtenemos como parámetro el Evento (e)
	console.info("Event is: ", e);
	
	// Además, disponemos de información extra.
	console.info("Custom data is: ", e.detail);
});


//onWidgetDisplayed: inmediatamente luego de mostrar el widget
var widgedDisplayedEvent = new CustomEvent("onWidgetDisplayed", {
  detail: {
    name: "Widget displayed"
  }
});

//onSuccessfulPinRequestSent: inmediatamente luego de enviar el PIN exitosamente
var successfulPinRequestSentEvent = new CustomEvent("onSuccessfulPinRequestSent", {
  detail: {
    name: "Successful pin request sent"
  }
});

//onRetryRequested: inmediatamente luego de que se clickee el boton de retry
//Ringcaptcha.reload()
var retryRequestedEvent = new CustomEvent("onRetryRequested", {
  detail: {
    name: "Retry request event"
  }
});

//onInvalidNumberEntered: cuando un numero invalido fue ingresado
var invalidNumberEntered = new CustomEvent("onInvalidNumberEntered", {
  detail: {
    name: "Invalid number entered"
  }
});

// Ejecutamos el evento
//document.body.dispatchEvent(myEvent);