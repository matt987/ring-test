// Handset Detection mobile redirection script 1.3
// 
var HandsetDetection = {
	ismobile : false,
	istablet : false,
	isconsole : false,
	xhtmllevel : 0,
	width :	0,
	height : 0,
	formfactor : "unknown",
	hdclass : "",
	vendor : "",
	model : "", 
	os : "",
	osversion : "",
	browser : "", 
	browserversion : "",
	urls : ["ringcaptcha.com"],
	country : "ar",
	city : "rosario",
	region : "santa fe",
	isp : "telecom argentina s.a.",
	company : "telecom argentina s.a.",
	sid : "518e5c3ec2d41ead3b000050",
	
	redirect: function() {
		// Smart Redirection - if referrer domain is in url list then do nothing - its internal.
		if ("1" == "1") {
			var refurl = "";
			if (document.referrer) {
				refurl = document.referrer.toString();
			} else if (window.opener && !window.opener.closed && window.opener.location) {
				try {
					refurl = window.opener.location.toString();
				} catch (err) {
					refurl = "";
				}
			}
			if (refurl.length > 0) {
				refurl = refurl.toLowerCase().replace(/http:\/\//i, "").replace(/https:\/\//i, "").split("/", 1)[0];
				urls = this.urls;
				for(var i=0,length=urls.length; i < length; i++) {
					if (urls[i].indexOf(refurl) > -1) {
						// Found match - quit.
						return 1;
					}
				}
			}
		}
		
		// Redirection rules.
		
	}
}

HandsetDetection.redirect();
