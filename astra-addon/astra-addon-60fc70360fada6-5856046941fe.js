!function(o,r){var s="astHookExtSticky",i=r.document,a=(jQuery(r).outerWidth(),jQuery(r).width()),n={dependent:[],max_width:"",site_layout:"",break_point:920,admin_bar_height_lg:32,admin_bar_height_sm:46,admin_bar_height_xs:0,stick_upto_scroll:0,gutter:0,wrap:"<div></div>",body_padding_support:!0,html_padding_support:!0,active_shrink:!1,shrink:{padding_top:"",padding_bottom:""},sticky_on_device:"desktop",header_style:"none",hide_on_scroll:"no"};function e(t,e){this.element=t,this.options=o.extend({},n,e),this._defaults=n,this._name=s,"1"==this.options.hide_on_scroll&&(this.navbarHeight=o(t).outerHeight()),this.lastScrollTop=0,this.delta=5,this.should_stick=!0,this.hideScrollInterval="",this.init()}e.prototype.stick_me=function(t,e){var o=jQuery(t.element),s=jQuery(r).outerWidth(),i=parseInt(t.options.stick_upto_scroll),a=parseInt(o.parent().attr("data-stick-maxwidth")),n=parseInt(o.parent().attr("data-stick-gutter"));"enabled"==(astraAddon.hook_sticky_header||"")&&(!("desktop"==t.options.sticky_on_device&&astraAddon.hook_custom_header_break_point>s)&&!("mobile"==t.options.sticky_on_device&&astraAddon.hook_custom_header_break_point<=s)&&jQuery(r).scrollTop()>i?"none"==t.options.header_style&&("enabled"==t.options.active_shrink&&t.hasShrink(t,"stick"),o.hasClass("ast-custom-header")&&(o.parent().css("min-height",o.outerHeight()),o.addClass("ast-header-sticky-active").stop().css({"max-width":a,top:n,"padding-top":t.options.shrink.padding_top,"padding-bottom":t.options.shrink.padding_bottom}),o.addClass("ast-sticky-shrunk").stop())):t.stickRelease(t)),"enabled"==(astraAddon.hook_sticky_footer||"")&&("desktop"==t.options.sticky_on_device&&astraAddon.hook_custom_footer_break_point>s||"mobile"==t.options.sticky_on_device&&astraAddon.hook_custom_footer_break_point<=s?t.stickRelease(t):(jQuery("body").addClass("ast-footer-sticky-active"),o.parent().css("min-height",o.outerHeight()),o.stop().css({"max-width":a})))},e.prototype.update_attrs=function(){var o,t=this,e=jQuery(t.element),s=parseInt(t.options.gutter),i=t.options.max_width;"none"==t.options.header_style&&(o=e.offset().top||0),"ast-box-layout"!=t.options.site_layout&&(i=jQuery("body").width()),t.options.dependent&&jQuery.each(t.options.dependent,function(t,e){jQuery(e).length&&"on"==jQuery(e).parent().attr("data-stick-support")&&(dependent_height=jQuery(e).outerHeight(),s+=parseInt(dependent_height),o-=parseInt(dependent_height))}),t.options.admin_bar_height_lg&&jQuery("#wpadminbar").length&&782<a&&(s+=parseInt(t.options.admin_bar_height_lg),o-=parseInt(t.options.admin_bar_height_lg)),t.options.admin_bar_height_sm&&jQuery("#wpadminbar").length&&600<=a&&a<=782&&(s+=parseInt(t.options.admin_bar_height_sm),o-=parseInt(t.options.admin_bar_height_sm)),t.options.admin_bar_height_xs&&jQuery("#wpadminbar").length&&(s+=parseInt(t.options.admin_bar_height_xs),o-=parseInt(t.options.admin_bar_height_xs)),t.options.body_padding_support&&(s+=parseInt(jQuery("body").css("padding-top"),10),o-=parseInt(jQuery("body").css("padding-top"),10)),t.options.html_padding_support&&(s+=parseInt(jQuery("html").css("padding-top"),10),o-=parseInt(jQuery("html").css("padding-top"),10)),t.options.stick_upto_scroll=o,"none"==t.options.header_style&&e.parent().css("min-height",e.outerHeight()).attr("data-stick-gutter",parseInt(s)).attr("data-stick-maxwidth",parseInt(i))},e.prototype.hasShrink=function(t,e){o(r).scrollTop()>jQuery(t.element).outerHeight()?jQuery("body").addClass("ast-shrink-custom-header"):jQuery("body").removeClass("ast-shrink-custom-header")},e.prototype.stickRelease=function(t){var e=jQuery(t.element);"enabled"==(astraAddon.hook_sticky_header||"")&&"none"==t.options.header_style&&(e.removeClass("ast-header-sticky-active").stop().css({"max-width":"",top:"",padding:""}),e.parent().css("min-height",""),e.removeClass("ast-sticky-shrunk").stop()),"enabled"==(astraAddon.hook_sticky_footer||"")&&jQuery("body").removeClass("ast-footer-sticky-active")},e.prototype.init=function(){var e,t;jQuery(this.element)&&(e=this,t=jQuery(e.element),parseInt(e.options.gutter),t.position().top,"none"==e.options.header_style&&t.wrap(e.options.wrap).parent().css("min-height",t.outerHeight()).attr("data-stick-support","on").attr("data-stick-maxwidth",parseInt(e.options.max_width)),e.update_attrs(),jQuery(r).on("resize",function(){e.stickRelease(e),e.update_attrs(),e.stick_me(e)}),jQuery(r).on("scroll",function(){e.stick_me(e,"scroll")}),jQuery(i).ready(function(t){e.stick_me(e)}))},o.fn[s]=function(t){return this.each(function(){o.data(this,"plugin_"+s)||o.data(this,"plugin_"+s,new e(this,t))})};var d=jQuery("body").width(),_=astraAddon.site_layout||"",h=astraAddon.hook_sticky_header||"",p=astraAddon.hook_shrink_header||"";sticky_header_on_devices=astraAddon.hook_sticky_header_on_devices||"desktop",site_layout_box_width=astraAddon.site_layout_box_width||1200,hook_sticky_footer=astraAddon.hook_sticky_footer||"",sticky_footer_on_devices=astraAddon.hook_sticky_footer_on_devices||"desktop","ast-box-layout"===_&&(d=parseInt(site_layout_box_width)),jQuery(i).ready(function(t){"enabled"==h&&jQuery(".ast-custom-header").astHookExtSticky({sticky_on_device:sticky_header_on_devices,header_style:"none",site_layout:_,max_width:d,active_shrink:p}),"enabled"==hook_sticky_footer&&jQuery(".ast-custom-footer").astHookExtSticky({sticky_on_device:sticky_footer_on_devices,max_width:d,site_layout:_,header_style:"none"})})}(jQuery,window);!function(d,r){var a="astExtSticky",o=r.document,h=(jQuery(r).outerWidth(),jQuery(r).width()),n=astraAddon.header_builder_active,s={dependent:[],max_width:"",site_layout:"",break_point:920,admin_bar_height_lg:32,admin_bar_height_sm:46,admin_bar_height_xs:0,stick_upto_scroll:0,gutter:0,wrap:"<div></div>",body_padding_support:!0,html_padding_support:!0,shrink:{padding_top:"",padding_bottom:""},sticky_on_device:"desktop",header_style:"none",hide_on_scroll:"no"},i=0;function t(e,t){this.element=e,this.options=d.extend({},s,t),this._defaults=s,this._name=a,"1"==this.options.hide_on_scroll&&(this.navbarHeight=d(e).outerHeight()),this.lastScrollTop=0,this.delta=5,this.should_stick=!0,this.hideScrollInterval="",this.init()}t.prototype.stick_me=function(e,t){var a,s,i=jQuery(e.element);jQuery(r).outerWidth();stick_upto_scroll=parseInt(e.options.stick_upto_scroll),max_width=parseInt(i.parent().attr("data-stick-maxwidth")),gutter=parseInt(i.parent().attr("data-stick-gutter")),n&&astraAddon.header_main_shrink&&(i.hasClass("ast-stick-primary-below-wrapper")||i.hasClass("ast-primary-header"))&&1==astraAddon.header_above_stick&&0<gutter&&(gutter-=20),("desktop"!=e.options.sticky_on_device||!jQuery("body").hasClass("ast-header-break-point"))&&("mobile"!=e.options.sticky_on_device||jQuery("body").hasClass("ast-header-break-point"))?(stick_upto_scroll<0&&(stick_upto_scroll=0),jQuery(r).scrollTop()>stick_upto_scroll?(a=i,n&&((s=0===(s=i.closest(".ast-mobile-header-wrap")).length?i.find(".ast-mobile-header-wrap"):s).find(".ast-mobile-header-content").css("top",i.outerHeight()+gutter),s.find(".ast-mobile-header-content").css("width",max_width)),"1"===e.options.hide_on_scroll?e.hasScrolled(e,"stick"):"none"==e.options.header_style?(i.parent().css("min-height",i.outerHeight()),i.addClass("ast-sticky-active").stop().css({"max-width":max_width,"padding-top":e.options.shrink.padding_top,"padding-bottom":e.options.shrink.padding_bottom,top:gutter}),(i.hasClass("ast-stick-primary-below-wrapper")||i.hasClass("ast-primary-header"))&&1==astraAddon.header_above_stick&&i.closest("#ast-desktop-header").find(".ast-above-header-bar").outerHeight()<70&&(i.addClass("ast-sticky-active").stop().css({top:"unset"}),i.parent().css("min-height","unset")),i.addClass("ast-sticky-shrunk").stop(),d(o).trigger("addStickyClass"),a.addClass("ast-header-sticked")):"slide"==e.options.header_style?(a.css({top:gutter}),a.addClass("ast-header-slide"),a.css("visibility","visible"),a.addClass("ast-sticky-active").stop().css({transform:"translateY(0)"}),d("html").addClass("ast-header-stick-slide-active"),d(o).trigger("addStickyClass"),a.addClass("ast-header-sticked")):"fade"==e.options.header_style&&(a.css({top:gutter}),a.addClass("ast-header-fade"),a.css("visibility","visible"),a.addClass("ast-sticky-active").stop().css({opacity:"1"}),d("html").addClass("ast-header-stick-fade-active"),d(o).trigger("addStickyClass"),a.addClass("ast-header-sticked"))):e.stickRelease(e)):e.stickRelease(e)},t.prototype.update_attrs=function(){var e,a,t=this,s=jQuery(t.element),i=parseInt(t.options.gutter),r=t.options.max_width;"none"!=t.options.header_style||jQuery("body").hasClass("ast-sticky-toggled-off")?d("#masthead").length&&(e=d("#masthead"),a=e.offset().top+e.outerHeight()+100||0):a=s.offset().top||0,"ast-box-layout"!=t.options.site_layout&&(r=jQuery("body").width()),t.options.dependent&&jQuery.each(t.options.dependent,function(e,t){jQuery(t).length&&"on"==jQuery(t).parent().attr("data-stick-support")&&(dependent_height=jQuery(t).outerHeight(),i+=parseInt(dependent_height),a-=parseInt(dependent_height))}),t.options.admin_bar_height_lg&&jQuery("#wpadminbar").length&&782<h&&(i+=parseInt(t.options.admin_bar_height_lg),a-=parseInt(t.options.admin_bar_height_lg)),t.options.admin_bar_height_sm&&jQuery("#wpadminbar").length&&600<=h&&h<=782&&(i+=parseInt(t.options.admin_bar_height_sm),a-=parseInt(t.options.admin_bar_height_sm)),t.options.admin_bar_height_xs&&jQuery("#wpadminbar").length&&(i+=parseInt(t.options.admin_bar_height_xs),a-=parseInt(t.options.admin_bar_height_xs)),t.options.body_padding_support&&(i+=parseInt(jQuery("body").css("padding-top"),10),a-=parseInt(jQuery("body").css("padding-top"),10)),t.options.html_padding_support&&(i+=parseInt(jQuery("html").css("padding-top"),10),a-=parseInt(jQuery("html").css("padding-top"),10)),S&&a--,t.options.stick_upto_scroll=a,"none"==t.options.header_style?s.parent().css("min-height",s.outerHeight()).attr("data-stick-gutter",parseInt(i)).attr("data-stick-maxwidth",parseInt(r)):(s.parent().attr("data-stick-gutter",parseInt(i)).attr("data-stick-maxwidth",parseInt(r)),"ast-padded-layout"===t.options.site_layout&&s.css("max-width",parseInt(r)))},t.prototype.hasScrolled=function(e,t){var a,s=d(r).scrollTop();Math.abs(i-s)<=5||(a=jQuery(e.element),i<s&&0<s?jQuery(e.element).removeClass("ast-nav-down").addClass("ast-nav-up"):s+d(r).height()<d(o).height()&&jQuery(e.element).removeClass("ast-nav-up").addClass("ast-nav-down"),i=s,d(e.element).hasClass("ast-nav-up")||"stick"!=t?(a.css({transform:"translateY(-100%)"}).stop(),setTimeout(function(){a.removeClass("ast-sticky-active")},300),a.css({visibility:"hidden",top:""}),d(o).trigger("removeStickyClass"),d("html").removeClass("ast-header-stick-scroll-active"),a.removeClass("ast-header-sticked")):(a.css({top:gutter}),a.addClass("ast-header-sticked"),a.addClass("ast-header-slide"),a.css("visibility","visible"),a.addClass("ast-sticky-active").stop().css({transform:"translateY(0)"}),d(o).trigger("addStickyClass"),d("html").addClass("ast-header-stick-scroll-active")))},t.prototype.stickRelease=function(e){var t=jQuery(e.element),a=t;"1"===e.options.hide_on_scroll?e.hasScrolled(e,"release"):"none"==e.options.header_style?(t.removeClass("ast-sticky-active").stop().css({"max-width":"",top:"",padding:""}),t.parent().css("min-height",""),d(o).trigger("removeStickyClass"),a.removeClass("ast-header-sticked"),t.removeClass("ast-sticky-shrunk").stop()):"slide"==e.options.header_style?(a.removeClass("ast-sticky-active").stop().css({transform:"translateY(-100%)"}),a.css({visibility:"hidden",top:""}),d("html").removeClass("ast-header-stick-slide-active"),d(o).trigger("removeStickyClass"),a.removeClass("ast-header-sticked")):"fade"==e.options.header_style&&(a.removeClass("ast-sticky-active").stop().css({opacity:"0"}),a.css({visibility:"hidden"}),a.removeClass("ast-header-sticked"),d(o).trigger("removeStickyClass"),d("html").removeClass("ast-header-stick-fade-active"))},t.prototype.init=function(){var t,e;jQuery(this.element)&&(t=this,e=jQuery(t.element),("none"==t.options.header_style?e.wrap(t.options.wrap).parent().css("min-height",e.outerHeight()):e.wrap(t.options.wrap)).attr("data-stick-support","on").attr("data-stick-maxwidth",parseInt(t.options.max_width)),t.update_attrs(),jQuery(r).on("resize",function(){t.stickRelease(t),t.update_attrs(),t.stick_me(t)}),jQuery(r).on("scroll",function(){t.stick_me(t,"scroll"),jQuery("body").hasClass("ast-sticky-toggled-off")&&(t.update_attrs(),t.stick_me(t,"scroll"))}),jQuery(o).ready(function(e){t.stick_me(t)}))},d.fn[a]=function(e){return this.each(function(){d.data(this,"plugin_"+a)||d.data(this,"plugin_"+a,new t(this,e))})};var e,l=jQuery("body"),c=l.width(),p=astraAddon.stick_header_meta||"default",y=astraAddon.header_main_stick||"",_=astraAddon.header_main_shrink||"",m=astraAddon.header_above_stick||"",u=astraAddon.header_below_stick||"",k=astraAddon.header_main_stick_meta||"",g=astraAddon.header_above_stick_meta||"",v=astraAddon.header_below_stick_meta||"",b=astraAddon.site_layout||"",w=astraAddon.site_layout_box_width||1200,j=astraAddon.sticky_header_on_devices||"desktop",Q=astraAddon.sticky_header_style||"none",x=astraAddon.sticky_hide_on_scroll||"",f=astraAddon.header_logo_width||"",C=astraAddon.responsive_header_logo_width||"",S=astraAddon.stick_origin_position||"",I=astraAddon.tablet_break_point||768,A=astraAddon.mobile_break_point||544;function E(){var e;e=!1,"undefined"!=typeof wp&&(e=void 0!==wp.customize),e&&(stick_upto_scroll=0,jQuery(r).scrollTop(0))}"disabled"!=p&&("enabled"===p&&(y=k,m=g,u=v),0<d("header .site-logo-img img").length&&(void 0===(v=(g=d("header .site-logo-img img")).attr("height"))&&(v=g.height()),0==v&&(v=""),-1===v.toString().indexOf("%")&&(v+="px"),""!=C.desktop||""!=C.tablet||""!=C.mobile?e="<style type='text/css' id='ast-site-identity-img' class='ast-site-identity-img' > #masthead .ast-header-sticked .site-logo-img .astra-logo-svg { width: "+C.desktop+"px; } @media (max-width: "+I+"px) { #masthead .ast-header-sticked .site-logo-img .astra-logo-svg { width: "+C.tablet+"px; } } @media (max-width: "+A+"px) { #masthead .ast-header-sticked .site-logo-img .astra-logo-svg{ width: "+C.mobile+"px; } } </style>":""!=f&&(e="<style type='text/css' id='ast-site-identity-img' class='ast-site-identity-img' > #masthead .ast-header-sticked .site-logo-img .astra-logo-svg { width: "+f+"px; } #masthead .ast-header-sticked .site-logo-img img { max-height: "+v+"; width: auto; } </style>"),d("head").append(e)),(y||m||u)&&(n&&E(),d(o).on("addStickyClass",function(){var e="";"1"!=y&&"on"!=y||(e+=" ast-primary-sticky-header-active"),"1"!=m&&"on"!=m||(e+=" ast-above-sticky-header-active"),"1"!=u&&"on"!=u||(e+=" ast-below-sticky-header-active"),d("body").addClass(e)}),d(o).on("removeStickyClass",function(){var e="";"1"!=y&&"on"!=y||(e+=" ast-primary-sticky-header-active"),"1"!=m&&"on"!=m||(e+=" ast-above-sticky-header-active"),"1"!=u&&"on"!=u||(e+=" ast-below-sticky-header-active"),d("body").removeClass(e)}),"ast-box-layout"===b&&(c=parseInt(w)),jQuery(o).on("ready astLayoutWidthChanged",function(e){if("astLayoutWidthChanged"===e.type){if(!(y||u||m))return;E(),jQuery("div.ast-stick-primary-below-wrapper").children().unwrap(),jQuery('div[data-stick-support="on"]').children().unwrap()}var t;"1"==x?("1"==_&&jQuery("#ast-fixed-header").addClass("ast-sticky-shrunk").stop(),"1"!=m&&"on"!=m&&jQuery("#ast-fixed-header .ast-above-header").hide(),"1"!=y&&"on"!=y&&jQuery("#ast-fixed-header .main-header-bar").hide(),"1"!=u&&"on"!=u&&jQuery("#ast-fixed-header .ast-below-header").hide(),jQuery("#ast-fixed-header").astExtSticky({max_width:c,site_layout:b,sticky_on_device:j,header_style:"slide",hide_on_scroll:x})):"none"==Q?n?("both"===j?["desktop","mobile"]:[j]).forEach(function(e){var t;"1"!=m&&"on"!=m||jQuery("#masthead #ast-"+e+"-header .ast-above-header").astExtSticky({max_width:c,site_layout:b,sticky_on_device:j,header_style:Q,hide_on_scroll:x}),"1"!=y&&"on"!=y||"1"!=u&&"on"!=u?("1"!=y&&"on"!=y||(t=_?{padding_top:"",padding_bottom:""}:"",jQuery("#masthead #ast-"+e+"-header .main-header-bar").astExtSticky({dependent:["#masthead #ast-"+e+"-header .ast-above-header"],max_width:c,site_layout:b,shrink:t,sticky_on_device:j,header_style:Q,hide_on_scroll:x}),jQuery("#masthead #ast-"+e+"-header .ast-custom-header").astExtSticky({max_width:c,site_layout:b,shrink:t,sticky_on_device:j,header_style:Q,hide_on_scroll:x})),"1"!=u&&"on"!=u||jQuery("#masthead #ast-"+e+"-header .ast-below-header").astExtSticky({dependent:["#masthead #ast-"+e+"-header .main-header-bar","#masthead #ast-"+e+"-header .ast-above-header"],max_width:c,site_layout:b,sticky_on_device:j,header_style:Q,hide_on_scroll:x})):((jQuery("#masthead #ast-"+e+"-header .main-header-bar-wrap").length?jQuery("#masthead #ast-"+e+"-header .main-header-bar-wrap"):jQuery("#masthead #ast-"+e+"-header .ast-below-header-wrap")).wrap('<div class="ast-stick-primary-below-wrapper"></div>'),jQuery("#masthead #ast-"+e+"-header .ast-below-header-wrap").prependTo("#masthead #ast-"+e+"-header .ast-stick-primary-below-wrapper"),jQuery("#masthead #ast-"+e+"-header .main-header-bar-wrap").prependTo("#masthead #ast-"+e+"-header .ast-stick-primary-below-wrapper"),jQuery("#masthead #ast-"+e+"-header .ast-stick-primary-below-wrapper").astExtSticky({dependent:["#masthead #ast-"+e+"-header .ast-above-header"],max_width:c,site_layout:b,shrink:t,sticky_on_device:j,header_style:Q,hide_on_scroll:x}))}):("1"!=m&&"on"!=m||jQuery("#masthead .ast-above-header").astExtSticky({max_width:c,site_layout:b,sticky_on_device:j,header_style:Q,hide_on_scroll:x}),"1"!=y&&"on"!=y||"1"!=u&&"on"!=u?("1"!=y&&"on"!=y||(t=_?{padding_top:"",padding_bottom:""}:"",jQuery("#masthead .main-header-bar").astExtSticky({dependent:["#masthead .ast-above-header"],max_width:c,site_layout:b,shrink:t,sticky_on_device:j,header_style:Q,hide_on_scroll:x}),jQuery("#masthead .ast-custom-header").astExtSticky({max_width:c,site_layout:b,shrink:t,sticky_on_device:j,header_style:Q,hide_on_scroll:x})),"1"!=u&&"on"!=u||jQuery("#masthead .ast-below-header").astExtSticky({dependent:["#masthead .main-header-bar","#masthead .ast-above-header"],max_width:c,site_layout:b,sticky_on_device:j,header_style:Q,hide_on_scroll:x})):(jQuery("#masthead .main-header-bar-wrap").wrap('<div class="ast-stick-primary-below-wrapper"></div>'),jQuery("#masthead .ast-below-header-wrap").prependTo(".ast-stick-primary-below-wrapper"),jQuery("#masthead .main-header-bar-wrap").prependTo(".ast-stick-primary-below-wrapper"),jQuery("#masthead .ast-stick-primary-below-wrapper").astExtSticky({dependent:["#masthead .ast-above-header"],max_width:c,site_layout:b,shrink:t,sticky_on_device:j,header_style:Q,hide_on_scroll:x}))):(jQuery("#ast-fixed-header").addClass("ast-sticky-shrunk").stop(),"1"!=m&&"on"!=m&&jQuery("#ast-fixed-header .ast-above-header").hide(),"1"!=y&&"on"!=y&&jQuery("#ast-fixed-header .main-header-bar").hide(),"1"!=u&&"on"!=u&&jQuery("#ast-fixed-header .ast-below-header").hide(),"1"!=m&&"on"!=m&&"1"!=y&&"on"!=y&&"1"!=u&&"on"!=u||(t=_?{padding_top:"",padding_bottom:""}:"",jQuery("#ast-fixed-header").astExtSticky({max_width:c,site_layout:b,shrink:t,sticky_on_device:j,header_style:Q,hide_on_scroll:x}))),"mobile"!=j&&"both"!=j||(jQuery("#masthead .main-header-menu-toggle").click(function(e){var t,a;jQuery("#masthead .main-header-menu-toggle").hasClass("toggled")?(l.addClass("ast-sticky-toggled-off"),"none"==s.header_style&&(jQuery("#masthead .main-header-bar").hasClass("ast-sticky-active")||jQuery("#masthead .ast-stick-primary-below-wrapper").hasClass("ast-sticky-active"))&&(t=jQuery(r).height(),a=0,jQuery("#masthead .ast-above-header")&&jQuery("#masthead .ast-above-header").length&&(a=jQuery("#masthead .ast-above-header").height()),"1"==x&&jQuery("html").css({overflow:"hidden"}),("1"!=_||"1"!=y&&"on"!=y||"1"!=u&&"on"!=u?jQuery("#masthead .main-header-bar.ast-sticky-active"):jQuery("#masthead .ast-stick-primary-below-wrapper")).css({"max-height":t-a+"px","overflow-y":"auto"}))):(l.addClass("ast-sticky-toggled-off"),jQuery("html").css({overflow:""}),("1"!=_||"1"!=y&&"on"!=y||"1"!=u&&"on"!=u?jQuery("#masthead .main-header-bar.ast-sticky-active"):jQuery("#masthead .ast-stick-primary-below-wrapper")).css({"max-height":"","overflow-y":""}))}),jQuery("#ast-fixed-header .main-header-menu-toggle").click(function(e){var t;jQuery("#ast-fixed-header .main-header-menu-toggle").hasClass("toggled")?(t=jQuery(r).height(),"1"==x&&jQuery("html").css({overflow:"auto"}),jQuery("#ast-fixed-header").css({"max-height":t+"px","overflow-y":"auto"})):(jQuery("html").css({overflow:""}),jQuery("#ast-fixed-header").css({"max-height":"","overflow-y":""}))}))})))}(jQuery,window);function display_mega_menu_on_load(){var e=document.querySelectorAll(".content-width-mega");if(0<e.length)for(var t=0;t<e.length;t++)e[t].addEventListener("mouseenter",function(e){e.target.querySelector(".astra-mega-menu-width-content").classList.remove("ast-hidden")});var a=document.querySelectorAll(".menu-container-width-mega");if(0<a.length)for(t=0;t<a.length;t++)a[t].addEventListener("mouseenter",function(e){e.target.querySelector(".astra-mega-menu-width-menu-container").classList.remove("ast-hidden")});var s=document.querySelectorAll(".full-width-mega");if(0<s.length)for(t=0;t<s.length;t++)s[t].addEventListener("mouseenter",function(e){var t=e.target.querySelector(".astra-full-megamenu-wrapper"),e=e.target.querySelector(".astra-mega-menu-width-full");t.classList.remove("ast-hidden"),e.classList.remove("ast-hidden")});var n=document.querySelectorAll(".full-stretched-width-mega");if(0<n.length)for(t=0;t<n.length;t++)n[t].addEventListener("mouseenter",function(e){var t=e.target.querySelector(".astra-full-megamenu-wrapper"),e=e.target.querySelector(".astra-mega-menu-width-full-stretched");t.classList.remove("ast-hidden"),e.classList.remove("ast-hidden")});var r=document.querySelectorAll(".custom-width-mega");if(0<r.length)for(t=0;t<r.length;t++)r[t].addEventListener("mouseenter",function(e){e.target.querySelector(".astra-mega-menu-width-custom").classList.remove("ast-hidden")})}document.addEventListener("DOMContentLoaded",display_mega_menu_on_load),document.addEventListener("astPartialContentRendered",display_mega_menu_on_load);var items=document.getElementsByClassName("astra-megamenu-li");[].slice.call(items).forEach(function(o){jQuery(o).hover(function(){var e,t,a,s,n,r,i=jQuery(o).parents(".ast-container"),l=i.children(),u=i.parent(),d=jQuery(this);(d.hasClass("full-width-mega")||d.hasClass("full-stretched-width-mega"))&&(l=jQuery(l).closest(".ast-container")),parseInt(jQuery(window).width())>parseInt(astra.break_point)?(e=l.width(),a=l.offset(),i=(t=d.offset()).left-(a.left+parseFloat(l.css("paddingLeft"))),a=u.width(),l=u.offset(),l=t.left-(l.left+parseFloat(u.css("paddingLeft"))),d.hasClass("custom-width-mega")&&(n=(n=window.getComputedStyle(d.find(".astra-mega-menu-width-custom")[0],"::before").getPropertyValue("content")||1200).replace(/[^0-9]/g,""),s=(n=parseInt(n))<=e?(r=parseInt(e-n),parseInt(i-r)):(r=parseInt(n-e),parseInt(i+r))),d.hasClass("menu-container-width-mega")&&(r=jQuery(o).parents(".main-navigation"),u.hasClass("ast-above-header")?r=jQuery(".ast-above-header-navigation"):u.hasClass("ast-below-header")&&(r=jQuery(".ast-below-header-actual-nav")),$target_container=r.length?r:d.parent("ul"),e=$target_container.width()+"px",u=jQuery(window).width()-($target_container.offset().left+$target_container.outerWidth()),r=d.offset(),r=jQuery(window).width()-u-r.left,i=parseInt($target_container.width()-r)),d.hasClass("full-width-mega")?(d.find(".astra-full-megamenu-wrapper").css({left:"-"+l+"px",width:a}),d.find(".astra-megamenu").css({width:e})):d.hasClass("full-stretched-width-mega")?d.find(".astra-full-megamenu-wrapper").css({left:"-"+l+"px",width:a}):d.hasClass("custom-width-mega")?d.find(".astra-mega-menu-width-custom").css({left:"-"+s+"px",width:n+"px"}):d.find(".astra-megamenu").css({left:"-"+i+"px",width:e})):(d.find(".astra-megamenu").css({left:"",width:"","background-image":""}),d.find(".astra-full-megamenu-wrapper").css({left:"",width:"","background-image":""}))})}),[].slice.call(items).forEach(function(e){var t=jQuery(e).parents(".ast-container"),d=t.children(),o=t.parent(),m=jQuery(e);(m.hasClass("full-width-mega")||m.hasClass("full-stretched-width-mega"))&&(d=jQuery(d).closest(".ast-container")),m.find(".menu-link").focusin(function(e){var t,a,s,n,r,i,l,u;m.find(".sub-menu").addClass("astra-megamenu-focus"),m.find(".astra-full-megamenu-wrapper").addClass("astra-megamenu-wrapper-focus"),parseInt(jQuery(window).width())>parseInt(astra.break_point)?(t=d.width(),l=d.offset(),u=(s=m.offset()).left-(l.left+parseFloat(d.css("paddingLeft"))),a=o.width(),l=o.offset(),s=s.left-(l.left+parseFloat(o.css("paddingLeft"))),m.hasClass("custom-width-mega")&&(r=(r=window.getComputedStyle(m.find(".astra-mega-menu-width-custom")[0],"::before").getPropertyValue("content")||1200).replace(/[^0-9]/g,""),n=(r=parseInt(r))<=t?(i=parseInt(t-r),parseInt(u-i)):(i=parseInt(r-t),parseInt(u+i))),m.hasClass("menu-container-width-mega")&&(l=jQuery(".main-navigation"),o.hasClass("ast-above-header")?l=jQuery(".ast-above-header-navigation"):o.hasClass("ast-below-header")&&(l=jQuery(".ast-below-header-actual-nav")),$target_container=l.length?l:m.parent("ul"),t=$target_container.width()+"px",i=jQuery(window).width()-($target_container.offset().left+$target_container.outerWidth()),l=m.offset(),l=jQuery(window).width()-i-l.left,u=parseInt($target_container.width()-l)),m.hasClass("full-width-mega")?(m.find(".astra-full-megamenu-wrapper").css({left:"-"+s+"px",width:a}),m.find(".astra-megamenu").css({width:t})):m.hasClass("full-stretched-width-mega")?m.find(".astra-full-megamenu-wrapper").css({left:"-"+s+"px",width:a}):m.hasClass("custom-width-mega")?m.find(".astra-mega-menu-width-custom").css({left:"-"+n+"px",width:r+"px"}):m.find(".astra-megamenu").css({left:"-"+u+"px",width:t})):(m.find(".astra-megamenu").css({left:"",width:"","background-image":""}),m.find(".astra-full-megamenu-wrapper").css({left:"",width:"","background-image":""}))}),m.find(".menu-link").keydown(function(e){9==e.which&&e.shiftKey&&(m.find(".sub-menu").removeClass("astra-megamenu-focus"),m.find(".astra-full-megamenu-wrapper").removeClass("astra-megamenu-wrapper-focus"))}),jQuery(e).find(".sub-menu .menu-item").last().focusout(function(){m.find(".sub-menu").removeClass("astra-megamenu-focus"),m.find(".astra-full-megamenu-wrapper").removeClass("astra-megamenu-wrapper-focus")}),jQuery(window).click(function(){m.find(".sub-menu").removeClass("astra-megamenu-focus"),m.find(".astra-full-megamenu-wrapper").removeClass("astra-megamenu-wrapper-focus")}),m.click(function(e){jQuery(e.target).hasClass("menu-item")&&e.stopImmediatePropagation()})});!function(){var e,t;function o(e){var t=(t=document.body.className).replace(e,"");document.body.className=t}function d(e){e.style.display="block",setTimeout(function(){e.style.opacity=1},1)}function n(e){e.style.opacity="",setTimeout(function(){e.style.display=""},200)}e="iPhone"==navigator.userAgent.match(/iPhone/i)?"iphone":"",t="iPod"==navigator.userAgent.match(/iPod/i)?"ipod":"",document.body.className+=" "+e,document.body.className+=" "+t;for(var a=document.querySelectorAll("a.astra-search-icon:not(.slide-search)"),s=0;a.length>s;s++)a[s].onclick=function(e){var t,a,o,n;if(e.preventDefault(),e=e||window.event,this.classList.contains("header-cover"))for(var s=document.querySelectorAll(".ast-search-box.header-cover"),c=astraAddon.is_header_builder_active||!1,r=0;r<s.length;r++)for(var l=s[r].parentNode.querySelectorAll("a.astra-search-icon"),i=0;i<l.length;i++)l[i]==this&&(d(s[r]),s[r].querySelector("input.search-field").focus(),c?(t=s[r],n=o=a=void 0,document.body.classList.contains("ast-header-break-point")&&(a=document.querySelector(".main-navigation"),n=document.querySelector(".main-header-bar"),o=document.querySelector(".ast-mobile-header-wrap"),null!==n&&null!==a&&(a=a.offsetHeight,n=n.offsetHeight,o=o.offsetHeight,n=a&&!document.body.classList.contains("ast-no-toggle-menu-enable")?parseFloat(a)-parseFloat(n):parseFloat(n),t.parentNode.classList.contains("ast-mobile-header-wrap")&&(n=parseFloat(o)),t.style.maxHeight=Math.abs(n)+"px"))):(o=s[r],n=t=void 0,document.body.classList.contains("ast-header-break-point")&&(t=document.querySelector(".main-navigation"),null!==(n=document.querySelector(".main-header-bar"))&&null!==t&&(t=t.offsetHeight,n=n.offsetHeight,n=t&&!document.body.classList.contains("ast-no-toggle-menu-enable")?parseFloat(t)-parseFloat(n):parseFloat(n),o.style.maxHeight=Math.abs(n)+"px"))));else!this.classList.contains("full-screen")||(e=document.getElementById("ast-seach-full-screen-form")).classList.contains("full-screen")&&(d(e),document.body.className+=" full-screen",e.querySelector("input.search-field").focus())};for(var c=document.getElementsByClassName("close"),s=0,r=c.length;s<r;++s)c[s].onclick=function(e){e=e||window.event;for(var t=this;;){if(t.parentNode.classList.contains("ast-search-box")){n(t.parentNode),o("full-screen");break}if(t.parentNode.classList.contains("site-header"))break;t=t.parentNode}};document.onkeydown=function(e){if(27==e.keyCode){e=document.getElementById("ast-seach-full-screen-form");null!=e&&(n(e),o("full-screen"));for(var t=document.querySelectorAll(".ast-search-box.header-cover"),a=0;a<t.length;a++)n(t[a])}},window.addEventListener("resize",function(){if("BODY"===document.activeElement.tagName&&"INPUT"!=document.activeElement.tagName){var e=document.querySelectorAll(".ast-search-box.header-cover");if(!document.body.classList.contains("ast-header-break-point"))for(var t=0;t<e.length;t++)e[t].style.maxHeight="",e[t].style.opacity="",e[t].style.display=""}})}();