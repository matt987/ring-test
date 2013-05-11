(function(d,c,a,f){var e={transition:"fade",thumb_list_id:"#thumbs",prev:"#prev",next:"#next",nav_opacity:0.3,fade_opacity:0.2,infinite:false,automatic:false,interval:6000,width:800};function b(h,g){this.options=d.extend({},e,g);this.el=d(h);this.slides=this.el.children("li").length;this.full_width=(this.el.parent().width()!=0)?this.el.parent().width():this.options.width;this.current_slide=0;this.init()}b.prototype.init=function(){this.activeThumb();this.preventArrows();this.startTransitions();var g=this;if(g.options.automatic==true){g.interval_id=setInterval(function(){g.interval_func()},g.options.interval)}};b.prototype.interval_func=function(){var g=this;if(g.current_slide==g.slides-1&&g.options.infinite==false){return false}if(g.current_slide==g.slides-1){g.current_slide=0}else{g.current_slide=g.current_slide+1}g.activeThumb();g.preventArrows();g.transition()};b.prototype.activeThumb=function(){var g=this;d(g.options.thumb_list_id).find("li").eq(g.current_slide).addClass("currentNumber").siblings().removeClass("currentNumber")};b.prototype.preventArrows=function(){var g=this.options.nav_opacity;if(!this.options.infinite&&this.current_slide==0){d(this.options.prev).animate({opacity:g},800)}if(!this.options.infinite&&this.current_slide!=0){d(this.options.prev).animate({opacity:1},800)}if(!this.options.infinite&&this.current_slide==this.slides-1){d(this.options.next).animate({opacity:g},800)}if(!this.options.infinite&&this.current_slide!=this.slides-1){d(this.options.next).animate({opacity:1},800)}if(this.slides<2){d(this.options.next).hide();d(this.options.prev).hide()}};b.prototype.startTransitions=function(){var g=this;d(this.options.thumb_list_id).find("li").click(function(h){h.preventDefault();if(g.options.automatic==true&&g.interval_id){clearInterval(g.interval_id);g.interval_id=setInterval(function(){d(g.options.next).click()},g.options.interval)}g.current_slide=d(this).index();g.activeThumb();g.preventArrows();g.transition()});this.transitions()};b.prototype.transitions=function(){var g=this;this.transition=this.options.transition=="fade"?this.fade:this.slide;if(this.options.transition=="fade"){this.el.parent().addClass("fade");this.el.children("li").css({display:"none"}).eq(0).css("display","block")}else{if(this.options.transition=="slide"){this.el.parent().addClass("slide")}}d(this.options.prev).click(function(h){if(g.current_slide==0&&g.options.infinite==false){return false}h.preventDefault();if(g.current_slide==0){g.current_slide=g.slides-1}else{g.current_slide=g.current_slide-1}if(g.options.automatic==true&&g.interval_id){clearInterval(g.interval_id);g.interval_id=setInterval(function(){d(g.options.next).click()},g.options.interval)}g.activeThumb();g.preventArrows();g.transition()});d(g.options.next).click(function(h){h.preventDefault();if(g.current_slide==g.slides-1&&g.options.infinite==false){return false}if(g.current_slide==g.slides-1){g.current_slide=0}else{g.current_slide=g.current_slide+1}if(g.options.automatic==true&&g.interval_id){clearInterval(g.interval_id);g.interval_id=setInterval(function(){d(g.options.next).click()},g.options.interval)}g.activeThumb();g.preventArrows();g.transition()})};b.prototype.slide=function(){var g=this;this.el.animate({left:"-"+g.current_slide*g.full_width},800)};b.prototype.fade=function(){var g=this;this.el.animate({opacity:g.options.fade_opacity},400,function(){d(this).children("li").eq(g.current_slide).css("display","block").siblings().css("display","none");g.el.animate({opacity:1},400)})};d.fn.vulsaiSlider=function(g){return this.each(function(){if(!d.data(this,"plugin_vulsaiSlider")){d.data(this,"plugin_vulsaiSlider",new b(this,g))}})}})(jQuery,window,document);