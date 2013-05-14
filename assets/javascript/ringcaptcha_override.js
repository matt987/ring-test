Ringcaptcha.reload = function () {
        var a = RingcaptchaStatus, b, c = Ringcaptcha.$, f;
        if (c('ringcaptcha_reload_button')) {
          c('ringcaptcha_reload_button').onmouseover = null;
          c('ringcaptcha_reload_button').onmouseout = null;
        }
        f = 'sid=' + a.session;
        // Create XMLHttpRequest
        b = Ringcaptcha._ajax('POST', a.server + a.site + '/captcha', {
          success: function (jx) {
            var c = JSON.parse(jx.responseText);
            if (c.result == "ERROR") {
              Ringcaptcha._render_error_slide(c, true);
              return false;
            }
            RingcaptchaStatus = c;
            Ringcaptcha.verifyClicked = false;
            Ringcaptcha.init_callback();
          },
          error: function (jx) {
            Ringcaptcha.init_callback();
          }
        });
        b.send(f);
        document.body.dispatchEvent(RingcaptchaEvents.retryRequestedEvent);
      }

    
    Ringcaptcha._render_phone_slide = function () {
  var a = Ringcaptcha.$,
  b = RingcaptchaStr,
  c = RingcaptchaStatus,
  c = c.server,
  d, e = RingcaptchaOptions;
  c[c.length - 1] == "/" && (c = c.substring(0, c.length - 1));
  var f = c + "/images/widget/";
  c = RingcaptchaTemplates.AllCss + RingcaptchaTemplates.CountryCSS;
  d = RingcaptchaTemplates.PhoneHtml;
  c = c.replace(/IMGROOT\//g, f);
  c = c.replace(/IMGLABEL\//g, f);
  Ringcaptcha._set_styles(c);
  Ringcaptcha.widget.innerHTML = d;
  a('ringcaptcha_title') && a('ringcaptcha_title').appendChild(document.createTextNode(b.title));
  a('ringcaptcha_instruction') && a('ringcaptcha_instruction').appendChild(document.createTextNode(b.description));
  a('ringcaptcha_verify_button') && a('ringcaptcha_verify_button').appendChild(document.createTextNode(b.verify_button));
//creo el ? de ayuda y el ex:
v1 = document.createElement('a');
v1.id="ringcaptcha_example_phone";
v1.href = "javascript:Ringcaptcha.showHelp()";
v1.title = b.help_button;
v1.className = 'helptxt';
v1.innerHTML = '(?)';
a('ringcaptcha_title') && a('ringcaptcha_title').appendChild(v1);
s1 = document.createElement('a');
s1.id = 'selectExample';
s1.className = 'helptxt helptxtex';
a('ringcaptcha_title') && a('ringcaptcha_title').appendChild(s1);
//---------------------
c = document.createElement('input');
c.type = "hidden";
c.id = "ringcaptcha_session_id";
c.name = "ringcaptcha_session_id";
c.value = RingcaptchaStatus.session;
d = document.createElement('input');
d.type = "hidden";
d.id = "ringcaptcha_user_country";
d.name = "ringcaptcha_user_country";
a('ringcaptcha_phone_container') && a('ringcaptcha_phone_container').appendChild(c);
a('ringcaptcha_phone_container') && a('ringcaptcha_phone_container').appendChild(d);
//a('ringcaptcha_user_phone').onfocus = Ringcaptcha.fillWithCountry;
a('ringcaptcha_verify_button').href = "javascript:void(0)";
a('ringcaptcha_verify_button').onclick = function () {
  Ringcaptcha.processPhoneNumber(e);
};
a('ringcaptcha_user_phone').onkeypress = Ringcaptcha._process_key;
a('ringcaptcha_user_phone').onkeypress = Ringcaptcha.m_isPhoneValid;
//a('ringcaptcha_user_phone').onkeyup = Ringcaptcha.guessCountry;
//a('ringcaptcha_user_phone').onblur = Ringcaptcha.searchCountry;
a('ringcaptcha_country_selector').onclick = function () {
  a('ringcaptcha_country_dropdown').style.display = "block";
  a('inputSearchCountry').focus();
};
Ringcaptcha._build_country_dropdown();
Ringcaptcha.fillWithCountry();
//if (e.tabindex && (a("ringcaptcha_user_phone").tabIndex = e.tabindex, Ringcaptcha.theme != "custom")) a("ringcaptcha_verify_button").tabIndex = e.tabindex;
if (Ringcaptcha.widget) {
  Ringcaptcha.widget.style.display = ""
  document.body.dispatchEvent(RingcaptchaEvents.widgetDisplayedEvent);
};
e.callback && e.callback()
}
  
Ringcaptcha.widget = Ringcaptcha.$("ringcaptcha_widget"); Ringcaptcha.init_callback();

  Ringcaptcha.processPhoneNumber = function (e) {
    document.getElementById("ringcaptcha_verify_button").focus();
    (typeof window.console !== 'undefined') && console.log('Verify clicked!');
    if (Ringcaptcha.verifyClicked) {
    //(e) && (!Ringcaptcha._is_ie()) && e.preventDefault();
    return !1;
    }
    Ringcaptcha.verifyClicked = true;
    var a = Ringcaptcha.$,
    b = /^\+?([0-9])*$/,
    c = RingcaptchaStatus,
    d = a('ringcaptcha_user_country'), f = a('ringcaptcha_user_phone'),
    y = a('ringcaptcha_country_code_o').value,
    z = a('ringcaptcha_example_phone'),
    g = y + f.value.trim();
    if (!Ringcaptcha.isPhoneValid(f.value) || (f.value.length <=4)) {
      document.body.dispatchEvent(RingcaptchaEvents.invalidNumberEnteredEvent);
      z.className = 'helptxt helptxterr';
      f.className = "error";
      f.value = RingcaptchaStr.invalid_phone;
      f.onclick = (function(){if(z.className != 'helptxt'){f.value = ''; f.className = ''; z.className = 'helptxt'} });
      f.onfocus = (function(){if(z.className != 'helptxt'){f.value = ''; f.className = ''; z.className = 'helptxt'} });
      Ringcaptcha.verifyClicked = false;
      (e) && (!Ringcaptcha._is_ie()) && e.preventDefault();
      
      return !1
    } //Invalid characters
    // Building URL
    f = 'token=' + c.session + '&phone=' + encodeURIComponent(g) + '&country=' + encodeURIComponent(d.value);
    if (c.geolocation) {
      f += '&geo_lat=' + encodeURIComponent(c.geoLat) + '&geo_lng=' + encodeURIComponent(c.geoLng);
      f += '&geo_accuracy=' + encodeURIComponent(c.geoAccuracy) + '&geo_alt=' + encodeURIComponent(c.geoAlt);
      f += '&geo_alt_accuracy=' + encodeURIComponent(c.geoAltAccuracy);
    }
    // Create XMLHttpRequest
    b = Ringcaptcha._ajax('POST', c.server + c.site + '/code', {
      success: function (jx) {
        var r = JSON.parse(jx.responseText);
        switch (r.status) {
          case "SUCCESS":
          Ringcaptcha._render_pin_slide(r);
          break;
          case "ERROR":
          document.body.dispatchEvent(RingcaptchaEvents.invalidNumberEnteredEvent);
          var g = Ringcaptcha.$('ringcaptcha_user_phone');
          Ringcaptcha.verifyClicked = false;
          g.className = "error";
          switch(r.message) {
            case "ERROR_INVALID_NUMBER":
            g = RingcaptchaStr.invalid_phone;
            Ringcaptcha.m_errorShow(g);
            break;
            case "ERROR_COUNTRY_NOT_SUPPORTED":
            g = RingcaptchaStr.invalid_country;
            Ringcaptcha.m_errorShow(g);
            break;
            case "ERROR_INVALID_NUMBER_LENGTH":
            g = RingcaptchaStr.invalid_phone_length;
            Ringcaptcha.m_errorShow(g);
            break;
            default:
            Ringcaptcha._render_error_slide(r, true);
          }
          break;
        }
      },
      error: function (jx) {
        Ringcaptcha.verifyClicked = false;
        document.body.dispatchEvent(RingcaptchaEvents.invalidNumberEnteredEvent);
      }
    });
    b.send(f);
    return !1
    }


    Ringcaptcha._ajax = function (m, u, o) {
      var jx = false;
      if (Ringcaptcha._is_ie() && typeof XDomainRequest != "undefined") {
        jx = new XDomainRequest();
        jx.open(m, u);
        jx.onload = function() { (typeof o.success != "undefined") && o.success(jx) };
        jx.onerror = function() { (typeof o.error != "undefined") && o.error(jx) };
      } else {
        jx = new XMLHttpRequest();
        jx.open(m, u, true);
        jx.setRequestHeader("Content-Type","text/plain");
        jx.onreadystatechange = function() {
          if(jx.readyState == 4 && jx.status == 200 && typeof o.success !== "undefined"){ 
            if(u.split("/")[u.split("/").length-1] === "code") document.body.dispatchEvent(RingcaptchaEvents.successfulPinRequestSentEvent);
            o.success(jx);
            
          }else if(jx.readyState == 4 && typeof o.error !== "undefined") o.error(jx);
        };
      }
      return jx;
    }

