var RingcaptchaTemplates = {};
RingcaptchaTemplates.PhoneHtml = '<div id="ringcaptcha"> <span id="ringcaptcha_brand_logo"></span> <span id="ringcaptcha_title"></span> <div id="ringcaptcha_phone_container"> <div id="ringcaptcha_country_selector"> <div id="ringcaptcha_country_flag"></div> <div id="ringcaptcha_country_code"></div><input type="hidden" id="ringcaptcha_country_code_o" value=""> </div> <div id="ringcaptcha_country_dropdown"></div> <input id="ringcaptcha_user_phone" name="ringcaptcha_user_phone" type="text" autocomplete="off" autocorrect="off" autocapitalize="off" /> </div> <a id="ringcaptcha_verify_button" href="#"></a> <span id="ringcaptcha_instruction"></span> </div>';
RingcaptchaTemplates.PinHtml = '<div id="ringcaptcha"> <span id="ringcaptcha_brand_logo"></span> <span id="ringcaptcha_title"></span> <div id="ringcaptcha_pin_container"> <input id="ringcaptcha_pin_code" name="ringcaptcha_pin_code" type="text" autocomplete="off" autocorrect="off" autocapitalize="off" /> </div> <div id="ringcaptcha_toolbar"> <a id="ringcaptcha_help_button" href="javascript:void(0)"></a> <a id="ringcaptcha_reload_button" href="#"></a> <div id="ringcaptcha_timer"></div> </div> <div class="clear"></div> <div id="ringcaptcha_pin_instruction"><div id="ringcaptcha_enterpin"></div></div><span id="ringcaptcha_help_text"></span> </div>';
RingcaptchaTemplates.ErrorHtml = '<div id="ringcaptcha"><span id="ringcaptcha_brand_logo"></span><div id="ringcaptcha_err_icon"><span id="ringcaptcha_err_message"></span></div></div>';
RingcaptchaTemplates.AllCss = '.ringcaptcha_reload_disabled{background-image:url(IMGROOT/refresh-disabled.png) !important; background-color:#E7E7E7 !important; border:1px solid DADADA !important; } /* Mini Css Reset */ html body #ringcaptcha div, html body #ringcaptcha span, html body #ringcaptcha applet, html body #ringcaptcha object, html body #ringcaptcha p, html body #ringcaptcha a, html body #ringcaptcha em, html body #ringcaptcha img, html body #ringcaptcha label, html body #ringcaptcha embed {-webkit-box-sizing:content-box; -moz-box-sizing:content-box; box-sizing:content-box; margin:0; padding:0; border:0; font-size:12px; font-weight:normal; font-family:arial,helvetica,sans-serif; vertical-align:baseline; line-height:1.2; background:transparent; -moz-border-radius: 4px; -webkit-border-radius: 4px; -khtml-border-radius: 4px; border-radius: 4px; } html body #ringcaptcha :focus {outline:none; } html body #ringcaptcha input {-webkit-box-sizing:content-box; -moz-box-sizing:content-box; box-sizing:content-box; } #ringcaptcha {float:left; border:1px solid #EAEAEA; margin:0; padding:0; background:#FFF; width:400px; height:146px; font-family:arial,helvetica,sans-serif; text-align:left; -moz-border-radius: 4px; -webkit-border-radius: 4px; -khtml-border-radius: 4px; border-radius: 4px; -moz-box-shadow: inset 0px 1px 0px #d5d5d5; box-shadow: inset 0px 1px 0px #d5d5d5; -webkit-box-shadow: inset 0px 1px 0px #d5d5d5; } #ringcaptcha_brand_logo {display:block; margin:7px 0 0 295px !important; width:96px; height:21px; background:url(IMGLABEL/ringcaptcha_logo.gif) no-repeat !important; } #ringcaptcha_title {display:block; font-size:13px !important; font-weight:bold !important; margin-left:10px !important; margin-top: 7px !important; color:#2F2F2F; } /*- modificaciones Ale -*/ #ringcaptcha_title a.helptxt{display: inline-block; text-decoration: none; color:#a7a7a7; font-size:10px; font-weight:normal; margin:0 0 3px 7px; vertical-align: middle !important;} #ringcaptcha_title a.helptxt:hover{color:#333 } #ringcaptcha_title a.helptxtex{margin:1px 0 0 0; width:125px; text-align:right;} #ringcaptcha_title a.helptxterr{color: red; }/*-----*/ #ringcaptcha_instruction {float:left; display:block; margin:11px 0 0 10px !important; width:315px; color:#2F2F2F; font-size:11px !important; } #ringcaptcha_phone_container {float:left; display:inline-block; height:28px; width:308px; margin:4px 0 0 10px !important; background:white !important; border:1px solid #C0C0C0 !important; } #ringcaptcha_country_selector {float:left; display:inline-block; padding:2px 0 0 5px !important; height:26px; width:75px; background:url(IMGROOT/arrow-down-icon.png) center right no-repeat !important; cursor:pointer; } #ringcaptcha_country_flag {display:inline-block; float:left; height:24px; width:24px; background-image:url(IMGROOT/ringcaptcha-country-flag-24.png) !important; } #ringcaptcha #ringcaptcha_country_code {display:inline-block; float:left; padding:4px 3px; height:17px; width:29px; font-size:14px; } #ringcaptcha_phone_container input[type="text"]:hover {width:222px; height:28px; -moz-box-shadow:inset 0px 0px 5px rgba(0,0,0,0.20); box-shadow:inset 0px 0px 5px rgba(0,0,0,0.20); -webkit-box-shadow:inset 0px 0px 5px rgba(0,0,0,0.20); } #ringcaptcha_phone_container input[type="text"]:focus {outline:none; border:1px solid #4D90FE !important; width:221px; height:26px; -moz-box-shadow:inset 0px 0px 5px rgba(0,0,0,0.20); box-shadow:inset 0px 0px 5px rgba(0,0,0,0.20); -webkit-box-shadow:inset 0px 0px 5px rgba(0,0,0,0.20); } #ringcaptcha_phone_container input[type="text"] {margin:0; padding:0; border:none; width:222px; height:28px; padding-left:5px; font-size:13px; background:#FFF; -moz-border-radius:0 4px 4px 0; -webkit-border-radius:0 4px 4px 0; -khtml-border-radius:0 4px 4px 0; border-radius:0 4px 4px 0; border-left: 1px solid #C0C0C0 !important;} #ringcaptcha_user_phone.error {border:1px solid #DD4B39; height:28px !important; color:#DD4B39; } #ringcaptcha_country_selector:hover {background-color:#EEE !important; } #ringcaptcha_verify_button {float:left; display:inline-block; background:#5F5F5F !important; border:1px solid #393939 !important; color:#FFF; text-decoration:none; height:21px; width:62px; font-weight:bold !important; padding:7px 0 0 0 !important; text-align:center; margin:4px 0 0 7px !important; text-shadow:1px 1px 0px #393939; filter:dropshadow(color=#393939, offx=1, offy=1); } #ringcaptcha_verify_button:hover {border:1px #CECECE solid !important; background-color: #E1E1E1 !important; color:#3282E6 !important; text-shadow:1px 1px 0px white; filter:dropshadow(color=#fff, offx=1, offy=1); } #ringcaptcha_verify_button:active {text-decoration:underline; } #ringcaptcha_help_text {float:left; display:block; margin:5px 0 0 10px !important; color:#2F2F2F; font-size:10px !important; width:360px; } #ringcaptcha #ringcaptcha_pin_container {float:left; display:inline-block; height:40px; width:344px; margin:4px 0 0 10px !important; background:#E7E7E7 !important; -moz-border-radius: 0; -webkit-border-radius: 0; -khtml-border-radius: 0; border-radius: 0; } #ringcaptcha_pin_container input[type="text"]{margin:6px 10px; padding:0 0 0 5px; width:317px; height:26px; background:#FFF; border:1px #c0c0c0 solid; -moz-border-radius:4px; -webkit-border-radius:4px; -khtml-border-radius:4px; border-radius:4px; } #ringcaptcha_pin_container input[type="text"]:hover {width:317px; height:26px; border:1px #c0c0c0 solid; -moz-box-shadow:inset 0px 0px 5px rgba(0,0,0,0.20); box-shadow:inset 0px 0px 5px rgba(0,0,0,0.20); -webkit-box-shadow:inset 0px 0px 5px rgba(0,0,0,0.20); } #ringcaptcha_pin_container input[type="text"]:focus {outline:none; border:1px solid #4D90FE; width:317px; height:26px; -moz-box-shadow:inset 0px 0px 5px rgba(0,0,0,0.20); box-shadow:inset 0px 0px 5px rgba(0,0,0,0.20); -webkit-box-shadow:inset 0px 0px 5px rgba(0,0,0,0.20); } #ringcaptcha_toolbar {float:left; height:40px; width:20px; margin:7px 0 0 10px !important; } #ringcaptcha_help_button {display:block; width:17px; height:17px; border:1px #414141 solid !important; margin:0 0 2px 0 !important; background:#5F5F5F url(IMGROOT/help.png) center center no-repeat !important; } #ringcaptcha_reload_button {display:none; width:17px; height:17px; border:1px #414141 solid !important; margin:0 0 2px 0 !important; background:#5F5F5F url(IMGROOT/refresh.png) center center no-repeat !important; } #ringcaptcha_reload_button.ringcaptcha_reload_disabled {background-image:url(IMGROOT/refresh-disabled.png) !important; background-color:#E7E7E7 !important; border:1px solid #DADADA !important; } #ringcaptcha_reload_bubble {position:absolute; display:none; -moz-border-radius:5px; -webkit-border-radius:5px; -khtml-border-radius:5px; border-radius:5px; border:1px solid #CCC !important; padding:5px !important; width:70px; box-shadow:2px 2px 5px rgba(0,0,0,0.10); -moz-box-shadow:2px 2px 5px rgba(0,0,0,0.10); -webkit-box-shadow:2px 2px 5px rgba(0,0,0,0.10); background:#FFF !important; margin:-15px 0 0 15px !important; text-align:center; z-index:99999; } #ringcaptcha_timer {display:block; width:17px; height:14px; border:1px #DADADA solid !important; margin:0 0 2px 0 !important; padding:3px 0 0 0 !important; font-size:11px !important; text-align:center; line-height:1 !important; background:#E7E7E7 !important; } #ringcaptcha_help_button:hover, #ringcaptcha_reload_button:hover {background-color:#323232; border:1px #000 solid; } #ringcaptcha_country_dropdown {position:absolute; display:none; margin:28px 0 0 -1px !important; padding:0; border:1px solid #CCC !important; width:308px; height:150px; background:#FFF !important; overflow:auto; } #ringcaptcha #ringcaptcha_country_dropdown input[type="text"] {border: 1px solid #CCCCCC; border-radius: 4px 4px 4px 4px; color: #666666; display:block; float:none; height:27px; margin:7px auto; padding:0 5px; width: 90%; } #ringcaptcha #ringcaptcha_country_dropdown input[type="text"]:focus {outline:none; border:1px solid #4D90FE; -moz-box-shadow:inset 0px 0px 5px rgba(0,0,0,0.20); box-shadow:inset 0px 0px 5px rgba(0,0,0,0.20); -webkit-box-shadow:inset 0px 0px 5px rgba(0,0,0,0.20); } #ringcaptcha #ringcaptcha_country_dropdown a:focus{background-color: #eee;} #ringcaptcha_err_icon {float:left; width:26px; height:26px; margin:20px 0 0 50px !important; background-image:url(IMGROOT/widget_errors.gif) !important; background-repeat:no-repeat !important; } #ringcaptcha_err_message {float:left; display:block; margin:0 0 0 40px !important; width:300px; font-size:13px !important; font-weight:bold !important; } #ringcaptcha_err_try_again {float:left; display:block; margin:0 0 0 40px !important; min-width:60px; color:#000; text-decoration:none; } #ringcaptcha_err_try_again:hover {text-decoration:underline; } .ringcaptcha_country {display:block; height:24px; margin:2px 0 !important; padding:0 0 0 10px !important; text-decoration:none; } .ringcaptcha_country:hover {background-color:#EEE !important; text-decoration:none !important; } .ringcaptcha_iso_code {display:none; } .ringcaptcha_country_name {display:inline-block; height:24px; padding:0 0 0 30px !important; font-size:13px !important; color:#444; line-height:2 !important; background-image:url(IMGROOT/ringcaptcha-country-flag-24.png) !important; background-repeat:no-repeat !important; } .ringcaptcha_country_code {font-size:13px !important; margin:0 0 0 5px !important; padding: 6px 0 0 0 !important; color:#666; } .ringcaptcha_country_separator {border-top:1px solid #EBEBEB !important; margin:4px 0 5px 0 !important; } .ringcaptcha-err-invalid_site {background-position:-0px -0px !important; } .ringcaptcha-err-invalid_session {background-position:-0px -26px !important; } /* Estilos para thin-scroll similar chrome */ #ringcaptcha ::-webkit-scrollbar {width: 15px; } #ringcaptcha ::-webkit-scrollbar-thumb {-webkit-box-shadow:inset 0 0 99px rgba(0,0,0,.2); border:solid transparent; border-width:6px 4px; } #ringcaptcha ::-webkit-scrollbar-thumb:vertical{min-height:40px; } #ringcaptcha ::-webkit-scrollbar-thumb:hover {-webkit-box-shadow:inset 0 0 99px rgba(0,0,0,.4); } #ringcaptcha #ringcaptcha_pin_instruction{width: 344px; display: block; margin: -3px 0px 0px 10px; text-align:center; padding:0px;} #ringcaptcha #ringcaptcha_enterpin{ margin:auto; color:#FFF; background:#777777; -moz-border-radius: 0 0 4px 4px; -webkit-border-radius: 0 0 4px 4px; -khtml-border-radius: 0 0 4px 4px; border-radius: 0 0 4px 4px; width:280px; padding:3px 7px; font-size:11px; position:relative; background: -moz-linear-gradient(top, #777777 0%, #616161 100%); /* FF3.6+ */ background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #777777), color-stop(100%, #616161)); /* Chrome,Safari4+ */ background: -webkit-linear-gradient(top, #777777 0%, #616161 100%); /* Chrome10+,Safari5.1+ */ background: -o-linear-gradient(top, #777777 0%, #616161 100%); /* Opera 11.10+ */ background: -ms-linear-gradient(top, #777777 0%, #616161 100%); /* IE10+ */ background: linear-gradient(top, #777777 0%, #616161 100%); /* W3C */ filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#777777", endColorstr="#616161", GradientType=0 ); /* IE6-9 */ } .clear{clear:both;}',
RingcaptchaTemplates.CountryCSS = '.ringcaptcha-country-flag-zw{background-position:0px 0px !important;}.ringcaptcha-country-flag-zm{background-position:0px -24px !important;}.ringcaptcha-country-flag-za{background-position:0px -48px !important;}.ringcaptcha-country-flag-yt{background-position:0px -72px !important;}.ringcaptcha-country-flag-ye{background-position:0px -96px !important;}.ringcaptcha-country-flag-ws{background-position:0px -120px !important;}.ringcaptcha-country-flag-wf{background-position:0px -144px !important;}.ringcaptcha-country-flag-vu{background-position:0px -168px !important;}.ringcaptcha-country-flag-vn{background-position:0px -192px !important;}.ringcaptcha-country-flag-vi{background-position:0px -216px !important;}.ringcaptcha-country-flag-vg{background-position:0px -240px !important;}.ringcaptcha-country-flag-ve{background-position:0px -264px !important;}.ringcaptcha-country-flag-vc{background-position:0px -288px !important;}.ringcaptcha-country-flag-va{background-position:0px -312px !important;}.ringcaptcha-country-flag-uz{background-position:0px -336px !important;}.ringcaptcha-country-flag-uy{background-position:0px -360px !important;}.ringcaptcha-country-flag-us{background-position:0px -384px !important;}.ringcaptcha-country-flag-um{background-position:0px -408px !important;}.ringcaptcha-country-flag-ug{background-position:0px -432px !important;}.ringcaptcha-country-flag-ua{background-position:0px -456px !important;}.ringcaptcha-country-flag-tz{background-position:0px -480px !important;}.ringcaptcha-country-flag-tw{background-position:0px -504px !important;}.ringcaptcha-country-flag-tv{background-position:0px -528px !important;}.ringcaptcha-country-flag-tt{background-position:0px -552px !important;}.ringcaptcha-country-flag-tr{background-position:0px -576px !important;}.ringcaptcha-country-flag-to{background-position:0px -600px !important;}.ringcaptcha-country-flag-tn{background-position:0px -624px !important;}.ringcaptcha-country-flag-tm{background-position:0px -648px !important;}.ringcaptcha-country-flag-tl{background-position:0px -672px !important;}.ringcaptcha-country-flag-tk{background-position:0px -696px !important;}.ringcaptcha-country-flag-tj{background-position:0px -720px !important;}.ringcaptcha-country-flag-th{background-position:0px -744px !important;}.ringcaptcha-country-flag-tg{background-position:0px -768px !important;}.ringcaptcha-country-flag-tf{background-position:0px -792px !important;}.ringcaptcha-country-flag-td{background-position:0px -816px !important;}.ringcaptcha-country-flag-tc{background-position:0px -840px !important;}.ringcaptcha-country-flag-sz{background-position:0px -864px !important;}.ringcaptcha-country-flag-sy{background-position:0px -888px !important;}.ringcaptcha-country-flag-sw{background-position:0px -912px !important;}.ringcaptcha-country-flag-sv{background-position:0px -936px !important;}.ringcaptcha-country-flag-st{background-position:0px -960px !important;}.ringcaptcha-country-flag-ss{background-position:0px -984px !important;}.ringcaptcha-country-flag-sr{background-position:0px -1008px !important;}.ringcaptcha-country-flag-so{background-position:0px -1032px !important;}.ringcaptcha-country-flag-sn{background-position:0px -1056px !important;}.ringcaptcha-country-flag-sm{background-position:0px -1080px !important;}.ringcaptcha-country-flag-sl{background-position:0px -1104px !important;}.ringcaptcha-country-flag-sk{background-position:0px -1128px !important;}.ringcaptcha-country-flag-sj{background-position:0px -1152px !important;}.ringcaptcha-country-flag-si{background-position:0px -1176px !important;}.ringcaptcha-country-flag-sh{background-position:0px -1200px !important;}.ringcaptcha-country-flag-sg{background-position:0px -1224px !important;}.ringcaptcha-country-flag-se{background-position:0px -1248px !important;}.ringcaptcha-country-flag-sd{background-position:0px -1272px !important;}.ringcaptcha-country-flag-sc{background-position:0px -1296px !important;}.ringcaptcha-country-flag-sb{background-position:0px -1320px !important;}.ringcaptcha-country-flag-sa{background-position:0px -1344px !important;}.ringcaptcha-country-flag-rw{background-position:0px -1368px !important;}.ringcaptcha-country-flag-ru{background-position:0px -1392px !important;}.ringcaptcha-country-flag-rs{background-position:0px -1416px !important;}.ringcaptcha-country-flag-ro{background-position:0px -1440px !important;}.ringcaptcha-country-flag-re{background-position:0px -1464px !important;}.ringcaptcha-country-flag-qa{background-position:0px -1488px !important;}.ringcaptcha-country-flag-py{background-position:0px -1512px !important;}.ringcaptcha-country-flag-pw{background-position:0px -1536px !important;}.ringcaptcha-country-flag-pt{background-position:0px -1560px !important;}.ringcaptcha-country-flag-ps{background-position:0px -1584px !important;}.ringcaptcha-country-flag-pr{background-position:0px -1608px !important;}.ringcaptcha-country-flag-pn{background-position:0px -1632px !important;}.ringcaptcha-country-flag-pm{background-position:0px -1656px !important;}.ringcaptcha-country-flag-pl{background-position:0px -1680px !important;}.ringcaptcha-country-flag-pk{background-position:0px -1704px !important;}.ringcaptcha-country-flag-ph{background-position:0px -1728px !important;}.ringcaptcha-country-flag-pg{background-position:0px -1752px !important;}.ringcaptcha-country-flag-pf{background-position:0px -1776px !important;}.ringcaptcha-country-flag-pe{background-position:0px -1800px !important;}.ringcaptcha-country-flag-pa{background-position:0px -1824px !important;}.ringcaptcha-country-flag-om{background-position:0px -1848px !important;}.ringcaptcha-country-flag-nz{background-position:0px -1872px !important;}.ringcaptcha-country-flag-nu{background-position:0px -1896px !important;}.ringcaptcha-country-flag-nr{background-position:0px -1920px !important;}.ringcaptcha-country-flag-np{background-position:0px -1944px !important;}.ringcaptcha-country-flag-no{background-position:0px -1968px !important;}.ringcaptcha-country-flag-nl{background-position:0px -1992px !important;}.ringcaptcha-country-flag-ni{background-position:0px -2016px !important;}.ringcaptcha-country-flag-ng{background-position:0px -2040px !important;}.ringcaptcha-country-flag-nf{background-position:0px -2064px !important;}.ringcaptcha-country-flag-ne{background-position:0px -2088px !important;}.ringcaptcha-country-flag-nc{background-position:0px -2112px !important;}.ringcaptcha-country-flag-na{background-position:0px -2136px !important;}.ringcaptcha-country-flag-mz{background-position:0px -2160px !important;}.ringcaptcha-country-flag-my{background-position:0px -2184px !important;}.ringcaptcha-country-flag-mx{background-position:0px -2208px !important;}.ringcaptcha-country-flag-mw{background-position:0px -2232px !important;}.ringcaptcha-country-flag-mv{background-position:0px -2256px !important;}.ringcaptcha-country-flag-mu{background-position:0px -2280px !important;}.ringcaptcha-country-flag-mt{background-position:0px -2304px !important;}.ringcaptcha-country-flag-ms{background-position:0px -2328px !important;}.ringcaptcha-country-flag-mr{background-position:0px -2352px !important;}.ringcaptcha-country-flag-mq{background-position:0px -2376px !important;}.ringcaptcha-country-flag-mp{background-position:0px -2400px !important;}.ringcaptcha-country-flag-mo{background-position:0px -2424px !important;}.ringcaptcha-country-flag-mn{background-position:0px -2448px !important;}.ringcaptcha-country-flag-mm{background-position:0px -2472px !important;}.ringcaptcha-country-flag-ml{background-position:0px -2496px !important;}.ringcaptcha-country-flag-mk{background-position:0px -2520px !important;}.ringcaptcha-country-flag-mh{background-position:0px -2544px !important;}.ringcaptcha-country-flag-mg{background-position:0px -2568px !important;}.ringcaptcha-country-flag-mf{background-position:0px -2592px !important;}.ringcaptcha-country-flag-me{background-position:0px -2616px !important;}.ringcaptcha-country-flag-md{background-position:0px -2640px !important;}.ringcaptcha-country-flag-mc{background-position:0px -2664px !important;}.ringcaptcha-country-flag-ma{background-position:0px -2688px !important;}.ringcaptcha-country-flag-ly{background-position:0px -2712px !important;}.ringcaptcha-country-flag-lv{background-position:0px -2736px !important;}.ringcaptcha-country-flag-lu{background-position:0px -2760px !important;}.ringcaptcha-country-flag-lt{background-position:0px -2784px !important;}.ringcaptcha-country-flag-ls{background-position:0px -2808px !important;}.ringcaptcha-country-flag-lr{background-position:0px -2832px !important;}.ringcaptcha-country-flag-lk{background-position:0px -2856px !important;}.ringcaptcha-country-flag-li{background-position:0px -2880px !important;}.ringcaptcha-country-flag-lc{background-position:0px -2904px !important;}.ringcaptcha-country-flag-lb{background-position:0px -2928px !important;}.ringcaptcha-country-flag-la{background-position:0px -2952px !important;}.ringcaptcha-country-flag-kz{background-position:0px -2976px !important;}.ringcaptcha-country-flag-ky{background-position:0px -3000px !important;}.ringcaptcha-country-flag-kw{background-position:0px -3024px !important;}.ringcaptcha-country-flag-kr{background-position:0px -3048px !important;}.ringcaptcha-country-flag-kp{background-position:0px -3072px !important;}.ringcaptcha-country-flag-kn{background-position:0px -3096px !important;}.ringcaptcha-country-flag-km{background-position:0px -3120px !important;}.ringcaptcha-country-flag-ki{background-position:0px -3144px !important;}.ringcaptcha-country-flag-kh{background-position:0px -3168px !important;}.ringcaptcha-country-flag-kg{background-position:0px -3192px !important;}.ringcaptcha-country-flag-ke{background-position:0px -3216px !important;}.ringcaptcha-country-flag-jp{background-position:0px -3240px !important;}.ringcaptcha-country-flag-jo{background-position:0px -3264px !important;}.ringcaptcha-country-flag-jm{background-position:0px -3288px !important;}.ringcaptcha-country-flag-je{background-position:0px -3312px !important;}.ringcaptcha-country-flag-it{background-position:0px -3336px !important;}.ringcaptcha-country-flag-is{background-position:0px -3360px !important;}.ringcaptcha-country-flag-ir{background-position:0px -3384px !important;}.ringcaptcha-country-flag-iq{background-position:0px -3408px !important;}.ringcaptcha-country-flag-io{background-position:0px -3432px !important;}.ringcaptcha-country-flag-in{background-position:0px -3456px !important;}.ringcaptcha-country-flag-im{background-position:0px -3480px !important;}.ringcaptcha-country-flag-il{background-position:0px -3504px !important;}.ringcaptcha-country-flag-ie{background-position:0px -3528px !important;}.ringcaptcha-country-flag-id{background-position:0px -3552px !important;}.ringcaptcha-country-flag-hu{background-position:0px -3576px !important;}.ringcaptcha-country-flag-ht{background-position:0px -3600px !important;}.ringcaptcha-country-flag-hr{background-position:0px -3624px !important;}.ringcaptcha-country-flag-hn{background-position:0px -3648px !important;}.ringcaptcha-country-flag-hm{background-position:0px -3672px !important;}.ringcaptcha-country-flag-hk{background-position:0px -3696px !important;}.ringcaptcha-country-flag-gy{background-position:0px -3720px !important;}.ringcaptcha-country-flag-gw{background-position:0px -3744px !important;}.ringcaptcha-country-flag-gu{background-position:0px -3768px !important;}.ringcaptcha-country-flag-gt{background-position:0px -3792px !important;}.ringcaptcha-country-flag-gs{background-position:0px -3816px !important;}.ringcaptcha-country-flag-gr{background-position:0px -3840px !important;}.ringcaptcha-country-flag-gq{background-position:0px -3864px !important;}.ringcaptcha-country-flag-gp{background-position:0px -3888px !important;}.ringcaptcha-country-flag-gn{background-position:0px -3912px !important;}.ringcaptcha-country-flag-gm{background-position:0px -3936px !important;}.ringcaptcha-country-flag-gl{background-position:0px -3960px !important;}.ringcaptcha-country-flag-gi{background-position:0px -3984px !important;}.ringcaptcha-country-flag-gh{background-position:0px -4008px !important;}.ringcaptcha-country-flag-gg{background-position:0px -4032px !important;}.ringcaptcha-country-flag-gf{background-position:0px -4056px !important;}.ringcaptcha-country-flag-ge{background-position:0px -4080px !important;}.ringcaptcha-country-flag-gd{background-position:0px -4104px !important;}.ringcaptcha-country-flag-gb{background-position:0px -4128px !important;}.ringcaptcha-country-flag-ga{background-position:0px -4152px !important;}.ringcaptcha-country-flag-fr{background-position:0px -4176px !important;}.ringcaptcha-country-flag-fo{background-position:0px -4200px !important;}.ringcaptcha-country-flag-fm{background-position:0px -4224px !important;}.ringcaptcha-country-flag-fk{background-position:0px -4248px !important;}.ringcaptcha-country-flag-fj{background-position:0px -4272px !important;}.ringcaptcha-country-flag-fi{background-position:0px -4296px !important;}.ringcaptcha-country-flag-et{background-position:0px -4320px !important;}.ringcaptcha-country-flag-es{background-position:0px -4344px !important;}.ringcaptcha-country-flag-er{background-position:0px -4368px !important;}.ringcaptcha-country-flag-eh{background-position:0px -4392px !important;}.ringcaptcha-country-flag-eg{background-position:0px -4416px !important;}.ringcaptcha-country-flag-ee{background-position:0px -4440px !important;}.ringcaptcha-country-flag-ec{background-position:0px -4464px !important;}.ringcaptcha-country-flag-dz{background-position:0px -4488px !important;}.ringcaptcha-country-flag-do{background-position:0px -4512px !important;}.ringcaptcha-country-flag-dm{background-position:0px -4536px !important;}.ringcaptcha-country-flag-dk{background-position:0px -4560px !important;}.ringcaptcha-country-flag-dj{background-position:0px -4584px !important;}.ringcaptcha-country-flag-de{background-position:0px -4608px !important;}.ringcaptcha-country-flag-cz{background-position:0px -4632px !important;}.ringcaptcha-country-flag-cy{background-position:0px -4656px !important;}.ringcaptcha-country-flag-cx{background-position:0px -4680px !important;}.ringcaptcha-country-flag-cw{background-position:0px -4704px !important;}.ringcaptcha-country-flag-cv{background-position:0px -4728px !important;}.ringcaptcha-country-flag-cu{background-position:0px -4752px !important;}.ringcaptcha-country-flag-cr{background-position:0px -4776px !important;}.ringcaptcha-country-flag-co{background-position:0px -4800px !important;}.ringcaptcha-country-flag-cn{background-position:0px -4824px !important;}.ringcaptcha-country-flag-cm{background-position:0px -4848px !important;}.ringcaptcha-country-flag-cl{background-position:0px -4872px !important;}.ringcaptcha-country-flag-ck{background-position:0px -4896px !important;}.ringcaptcha-country-flag-ci{background-position:0px -4920px !important;}.ringcaptcha-country-flag-ch{background-position:0px -4944px !important;}.ringcaptcha-country-flag-cg{background-position:0px -4968px !important;}.ringcaptcha-country-flag-cf{background-position:0px -4992px !important;}.ringcaptcha-country-flag-cd{background-position:0px -5016px !important;}.ringcaptcha-country-flag-cc{background-position:0px -5040px !important;}.ringcaptcha-country-flag-ca{background-position:0px -5064px !important;}.ringcaptcha-country-flag-bz{background-position:0px -5088px !important;}.ringcaptcha-country-flag-by{background-position:0px -5112px !important;}.ringcaptcha-country-flag-bw{background-position:0px -5136px !important;}.ringcaptcha-country-flag-bv{background-position:0px -5160px !important;}.ringcaptcha-country-flag-bt{background-position:0px -5184px !important;}.ringcaptcha-country-flag-bs{background-position:0px -5208px !important;}.ringcaptcha-country-flag-br{background-position:0px -5232px !important;}.ringcaptcha-country-flag-bo{background-position:0px -5256px !important;}.ringcaptcha-country-flag-bn{background-position:0px -5280px !important;}.ringcaptcha-country-flag-bm{background-position:0px -5304px !important;}.ringcaptcha-country-flag-bl{background-position:0px -5328px !important;}.ringcaptcha-country-flag-bj{background-position:0px -5352px !important;}.ringcaptcha-country-flag-bi{background-position:0px -5376px !important;}.ringcaptcha-country-flag-bh{background-position:0px -5400px !important;}.ringcaptcha-country-flag-bg{background-position:0px -5424px !important;}.ringcaptcha-country-flag-bf{background-position:0px -5448px !important;}.ringcaptcha-country-flag-be{background-position:0px -5472px !important;}.ringcaptcha-country-flag-bd{background-position:0px -5496px !important;}.ringcaptcha-country-flag-bb{background-position:0px -5520px !important;}.ringcaptcha-country-flag-ba{background-position:0px -5544px !important;}.ringcaptcha-country-flag-az{background-position:0px -5568px !important;}.ringcaptcha-country-flag-ax{background-position:0px -5592px !important;}.ringcaptcha-country-flag-aw{background-position:0px -5616px !important;}.ringcaptcha-country-flag-au{background-position:0px -5640px !important;}.ringcaptcha-country-flag-at{background-position:0px -5664px !important;}.ringcaptcha-country-flag-as{background-position:0px -5688px !important;}.ringcaptcha-country-flag-ar{background-position:0px -5712px !important;}.ringcaptcha-country-flag-aq{background-position:0px -5736px !important;}.ringcaptcha-country-flag-ao{background-position:0px -5760px !important;}.ringcaptcha-country-flag-an{background-position:0px -5784px !important;}.ringcaptcha-country-flag-am{background-position:0px -5808px !important;}.ringcaptcha-country-flag-al{background-position:0px -5832px !important;}.ringcaptcha-country-flag-ai{background-position:0px -5856px !important;}.ringcaptcha-country-flag-ag{background-position:0px -5880px !important;}.ringcaptcha-country-flag-af{background-position:0px -5904px !important;}.ringcaptcha-country-flag-ae{background-position:0px -5928px !important;}.ringcaptcha-country-flag-ad{background-position:0px -5952px !important;}',
RingcaptchaCountries = [{name: 'Afghanistan', code: '+93', iso: 'AF'},{name: 'Albania', code: '+355', iso: 'AL'},{name: 'Algeria', code: '+213', iso: 'DZ'},{name: 'American Samoa', code: '+1684', iso: 'AS'},{name: 'Andorra', code: '+376', iso: 'AD'},{name: 'Angola', code: '+244', iso: 'AO'},{name: 'Anguilla', code: '+1264', iso: 'AI'},{name: 'Antarctic Territories', code: '+672', iso: 'AQ'},{name: 'Antigua &amp; Barbuda', code: '+1268', iso: 'AG'},{name: 'Antilles', code: '+599', iso: 'AN'},{name: 'Argentina', code: '+54', iso: 'AR'},{name: 'Armenia', code: '+374', iso: 'AM'},{name: 'Aruba', code: '+297', iso: 'AW'},{name: 'Australia', code: '+61', iso: 'AU'},{name: 'Austria', code: '+43', iso: 'AT'},{name: 'Azerbaijan', code: '+994', iso: 'AZ'},{name: 'Bahamas', code: '+1242', iso: 'BS'},{name: 'Bahrain', code: '+973', iso: 'BH'},{name: 'Bangladesh', code: '+880', iso: 'BD'},{name: 'Barbados', code: '+1246', iso: 'BB'},{name: 'Belarus', code: '+375', iso: 'BY'},{name: 'Belgium', code: '+32', iso: 'BE'},{name: 'Belize', code: '+501', iso: 'BZ'},{name: 'Benin', code: '+229', iso: 'BJ'},{name: 'Bermuda', code: '+1441', iso: 'BM'},{name: 'Bhutan', code: '+975', iso: 'BT'},{name: 'Bolivia', code: '+591', iso: 'BO'},{name: 'Bosnia &amp; H.', code: '+387', iso: 'BA'},{name: 'Botswana', code: '+267', iso: 'BW'},{name: 'Brazil', code: '+55', iso: 'BR'},{name: 'Brunei', code: '+673', iso: 'BN'},{name: 'Bulgaria', code: '+359', iso: 'BG'},{name: 'Burkina Faso', code: '+226', iso: 'BF'},{name: 'Burundi', code: '+257', iso: 'BI'},{name: 'Cambodia', code: '+855', iso: 'KH'},{name: 'Cameroon', code: '+237', iso: 'CM'},{name: 'Canada', code: '+1', iso: 'CA'},{name: 'Cape Verde Island', code: '+238', iso: 'CV'},{name: 'Cayman Islands', code: '+1345', iso: 'KY'},{name: 'Central African Rep.', code: '+236', iso: 'CF'},{name: 'Chad', code: '+235', iso: 'TD'},{name: 'Chile', code: '+56', iso: 'CL'},{name: 'China', code: '+86', iso: 'CN'},{name: 'Colombia', code: '+57', iso: 'CO'},{name: 'Comoros', code: '+269', iso: 'KM'},{name: 'Cook Islands', code: '+682', iso: 'CK'},{name: 'Costa Rica', code: '+506', iso: 'CR'},{name: 'Cote D&#039;Ivoire', code: '+225', iso: 'CI'},{name: 'Croatia', code: '+385', iso: 'HR'},{name: 'Cuba', code: '+53', iso: 'CU'},{name: 'Cyprus South', code: '+357', iso: 'CY'},{name: 'Czech Republic', code: '+420', iso: 'CZ'},{name: 'Dem Rep Congo', code: '+243', iso: 'CD'},{name: 'Denmark', code: '+45', iso: 'DK'},{name: 'Diego Garcia', code: '+246', iso: 'IO'},{name: 'Djibouti', code: '+253', iso: 'DJ'},{name: 'Dominica', code: '+1767', iso: 'DM'},{name: 'Ecuador', code: '+593', iso: 'EC'},{name: 'Egypt', code: '+20', iso: 'EG'},{name: 'El Salvador', code: '+503', iso: 'SV'},{name: 'Equatorial Guinea', code: '+240', iso: 'GQ'},{name: 'Eritrea', code: '+291', iso: 'ER'},{name: 'Estonia', code: '+372', iso: 'EE'},{name: 'Ethiopia', code: '+251', iso: 'ET'},{name: 'Faeroe Islands', code: '+298', iso: 'FO'},{name: 'Falkland Islands', code: '+500', iso: 'FK'},{name: 'Fiji', code: '+679', iso: 'FJ'},{name: 'Finland', code: '+358', iso: 'FI'},{name: 'France', code: '+33', iso: 'FR'},{name: 'French Guiana', code: '+594', iso: 'GF'},{name: 'French Polynesia', code: '+689', iso: 'PF'},{name: 'Gabon', code: '+241', iso: 'GA'},{name: 'Gambia', code: '+220', iso: 'GM'},{name: 'Georgia', code: '+995', iso: 'GE'},{name: 'Germany', code: '+49', iso: 'DE'},{name: 'Ghana', code: '+233', iso: 'GH'},{name: 'Gibraltar', code: '+350', iso: 'GI'},{name: 'Greece', code: '+30', iso: 'GR'},{name: 'Greenland', code: '+299', iso: 'GL'},{name: 'Grenada', code: '+1473', iso: 'GD'},{name: 'Guam', code: '+1671', iso: 'GU'},{name: 'Guatemala', code: '+502', iso: 'GT'},{name: 'Guinea', code: '+224', iso: 'GN'},{name: 'Guyana', code: '+592', iso: 'GY'},{name: 'Haiti', code: '+509', iso: 'HT'},{name: 'Honduras', code: '+504', iso: 'HN'},{name: 'Hong Kong', code: '+852', iso: 'HK'},{name: 'Hungary', code: '+36', iso: 'HU'},{name: 'Iceland', code: '+354', iso: 'IS'},{name: 'India', code: '+91', iso: 'IN'},{name: 'Indonesia', code: '+62', iso: 'ID'},{name: 'Iran', code: '+98', iso: 'IR'},{name: 'Iraq', code: '+964', iso: 'IQ'},{name: 'Ireland', code: '+353', iso: 'IE'},{name: 'Israel', code: '+972', iso: 'IL'},{name: 'Italy', code: '+39', iso: 'IT'},{name: 'Jamaica', code: '+1876', iso: 'JM'},{name: 'Japan', code: '+81', iso: 'JP'},{name: 'Jordan', code: '+962', iso: 'JO'},{name: 'Kazakhstan', code: '+77', iso: 'KZ'},{name: 'Kenya', code: '+254', iso: 'KE'},{name: 'Kiribati', code: '+686', iso: 'KI'},{name: 'Korea North', code: '+850', iso: 'KP'},{name: 'Korea South', code: '+82', iso: 'KR'},{name: 'Kuwait', code: '+965', iso: 'KW'},{name: 'Laos', code: '+856', iso: 'LA'},{name: 'Latvia', code: '+371', iso: 'LV'},{name: 'Lebanon', code: '+961', iso: 'LB'},{name: 'Lesotho', code: '+266', iso: 'LS'},{name: 'Liberia', code: '+231', iso: 'LR'},{name: 'Libya', code: '+218', iso: 'LY'},{name: 'Liechtenstein', code: '+423', iso: 'LI'},{name: 'Lithuania', code: '+370', iso: 'LT'},{name: 'Luxembourg', code: '+352', iso: 'LU'},{name: 'Macao', code: '+853', iso: 'MO'},{name: 'Macedonia', code: '+389', iso: 'MK'},{name: 'Madagascar', code: '+261', iso: 'MG'},{name: 'Malawi', code: '+265', iso: 'MW'},{name: 'Malaysia', code: '+60', iso: 'MY'},{name: 'Maldives', code: '+960', iso: 'MV'},{name: 'Mali', code: '+223', iso: 'ML'},{name: 'Malta', code: '+356', iso: 'MT'},{name: 'Marshall Islands', code: '+692', iso: 'MH'},{name: 'Martinique', code: '+596', iso: 'MQ'},{name: 'Mauritania', code: '+222', iso: 'MR'},{name: 'Mauritius', code: '+230', iso: 'MU'},{name: 'Mayotte', code: '+262', iso: 'YT'},{name: 'Mexico', code: '+52', iso: 'MX'},{name: 'Micronesia', code: '+691', iso: 'FM'},{name: 'Moldova', code: '+373', iso: 'MD'},{name: 'Monaco', code: '+377', iso: 'MC'},{name: 'Mongolia', code: '+976', iso: 'MN'},{name: 'Montserrat', code: '+1664', iso: 'MS'},{name: 'Morocco', code: '+212', iso: 'MA'},{name: 'Mozambique', code: '+258', iso: 'MZ'},{name: 'Myanmar', code: '+95', iso: 'MM'},{name: 'Namibia', code: '+264', iso: 'NA'},{name: 'Nauru', code: '+674', iso: 'NR'},{name: 'Nepal', code: '+977', iso: 'NP'},{name: 'Netherlands', code: '+31', iso: 'NL'},{name: 'New Caledonia', code: '+687', iso: 'NC'},{name: 'New Zealand', code: '+64', iso: 'NZ'},{name: 'Nicaragua', code: '+505', iso: 'NI'},{name: 'Niger', code: '+227', iso: 'NE'},{name: 'Niue', code: '+683', iso: 'NU'},{name: 'Norfolk Islands', code: '+6723', iso: 'NF'},{name: 'Northern Marianas', code: '+1670', iso: 'MP'},{name: 'Norway', code: '+47', iso: 'NO'},{name: 'Oman', code: '+968', iso: 'OM'},{name: 'Pakistan', code: '+92', iso: 'PK'},{name: 'Palau', code: '+680', iso: 'PW'},{name: 'Palestine', code: '+970', iso: 'PS'},{name: 'Panama', code: '+507', iso: 'PA'},{name: 'Papua New Guinea', code: '+675', iso: 'PG'},{name: 'Paraguay', code: '+595', iso: 'PY'},{name: 'Peru', code: '+51', iso: 'PE'},{name: 'Philippines', code: '+63', iso: 'PH'},{name: 'Poland', code: '+48', iso: 'PL'},{name: 'Portugal', code: '+351', iso: 'PT'},{name: 'Puerto Rico', code: '+1787', iso: 'PR'},{name: 'Qatar', code: '+974', iso: 'QA'},{name: 'Reunion', code: '+262', iso: 'RE'},{name: 'Romania', code: '+40', iso: 'RO'},{name: 'Russia', code: '+7', iso: 'RU'},{name: 'Rwanda', code: '+250', iso: 'RW'},{name: 'San Marino', code: '+378', iso: 'SM'},{name: 'Sao Tome &amp; Principe', code: '+239', iso: 'ST'},{name: 'Saudi Arabia', code: '+966', iso: 'SA'},{name: 'Senegal', code: '+221', iso: 'SN'},{name: 'Serbia', code: '+381', iso: 'RS'},{name: 'Seychelles', code: '+248', iso: 'SC'},{name: 'Sierra Leone', code: '+232', iso: 'SL'},{name: 'Singapore', code: '+65', iso: 'SG'},{name: 'Slovak Rep', code: '+421', iso: 'SK'},{name: 'Slovenia', code: '+386', iso: 'SI'},{name: 'Solomon Islands', code: '+677', iso: 'SB'},{name: 'Somalia', code: '+252', iso: 'SO'},{name: 'South Africa', code: '+27', iso: 'ZA'},{name: 'Spain', code: '+34', iso: 'ES'},{name: 'Sri Lanka', code: '+94', iso: 'LK'},{name: 'St. Helena', code: '+290', iso: 'SH'},{name: 'St. Kitts &amp; Nevis', code: '+1869', iso: 'KN'},{name: 'St. Lucia', code: '+1758', iso: 'LC'},{name: 'St. Pierre &amp; Miquelon', code: '+508', iso: 'PM'},{name: 'Sudan', code: '+249', iso: 'SD'},{name: 'Suriname', code: '+597', iso: 'SR'},{name: 'Swaziland', code: '+268', iso: 'SZ'},{name: 'Sweden', code: '+46', iso: 'SE'},{name: 'Switzerland', code: '+41', iso: 'CH'},{name: 'Syria', code: '+963', iso: 'SY'},{name: 'Taiwan', code: '+886', iso: 'TW'},{name: 'Tajikstan', code: '+992', iso: 'TJ'},{name: 'Tanzania', code: '+255', iso: 'TZ'},{name: 'Thailand', code: '+66', iso: 'TH'},{name: 'Togo', code: '+228', iso: 'TG'},{name: 'Tokelau', code: '+690', iso: 'TK'},{name: 'Tonga', code: '+676', iso: 'TO'},{name: 'Trinidad &amp; Tobago', code: '+1868', iso: 'TT'},{name: 'Tunisia', code: '+216', iso: 'TN'},{name: 'Turkey', code: '+90', iso: 'TR'},{name: 'Turkmenistan', code: '+993', iso: 'TM'},{name: 'Turks &amp; Caicos', code: '+1649', iso: 'TC'},{name: 'Tuvalu', code: '+688', iso: 'TV'},{name: 'Uganda', code: '+256', iso: 'UG'},{name: 'UK', code: '+44', iso: 'GB'},{name: 'Ukraine', code: '+380', iso: 'UA'},{name: 'United Arab Emirates', code: '+971', iso: 'AE'},{name: 'Uruguay', code: '+598', iso: 'UY'},{name: 'USA', code: '+1', iso: 'US'},{name: 'Uzbekistan', code: '+998', iso: 'UZ'},{name: 'Vanuatu', code: '+678', iso: 'VU'},{name: 'Venezuela', code: '+58', iso: 'VE'},{name: 'Vietnam', code: '+84', iso: 'VN'},{name: 'Virgin Islands GB', code: '+1284', iso: 'VG'},{name: 'Virgin Islands USA', code: '+1340', iso: 'VI'},{name: 'Wallis &amp; Futuna', code: '+681', iso: 'WF'},{name: 'Western Samoa', code: '+685', iso: 'WS'},{name: 'Yemen', code: '+967', iso: 'YE'},{name: 'Zambia', code: '+260', iso: 'ZM'},{name: 'Zimbabwe', code: '+263', iso: 'ZW'}];
var exampleArray = {'AF': '023 456 7890', 'AX': '018 12345678', 'AL': '022 345 678', 'DZ': '012 34 56 78', 'AS': '(684) 622-1234', 'AD': '712 345', 'AO': '222 123 456', 'AI': '(264) 461-2345', 'AG': '(268) 460-1234', 'AR': '011 2345-6789', 'AM': '(010) 123456', 'AW': '521 2345', 'AC': '6889', 'AU': '(02) 1234 5678', 'AT': '01 234567890', 'AZ': '(012) 312 34 56', 'BS': '(242) 345-6789', 'BH': '1700 1234', 'BD': '02-7111234', 'BB': '(246) 234-5678', 'BY': '8 015 245 0911', 'BE': '012 34 56 78', 'BZ': '222-1234', 'BJ': '20 21 12 34', 'BM': '(441) 234-5678', 'BT': '2 345 678', 'BO': '2 2123456', 'BA': '030 123-456', 'BW': '240 1234', 'BR': '(11) 2345-6789', 'IO': '370 9100', 'VG': '(284) 229-1234', 'BN': '234 5678', 'BG': '02 123 456', 'BF': '20 49 12 34', 'BI': '22 20 12 34', 'KH': '023 456 789', 'CM': '22 12 34 56', 'CA': '(204) 234-5678', 'CV': '221 12 34', 'BQ': '715 1234', 'KY': '(345) 222-1234', 'CF': '21 61 23 45', 'TD': '22 50 12 34', 'CL': '(2) 2123 4567', 'CN': '010 1234 5678', 'CX': '(08) 9164 1234', 'CC': '(08) 9162 1234', 'CO': '(1) 2345678', 'KM': '771 23 45', 'CD': '012 34567', 'CG': '22 212 3456', 'CK': '21 234', 'CR': '2212 3456', 'CI': '21 23 45 67', 'HR': '01 2345 678', 'CU': '(07) 1234567', 'CW': '9 415 1234', 'CY': '22 345678', 'CZ': '212 345 678', 'DK': '32 12 34 56', 'DJ': '21 36 00 03', 'DM': '(767) 420-1234', 'DO': '(809) 234-5678', 'EC': '(02) 212-3456', 'EG': '02 34567890', 'SV': '2123 4567', 'GQ': '333 091 234', 'ER': '08 370 362', 'EE': '321 2345', 'ET': '011 111 2345', 'FK': '31234', 'FO': '201234', 'FJ': '321 2345', 'FI': '013 12345678', 'FR': '01 23 45 67 89', 'GF': '0594 10 12 34', 'PF': '40 12 34', 'GA': '01 44 12 34', 'GM': '566 1234', 'GE': '8 322 12 34 56', 'DE': '030 123456', 'GH': '030 234 5678', 'GI': '20012345', 'GR': '21 2345 6789', 'GL': '32 10 00', 'GD': '(473) 269-1234', 'GP': '0590 20-1234', 'GU': '(671) 300-1234', 'GT': '2245 6789', 'GG': '01481 456789', 'GN': '30 24 12 34', 'GW': '320 1234', 'GY': '220 1234', 'HT': '22 45 3300', 'HN': '2212-3456', 'HK': '2123 4567', 'HU': '(1) 234 5678', 'IS': '410 1234', 'IN': '011 2345 6789', 'ID': '(061) 2345678', 'IR': '021 2345 6789', 'IQ': '01 234 5678', 'IE': '(022) 12345', 'IM': '01624 456789', 'IL': '02-123-4567', 'IT': '02 1234 5678', 'JM': '(876) 512-3456', 'JE': '01534 456789', 'JO': '(06) 200 1234', 'KZ': '8 (712) 345 6789', 'KE': '020 2012345', 'KI': '31234', 'KW': '2234 5678', 'KG': '0312 123 456', 'LA': '021 212 862', 'LV': '63 123 456', 'LB': '01 123 456', 'LS': '2212 3456', 'LR': '021 234 567', 'LY': '021-2345678', 'LI': '234 56 78', 'LT': '(8-312) 34567', 'LU': '27 12 34 56', 'MO': '2821 2345', 'MK': '02 221 2345', 'MG': '020 21 234 56', 'MW': '01 234 567', 'MY': '03-2345 6789', 'MV': '670-1234', 'ML': '20 21 23 45', 'MT': '2100 1234', 'MH': '247-1234', 'MQ': '0596 30 12 34', 'MR': '35 12 34 56', 'MU': '201 2345', 'YT': '0269 60 12 34', 'MX': '01 222 123 4567', 'FM': '320 1234', 'MD': '022 212 345', 'MC': '99 12 34 56', 'MN': '5012 3456', 'ME': '030 234 567', 'MS': '(664) 491-2345', 'MA': '0520-123456', 'MZ': '21 123 456', 'MM': '01 234 567', 'NA': '061 201 2345', 'NR': '444 1234', 'NP': '01-4567890', 'NL': '010 123 4567', 'NC': '20.12.34', 'NZ': '03-234 5678', 'NI': '2123 4567', 'NE': '20 20 12 34', 'NG': '01 234 5678', 'NU': '4002', 'NF': '10 6609', 'MP': '(670) 234-5678', 'KP': '02 123 4567', 'NO': '21 23 45 67', 'OM': '23 123456', 'PK': '(021) 23456789', 'PW': '277 1234', 'PS': '02 223 4567', 'PA': '200-1234', 'PG': '312 3456', 'PY': '(21) 2345678', 'PE': '(01) 1234567', 'PH': '(02) 123 4567', 'PL': '12 345 67 89', 'PT': '212 345 678', 'PR': '(787) 234-5678', 'QA': '4412 3456', 'RE': '0262 16 12 34', 'RO': '021 123 4567', 'RU': '8 (301) 123-45-67', 'RW': '250 123 456', 'BL': '0590 27-1234', 'SH': '2158', 'KN': '(869) 236-1234', 'LC': '(758) 234-5678', 'MF': '0590 27-1234', 'PM': '041 12 34', 'VC': '(784) 266-1234', 'WS': '22123', 'SM': '0549 886377', 'ST': '222 1234', 'SA': '01 234 5678', 'SN': '30 101 23 45', 'RS': '010 234567', 'SC': '4 217 123', 'SL': '(022) 221234', 'SG': '6123 4567', 'SX': '(721) 542-5678', 'SK': '02\x2F123 456 78', 'SI': '(01) 123 45 67', 'SB': '40123', 'SO': '5 522010', 'ZA': '010 123 4567', 'KR': '02-212-3456', 'SS': '0181 234 567', 'ES': '810 12 34 56', 'LK': '011 2 345678', 'SD': '012 123 1234', 'SR': '211-234', 'SJ': '79 12 34 56', 'SZ': '2217 1234', 'SE': '08-12 34 56', 'CH': '021 234 56 78', 'SY': '011 234 5678', 'TW': '02 123 4567', 'TJ': '(8) 372 12 3456', 'TZ': '022 234 5678', 'TH': '02 123 4567', 'TL': '211 2345', 'TG': '22 21 23 45', 'TK': '3010', 'TO': '20-123', 'TT': '(868) 221-1234', 'TN': '71 234 567', 'TR': '(0212) 345 6789', 'TM': '(8 12) 34-56-78', 'TC': '(649) 712-1234', 'TV': '20123', 'VI': '(340) 642-1234', 'UG': '031 2345678', 'UA': '03112 34567', 'AE': '02 234 5678', 'GB': '0121 234 5678', 'US': '(201) 555-0123', 'UY': '2123 1234', 'UZ': '8 66 234 56 78', 'VU': '22123', 'VA': '06 6981 2345', 'VE': '0212-1234567', 'VN': '0210 1234 567', 'WF': '50 12 34', 'EH': '05288-12345', 'YE': '01 234 567', 'ZM': '021 1234567', 'ZW': '013 12345'};
var RingcaptchaStr_en = {
	title: 'Confirm your mobile phone',
	description: 'Please select your country code (e.g. 1 for US/Canada) and enter your mobile number without any special characters ( - \'/ #).',
	invalid_phone: 'Please type a valid phone number',
	invalid_phone_length: 'Your phone numbero length is invalid',
	invalid_country: 'Invalid country code not supported',
	verify_button: 'Verify',
	search_text: 'Type to search',
	title2: 'Enter a PIN code below to confirm your mobile phone',
	description2: 'A PIN code was sent to: ',
	help_text: 'If you entered a wrong number or need a new pin code please try again',
	help_button: 'Show help',
	try_again_button: 'Try again',
	pin_instruction: 'Enter this PIN code above to confirm your mobile phone.',
	error_invalid_site_key: 'Error. Invalid site key.',
	error_invalid_service: 'Error. Invalid service.',
	error_invalid_session: 'Error. Your sessión has expired.',
	error_invalid_domain: 'Error. Invalid domain.',
	error_max_attempts_reached: 'Error. You\'ve reached the max attempts for verifying a phone number',
	session_failed: 'Opps.. We couldn´t verify your mobile phone, please try again later.',
	error_out_of_credit: 'Opps.. We couldn´t verify your mobile phone, please try again later.',
	duplicated_number: 'The phone number you have entered is already in use'
},
RingcaptchaStr_es = {
	title: 'Confirma tu tel\u00E9fono m\u00F3vil',
	description: 'Selecciona tu c\u00F3digo de pa\u00EDs (por ej. 1 para USA/Canad\u00E1) e ingresa tu n\u00FAmero sin ning\u00FAn caracter especial ( - \'/ #).',
	invalid_phone: 'Ingresa un n\u00FAmero v\u00E1lido',
	invalid_phone_length: 'Your phone number length is invalid',
	invalid_country: 'Invalid country code not supported',
	verify_button: 'Verificar',
	search_text: 'Buscar pa\u00EDs',
	title2: 'Ingresa el PIN debajo para confirmar tu n\u00FAmero',
	description2: 'Recibir\u00E1s un SMS con un PIN al: ',
	help_text: 'Si ingresaste un n\u00FAmero equivocado o necesitas otro c\u00F3digo, por favor intenta nuevamente',
	help_button: 'Ayuda',
	try_again_button: 'Reintentar',
	pin_instruction: 'Ingrese el c\u00F3digo arriba para verificar su telefono m\u00F3vil.',
	error_invalid_site_key: 'Error. Site key inv\u00E1lida.',
	error_invalid_service: 'Error. Servicio no v\u00E1lido.',
	error_invalid_session: 'Error. Tu sesi\u00F3n ha expirado.',
	error_invalid_domain: 'Error. Dominio no v\u00E1lido.',
	error_max_attempts_reached: 'Error. You\'ve reached the max attempts for verifying a phone number',
	session_failed: 'Opps.. No hemos podido verificar tu n\u00FAmero, por favor intenta m\u00E1s tarde.',
	error_out_of_credit: 'Opps.. No hemos podido verificar tu n\u00FAmero, por favor intenta m\u00E1s tarde.',
	duplicated_number: 'El n\u00FAmero que has ingresado ya fue utilizado previamente'
},
RingcaptchaLangMap = {
	en: RingcaptchaStr_en,
	es: RingcaptchaStr_es
};
var RingcaptchaStr = RingcaptchaStr_en,
RingcaptchaOptions, RingcaptchaDefaultOptions = {
	tabindex: 0,
	callback: null,
	lang: null
},
Ringcaptcha = {
	widget: null,
	styles_set: !1,
	timer_id: -1,
	$: function (a) {
		return typeof a == "string" ? document.getElementById(a) : a
	},
	destroy: function () {
	},
	_hash_merge: function (a) {
		var b = {},
		c;
		for (c in a) for (var d in a[c]) b[d] = a[c][d];
			b.theme == "context" && (b.includeContext = !0);
		return b
	},
	_set_styles: function (a) {
		if (!Ringcaptcha.styles_set) Ringcaptcha.styles_set = !0, Ringcaptcha._add_css(a)
	},
	_add_css: function (a) {
		var b = document.createElement("style");
		b.type = "text/css";
		b.styleSheet ? navigator.appVersion.indexOf("MSIE 5") != -1 ? document.write("<style type='text/css'>" + a + "</style>") : b.styleSheet.cssText = a : navigator.appVersion.indexOf("MSIE 5") != -1 ? document.write("<style type='text/css'>" + a + "</style>") : (a = document.createTextNode(a), b.appendChild(a));
		Ringcaptcha._get_script_area().appendChild(b)
	},
	_get_script_area: function () {
		var a = document.getElementsByTagName("head");
		return a = !a || a.length < 1 ? document.body : a[0]
	},
	_ajax: function (m, u, o) {
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
				if(jx.readyState == 4 && jx.status == 200 && typeof o.success !== "undefined") o.success(jx);
				else if(jx.readyState == 4 && typeof o.error !== "undefined") o.error(jx);
			};
		}
		return jx;
	},
	/*
	* Mis functions
	*/
	m_searchCountry: function(){
		var a = RingcaptchaStatus,
		b = Ringcaptcha.$,
		c = RingcaptchaCountries,
		d = b('ringcaptcha_country_dropdown'),
		e, f, a = a.country;
		var pais = b("inputSearchCountry");
		if(pais.value == ''){
			console.log(pais.value);
			return false;
		}
		if(pais.value[0] == "+"){
			var pattern = new RegExp("\\+"+pais.value,"ig");
		}else{
			var pattern = new RegExp(pais.value,"ig");
		}
		var bien = [];
		var mal = [];
		if(pais.value != ""){
			for(x=0; x < c.length; x++){
				var bus = c[x]["name"]+c[x]["code"];
				if(bus.match(pattern) != null){
					bien.push(c[x]);
				}else{
					mal.push(c[x]);
				}
			}
			Ringcaptcha.m_build_country_dropdown(bien);
		}else{
			for (var i=0; i < c.length; i++) {
				d.appendChild(Ringcaptcha._build_country_element(c[i]));
			}
		}
	},
	m_build_country_dropdown: function (sCountry) {
		var a = RingcaptchaStatus,
		b = Ringcaptcha.$,
		c = RingcaptchaCountries,
		d = b('ringcaptcha_country_dropdown'),
		e, f, a = a.country;
		while(d.childNodes.length > 2){
			d.removeChild(d.lastChild);
		}
		for (var i=0; i < sCountry.length; i++) {
			d.appendChild(Ringcaptcha._build_country_element(sCountry[i]));
		}
		d.style.zIndex = 99999;
	},
	m_isPhoneValid:function(elem){
	/*
	* Control de digitos en el input number
	*/
	if(elem.target.value.length > 19 && elem.keyCode != 8 && elem.charCode != 0){
		return false;
	}
	var pat = /^[0-9]/;
	if(pat.test(String.fromCharCode(elem.keyCode))){
		return true;
	}else if(elem.keyCode == 13){
		Ringcaptcha.processPhoneNumber(RingcaptchaOptions);
	}else if(pat.test(String.fromCharCode(elem.charCode)) || elem.charCode == 0){//en firefox se usa charCode
		return true;
	}else{
		return false;
	}
	},
	m_errorShow:function(msj){
		var a = Ringcaptcha.$,
		b = /^\+?([0-9])*$/,
		c = RingcaptchaStatus,
		d = a('ringcaptcha_user_country'), f = a('ringcaptcha_user_phone'),
		z = a('ringcaptcha_example_phone');
		g = f.value.trim();
		z.className = 'helptxt helptxterr';
		f.className = "error";
		f.value = msj;
		f.onclick = (function(){f.value = ''; f.className = ''; z.className = 'helptxt'});
		Ringcaptcha.verifyClicked = false;
		(e) && (!Ringcaptcha._is_ie()) && e.preventDefault();
	},
	/* -------------------------------*/
	_render_phone_slide: function () {
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
		if (Ringcaptcha.widget) Ringcaptcha.widget.style.display = "";
		e.callback && e.callback()
	},
	_render_pin_slide: function (r) {
		var a = Ringcaptcha,
		b = RingcaptchaStr,
		c = RingcaptchaStatus,
		d = RingcaptchaOptions,
		e, a = a.$,
		c = c.server;
		Ringcaptcha.widget.style.display = "none";
		c[c.length - 1] == "/" && (c = c.substring(0, c.length - 1));
		var f = c + "/images/widget/";
		c = RingcaptchaTemplates.CountryCSS + RingcaptchaTemplates.AllCss;
		e = RingcaptchaTemplates.PinHtml;
		c = c.replace(/IMGROOT\//g, f);
		c = c.replace(/IMGLABEL\//g, f);
		Ringcaptcha._set_styles(c);
		Ringcaptcha.widget.innerHTML = e;
		a('ringcaptcha_pin_code').autocomplete = 'off';
		a('ringcaptcha_pin_code').autocapitalize = 'off';
		a('ringcaptcha_pin_code').autocorrect = 'off';
		a('ringcaptcha_pin_code').onkeypress = Ringcaptcha.m_isPhoneValid;
		a('ringcaptcha_title') && a('ringcaptcha_title').appendChild(document.createTextNode(b.description2));
		a('ringcaptcha_title') && a('ringcaptcha_title').appendChild(document.createTextNode(r.phone));
		a('ringcaptcha_help_text') && a('ringcaptcha_help_text').appendChild(document.createTextNode(b.help_text));
		c = document.createElement('input');
		c.type = "hidden";
		c.id = "ringcaptcha_session_id";
		c.name = "ringcaptcha_session_id";
		c.value = RingcaptchaStatus.session;
		a('ringcaptcha_pin_container') && a('ringcaptcha_pin_container').appendChild(c);
		c = document.createElement('div');
		c.id = "ringcaptcha_reload_bubble";
		c.style.zIndex = 9999;
		a('ringcaptcha_toolbar').appendChild(c);
		c = document.createElement("span");
		c.appendChild(document.createTextNode(b.try_again_button));
		a('ringcaptcha_reload_bubble') && a('ringcaptcha_reload_bubble').appendChild(c);
		a('ringcaptcha_reload_button').onmouseover = function() {
			Ringcaptcha.$('ringcaptcha_reload_bubble').style.display = "block";
		};
		a('ringcaptcha_reload_button').onmouseout = function() {
			Ringcaptcha.$('ringcaptcha_reload_bubble').style.display = "none";
		};
		a('ringcaptcha_reload_button').href = "javascript:Ringcaptcha.reload()";
		//a('ringcaptcha_reload_button').title = b.try_again_button;
		a('ringcaptcha_help_button').href = "javascript:Ringcaptcha.showHelp()";
		a('ringcaptcha_help_button').title = b.help_button;
		document.onclick = null;
		a('ringcaptcha_enterpin').innerHTML = b.pin_instruction;
		if (d.tabindex && (a("ringcaptcha_pin_code").tabIndex = d.tabindex, Ringcaptcha.theme != "custom")) a("ringcaptcha_try_again_button").tabIndex = d.tabindex;
		if (Ringcaptcha.widget) Ringcaptcha.widget.style.display = "";
		if (r.timeout == 0) {
			clearInterval(Ringcaptcha.timer_id);
			a('ringcaptcha_timer').style.display = "none";
			a('ringcaptcha_reload_button').style.display = "block";
		} else if (r.timeout == null) {
			clearInterval(Ringcaptcha.timer_id);
			a('ringcaptcha_timer').style.display = "none";
			a('ringcaptcha_reload_button').style.display = "block";
			a('ringcaptcha_reload_button').removeAttribute('href');
			a('ringcaptcha_reload_button').className = 'ringcaptcha_reload_disabled';
			a('ringcaptcha_reload_button').onmouseover = null;
			a('ringcaptcha_reload_button').onmouseout = null;
			a('ringcaptcha_help_text').innerHTML = '';
		} else
		Ringcaptcha._set_timer(r.timeout);
		a('ringcaptcha_pin_code').focus();
	},
	_render_error_slide: function(r, t) {
		var a = Ringcaptcha.$,
		b = RingcaptchaStr,
		c = RingcaptchaStatus,
		c = c.server,
		d, e = RingcaptchaOptions;
		c[c.length - 1] == "/" && (c = c.substring(0, c.length - 1));
		var f = c + "/images/widget/";
		c = RingcaptchaTemplates.CountryCSS + RingcaptchaTemplates.AllCss;
		d = RingcaptchaTemplates.ErrorHtml;
		c = c.replace(/IMGROOT\//g, f);
		Ringcaptcha._set_styles(c);
		Ringcaptcha.widget.innerHTML = d;
		a('ringcaptcha_err_icon').className = 'ringcaptcha-err-' + r.message.toLowerCase();
		a('ringcaptcha_err_message').appendChild(document.createTextNode(b[r.message.toLowerCase()]));
		if (t) {
			c = document.createElement('a');
			c.id = "ringcaptcha_err_try_again";
			c.href = "javascript:Ringcaptcha.reload()"
			c.appendChild(document.createTextNode(b.try_again_button));
			a('ringcaptcha_err_icon').appendChild(c);
		}
		c = document.createElement('input');
		c.type = "hidden";
		c.id = "ringcaptcha_session_id";
		c.name = "ringcaptcha_session_id";
		c.value = RingcaptchaStatus.session;
		a('ringcaptcha') && a('ringcaptcha').appendChild(c);
		c = document.createElement('input');
		c.type = "hidden";
		c.id = "ringcaptcha_pin_code";
		c.name = "ringcaptcha_pin_code";
		c.value = RingcaptchaStatus.session;
		a('ringcaptcha') && a('ringcaptcha').appendChild(c);
		if (Ringcaptcha.widget) Ringcaptcha.widget.style.display = "";
	},
	_is_ie: function () {
		return navigator.userAgent.indexOf("MSIE") > 0 && !window.opera
	},
	_init_options: function (a) {
		RingcaptchaOptions = Ringcaptcha._hash_merge([RingcaptchaDefaultOptions, a || {}])
	},
	init_callback: function () {
		Ringcaptcha._reset_timer();
		RingcaptchaStr = Ringcaptcha._hash_merge([RingcaptchaStr_en, RingcaptchaLangMap[RingcaptchaStatus.lang] || {},
			RingcaptchaOptions.custom_translations || {}]);
		switch (RingcaptchaStatus.status) {
			case 'PENDING':
			Ringcaptcha._render_pin_slide({phone: RingcaptchaStatus.message, timeout: 0});
			break;
			case 'LAST':
			Ringcaptcha._render_pin_slide({phone: RingcaptchaStatus.message, timeout: null});
			break;
			case 'SESSION_FAILED':
			case 'OUT_OF_CREDIT':
			case 'ERROR_INVALID_DOMAIN':
			Ringcaptcha._render_error_slide({message: RingcaptchaStatus.status}, false);
			break;
			case 'ERROR_INVALID_SESSION':
			case 'ERROR_INVALID_SITE_KEY':
			case 'ERROR_INVALID_SERVICE':
			Ringcaptcha._render_error_slide({message: RingcaptchaStatus.status, message: RingcaptchaStatus.message}, true);
			break;
			default:
			Ringcaptcha._render_phone_slide();
			if (RingcaptchaStatus.geolocation) {
				Ringcaptcha.getGeolocation();
			}
		}
	},
	reload: function () {
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
	},
	_reset_timer: function () {
		var a = RingcaptchaStatus;
		clearInterval(Ringcaptcha.timer_id);
	},
	_set_timer: function (t) {
		(typeof window.console !== 'undefined') && console.log('START COUNTDOWN en: ' + t);
		clearInterval(Ringcaptcha.timer_id);
		Ringcaptcha.timer = t;
		Ringcaptcha.timer_id = setInterval("Ringcaptcha.try_again();", 1000);
	},
	try_again: function () {
		var a = Ringcaptcha.$;
		Ringcaptcha.timer--;
		if (Ringcaptcha.timer) {
			(typeof window.console !== 'undefined') && console.log('COUNTDOWN: ' + Ringcaptcha.timer);
			a('ringcaptcha_timer').innerHTML = Ringcaptcha.timer;
		} else {
			clearInterval(Ringcaptcha.timer_id);
			a('ringcaptcha_timer').style.display = "none";
			a('ringcaptcha_reload_button').style.display = "block";
		}
	},
	processPhoneNumber: function (e) {
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