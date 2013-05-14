RingcaptchaEvents = {
  widgedDisplayedEvent: new CustomEvent("onWidgetDisplayed", {
    detail: {
      name: "Widget displayed"
    }
  }),

  //onSuccessfulPinRequestSent: inmediatamente luego de enviar el PIN exitosamente
  successfulPinRequestSentEvent: new CustomEvent("onSuccessfulPinRequestSent", {
    detail: {
      name: "Successful pin request sent"
    }
  }),

  //onRetryRequested: inmediatamente luego de que se clickee el boton de retry
  retryRequestedEvent: new CustomEvent("onRetryRequested", {
    detail: {
      name: "Retry request event"
    }
  }),

  //onInvalidNumberEntered: cuando un numero invalido fue ingresado
  invalidNumberEnteredEvent: new CustomEvent("onInvalidNumberEntered", {
    detail: {
      name: "Invalid number entered"
    }
  }),
};


// Ejecutamos el evento
//document.body.dispatchEvent(Ringcaptcha.invalidNumberEnteredEvent);