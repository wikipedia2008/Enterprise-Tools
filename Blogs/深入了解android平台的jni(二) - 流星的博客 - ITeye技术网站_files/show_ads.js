(function(){var n=this,aa=function(a,b,c){return a.call.apply(a.bind,arguments)},ba=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},u=function(a,b,c){u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return u.apply(null,arguments)};var v=(new Date).getTime();var x=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},ca=function(a,b){var c=parseInt(a,10);return isNaN(c)?b:c},da=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,ea=function(a,b){if(!a)return b;var c=a.match(da);return c?c[0]:b};var fa=x("0.0"),ga=ca("101",-1),ha=ca("98",0),ia=x("0.05"),ja=x("0.001"),ka=x("0.001"),la=x("0.01"),ma=x("0.03"),na=x("0.001"),oa=x("0.01"),pa=x("");var z=function(){return"r20160308"},A=/^true$/.test("false")?!0:!1,qa=/^true$/.test("true")?!0:!1,ra=/^true$/.test("false")?!0:!1,sa=ra||!qa;var B=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},ta=/&/g,ua=/</g,va=/>/g,wa=/"/g,xa=/'/g,ya=/\x00/g,C={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},D={"'":"\\'"},za=function(a,b){return a<b?-1:a>b?1:0};var Aa=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f="string"==typeof a?a.split(""):a,e=0;e<d;e++)e in f&&b.call(c,f[e],e,a)};var E;a:{var Ba=n.navigator;if(Ba){var Ca=Ba.userAgent;if(Ca){E=Ca;break a}}E=""}var F=function(a){return-1!=E.indexOf(a)};var Da=function(){return F("Opera")||F("OPR")};var H=function(a){H[" "](a);return a};H[" "]=function(){};var Ea=Da(),I=F("Trident")||F("MSIE"),Fa=F("Edge"),J=F("Gecko")&&!(-1!=E.toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),Ga=-1!=E.toLowerCase().indexOf("webkit")&&!F("Edge"),Ha=function(){var a=n.document;return a?a.documentMode:void 0},Ia;
a:{var Ja="",Ka=function(){var a=E;if(J)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Fa)return/Edge\/([\d\.]+)/.exec(a);if(I)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ga)return/WebKit\/(\S+)/.exec(a);if(Ea)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Ka&&(Ja=Ka?Ka[1]:"");if(I){var La=Ha();if(null!=La&&La>parseFloat(Ja)){Ia=String(La);break a}}Ia=Ja}
var Ma=Ia,Na={},Oa=function(a){if(!Na[a]){for(var b=0,c=B(String(Ma)).split("."),d=B(String(a)).split("."),f=Math.max(c.length,d.length),e=0;0==b&&e<f;e++){var g=c[e]||"",h=d[e]||"",k=RegExp("(\\d*)(\\D*)","g"),l=RegExp("(\\d*)(\\D*)","g");do{var m=k.exec(g)||["","",""],q=l.exec(h)||["","",""];if(0==m[0].length&&0==q[0].length)break;b=za(0==m[1].length?0:parseInt(m[1],10),0==q[1].length?0:parseInt(q[1],10))||za(0==m[2].length,0==q[2].length)||za(m[2],q[2])}while(0==b)}Na[a]=0<=b}},Pa=n.document,Qa=
Pa&&I?Ha()||("CSS1Compat"==Pa.compatMode?parseInt(Ma,10):5):void 0;var Ra;if(!(Ra=!J&&!I)){var Sa;if(Sa=I)Sa=9<=Number(Qa);Ra=Sa}Ra||J&&Oa("1.9.1");I&&Oa("9");var Ta=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{H(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},K=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b)return c=Ua(window),a[Math.floor(c*a.length)]}return null},Ua=function(a){try{var b=new Uint32Array(1);a.crypto.getRandomValues(b);return b[0]/65536/65536}catch(c){return Math.random()}},Va=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},Wa=function(a){var b=
a.length;if(0==b)return 0;for(var c=305419896,d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&4294967295;return 0<c?c:4294967296+c};var Xa=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)};var $a=function(a,b,c,d,f,e){try{if((d?a.X:Math.random())<(f||a.N)){var g=a.M+b+("&"+Ya(c,1)),g=g.substring(0,2E3);"undefined"===typeof e?Za(g):Za(g,e)}}catch(h){}},Ya=function(a,b){var c=[];Va(a,function(a,f){var e=null,g=typeof a;if(("object"==g&&null!=a||"function"==g)&&2>b)e=Ya(a,b+1);else if(0===a||a)e=String(a);e&&c.push(f+"="+encodeURIComponent(e))});return c.join("&")},Za=function(a,b){n.google_image_requests||(n.google_image_requests=[]);var c=n.document.createElement("img");if(b){var d=
function(a){b(a);a=d;c.removeEventListener?c.removeEventListener("load",a,!1):c.detachEvent&&c.detachEvent("onload",a);a=d;c.removeEventListener?c.removeEventListener("error",a,!1):c.detachEvent&&c.detachEvent("onerror",a)};Xa(c,"load",d);Xa(c,"error",d)}c.src=a;n.google_image_requests.push(c)};var ab=document,L=window,bb,cb=null,M=ab.getElementsByTagName("script");M&&M.length&&(cb=M[M.length-1]);bb=cb;var db=Object.prototype.hasOwnProperty,eb=function(a,b){for(var c in a)db.call(a,c)&&b.call(void 0,a[c],c,a)},N=function(a){return!(!a||!a.call)&&"function"===typeof a},fb=function(a,b){for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])},gb=function(a,b){if(a.indexOf){var c=a.indexOf(b);return 0<c||0===c}for(c=0;c<a.length;c++)if(a[c]===b)return!0;return!1},hb=function(a){"google_onload_fired"in a||(a.google_onload_fired=!1,Xa(a,"load",function(){a.google_onload_fired=!0}))},ib=function(a){a=
a.google_unique_id;return"number"===typeof a?a:0},jb=!!window.google_async_iframe_id;var kb=function(a){return(a=a.google_ad_modifications)?a.loeids||[]:[]},lb=function(a,b,c){if(!a)return null;for(var d=0;d<a.length;++d)if((a[d].ad_slot||b)==b&&(a[d].ad_tag_origin||c)==c)return a[d];return null};var mb=function(a,b,c){this.U=a;this.P=b;this.w=c;this.v=null;this.O=this.o;this.ca=!1},nb=function(a,b,c){this.message=a;this.fileName=b||"";this.lineNumber=c||-1},pb=function(a,b,c,d){var f;try{f=c()}catch(h){var e=a.w;try{var g=ob(h),e=(d||a.O).call(a,b,g,void 0,void 0)}catch(k){a.o("pAR",k)}if(!e)throw h;}finally{}return f},qb=function(a,b){var c=O;return function(){for(var d=[],f=0;f<arguments.length;++f)d[f]=arguments[f];return pb(c,a,function(){return b.apply(void 0,d)})}};
mb.prototype.o=function(a,b,c,d,f){var e={};e.context=a;b instanceof nb||(b=ob(b));e.msg=b.message.substring(0,512);b.fileName&&(e.file=b.fileName);0<b.lineNumber&&(e.line=b.lineNumber.toString());a=n.document;e.url=a.URL.substring(0,512);e.ref=a.referrer.substring(0,512);if(this.v)try{this.v(e)}catch(g){}if(d)try{d(e)}catch(g){}$a(this.U,f||this.P,e,this.ca,c);return this.w};
var ob=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){var c=a.stack,d=b;try{-1==c.indexOf(d)&&(c=d+"\n"+c);for(var f;c!=f;)f=c,c=c.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=c.replace(/\n */g,"\n")}catch(e){b=d}}return new nb(b,a.fileName,a.lineNumber)};var rb,O;rb=new function(){this.M="http"+("http:"===L.location.protocol?"":"s")+"://pagead2.googlesyndication.com/pagead/gen_204?id=";this.N=.01;this.X=Math.random()};O=new mb(rb,"jserror",!0);var yb=function(a,b){pb(O,a,b,sb)},sb=O.o,zb=function(a,b){return qb(a,b)};var Ab={client:"google_ad_client",format:"google_ad_format",slotname:"google_ad_slot",output:"google_ad_output",ad_type:"google_ad_type",async_oa:"google_async_for_oa_experiment",peri:"google_top_experiment",pse:"google_pstate_expt"};O.w=!A;var P=function(a,b){this.start=a<b?a:b;this.end=a<b?b:a};P.prototype.clone=function(){return new P(this.start,this.end)};var Bb=function(a,b){this.D=b>=a?new P(a,b):null},Db=function(a,b,c,d,f){var e=new P(d,d+f-1);(f=0>=f||f%c.length)||(a=a.D,f=!(a.start<=e.start&&a.end>=e.end));if(f)return null;b=Cb(b);return null!==b&&e.start<=b&&e.end>=b?c[(b-d)%c.length]:null},Cb=function(a){var b;try{b=parseInt(a.localStorage.getItem("google_experiment_mod"),10)}catch(c){return null}if(0<=b&&1E3>b)return b;b=Math.floor(1E3*Ua(a));try{return a.localStorage.setItem("google_experiment_mod",""+b),b}catch(c){return null}};var Eb=null,Fb=function(){if(!Eb){for(var a=window,b=a,c=0;a&&a!=a.parent;)if(a=a.parent,c++,Ta(a))b=a;else break;Eb=b}return Eb};var Q={ia:{},Da:{i:"453848100",j:"453848101"},ua:{i:"24819308",j:"24819309",fa:"24819320",la:"24819321"},ta:{i:"24819330",j:"24819331"},qa:{i:"86724438",j:"86724439"},ya:{i:"10573505",j:"10573506"},K:{i:"10573595",j:"10573596"},L:{i:"10573581",j:"10573582"},xa:{i:"312815006",j:"312815007"},J:{i:"312815106",j:"312815107"},ja:{i:"26835105",j:"26835106"},pa:{i:"35923720",j:"35923721"},A:{i:"35923760",j:"35923761"},I:{i:"20040000",j:"20040001"},ga:{i:"20040016",j:"20040017"},va:{i:"19188000",j:"19188001"},
wa:{i:"20040032",j:"20040033"},ha:{ea:"314159230",sa:"314159231"},ra:{za:"27285692",Ba:"27285712",Aa:"27285713"},Ca:{i:"111849357",na:"111849358",ma:"111849359"},ka:{i:"29222061",j:"29222062",oa:"29222063"}};var Gb=new Bb(100,199),Hb=new Bb(400,499);var R=function(a,b,c,d){return a.location&&a.location.hash=="#google_plle_"+d?d:K([c,d],b)};var Ib=function(a,b,c){yb("files::getSrc",function(){if("https:"==L.location.protocol&&"http"==c)throw c="https",Error("Requested url "+a+b);});return[c,"://",a,b].join("")},Jb=function(a,b,c){c||(c=sa?"https":"http");return Ib(a,b,c)};var Kb=function(){},Mb=function(a,b,c){switch(typeof b){case "string":Lb(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array||void 0!=b.length&&b.splice){var d=b.length;c.push("[");for(var f="",e=0;e<d;e++)c.push(f),Mb(a,b[e],c),f=",";c.push("]");break}c.push("{");d="";for(f in b)b.hasOwnProperty(f)&&(e=b[f],"function"!=typeof e&&
(c.push(d),Lb(f,c),c.push(":"),Mb(a,e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},Nb={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ob=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Lb=function(a,b){b.push('"');b.push(a.replace(Ob,function(a){if(a in Nb)return Nb[a];var b=a.charCodeAt(0),f="\\u";16>b?f+="000":256>b?f+="00":4096>b&&(f+="0");return Nb[a]=
f+b.toString(16)}));b.push('"')};var Pb=F("Safari")&&!((F("Chrome")||F("CriOS"))&&!Da()&&!F("Edge")||F("Coast")||Da()||F("Edge")||F("Silk")||F("Android"))&&!(F("iPhone")&&!F("iPod")&&!F("iPad")||F("iPad")||F("iPod"));var S=null,Qb=J||Ga&&!Pb||Ea||"function"==typeof n.btoa;var T="google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_modifications google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_dom_fingerprint google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_ama google_analytics_domain_name google_analytics_uacct google_analytics_url_parameters google_auto_format google_available_width google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ui_type google_contents google_core_dbp google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_delay_requests_count google_delay_requests_delay google_ed google_eids google_enable_content_recommendations google_enable_ose google_encoding google_floating_ad_position google_font_face google_font_size google_frame_id google_gl google_hints google_is_split_slot google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_mtl google_nofo google_num_radlinks google_num_radlinks_per_unit google_only_ads_with_video google_only_pyv_ads google_only_userchoice_ads google_override_format google_page_url google_pgb_reactive google_previous_watch google_previous_searches google_referrer_url google_region google_responsive_formats google_reuse_colors google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_scs google_source_type google_sui google_skip google_tag_for_child_directed_treatment google_tag_info google_tag_origin google_tdsma google_tfs google_tl google_ui_features google_video_doc_id google_video_product_type google_video_url_to_fetch google_webgl_support google_with_pyv_ads google_yt_pt google_yt_up".split(" "),
Rb={google_ad_modifications:!0,google_analytics_domain_name:!0,google_analytics_uacct:!0},Sb=function(a){return(a=a.innerText||a.innerHTML)&&(a=a.replace(/^\s+/,"").split(/\r?\n/,1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/))&&/google_ad_client/.test(a[1])?a[1]:null},Tb=function(a){if(a=a.innerText||a.innerHTML)if(a=a.replace(/^\s+/,"").split(/\r?\n/,1)[0],(a=a.match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)||a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?\s*$/i))&&/google_ad_client/.test(a[1]))return a[1];return null},
Ub=function(a){if(a=a.innerText||a.innerHTML)if(a=a.replace(/^\s+|\s+$/g,"").replace(/\s*(\r?\n)+\s*/g,";"),(a=a.match(/^\x3c!--+(.*?)(?:--+>)?$/)||a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i))&&/google_ad_client/.test(a[1]))return a[1];return null},Xb=function(a,b){var c;try{a:{var d=a.document.getElementsByTagName("script"),f=Sb,e;"undefined"!=typeof a.google_pubvars_recovery_regexp_experiment?e=a.google_pubvars_recovery_regexp_experiment:(e=K(["C","E","EM"],ma),a.google_pubvars_recovery_regexp_experiment=
e);b.google_pubvars_recovery_regexp_experiment=e;switch(e){case "E":f=Tb;break;case "EM":var g=a.navigator&&a.navigator.userAgent||"",h;if(!(h=/appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa\/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube/i.test(g))){var k;if(k=/i(phone|pad|pod)/i.test(g)){var l;if(l=/applewebkit/i.test(g)&&!/version|safari/i.test(g)){var m;try{m=!(!L.navigator.W&&!(A&&L.google_top_window||L.top).navigator.W)}catch(r){m=!1}l=
!m}k=l}h=k}f=h?Sb:Ub}for(var q=d.length-1;0<=q;q--){var w=d[q];if(!w.google_parsed_script){w.google_parsed_script=!0;var p=f(w);if(p){c=p;break a}}}c=null}}catch(r){return!1}if(!c)return!1;try{for(var d=/(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm,f={},t;t=d.exec(c);)f[t[1]]=Vb(t[2]);Wb(f,a)}catch(r){return!1}return!!a.google_ad_client},Yb=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];eb(a,function(a,d){if(null!=a){var f;try{var e=[];Mb(new Kb,a,e);f=e.join("")}catch(g){}f&&
(f=f.replace(/\//g,"\\$&"),fb(b,d,"=",f,";"))}});return b.join("")},Zb=function(a){for(var b=0,c=T.length;b<c;b++){var d=T[b];Rb[d]||(a[d]=null)}},Vb=function(a){switch(a){case "true":return!0;case "false":return!1;case "null":return null;case "undefined":break;default:try{var b=a.match(/^(?:'(.*)'|"(.*)")$/);if(b)return b[1]||b[2]||"";if(/^[-+]?\d*(\.\d+)?$/.test(a)){var c=parseFloat(a);return c===c?c:void 0}}catch(d){}}},Wb=function(a,b){for(var c=0;c<T.length;c++){var d=T[c];null==b[d]&&null!=
a[d]&&(b[d]=a[d])}};var U=function(a){this.m=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:u(this.ba,this)});this.Z=a.google_iframe_oncopy},$b;var V="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
/[\x00&<>"']/.test(V)&&(-1!=V.indexOf("&")&&(V=V.replace(ta,"&amp;")),-1!=V.indexOf("<")&&(V=V.replace(ua,"&lt;")),-1!=V.indexOf(">")&&(V=V.replace(va,"&gt;")),-1!=V.indexOf('"')&&(V=V.replace(wa,"&quot;")),-1!=V.indexOf("'")&&(V=V.replace(xa,"&#39;")),-1!=V.indexOf("\x00")&&(V=V.replace(ya,"&#0;")));$b=V;U.prototype.set=function(a,b){this.Z.handlers[a]=b;this.m.addEventListener&&this.m.addEventListener("load",u(this.R,this,a),!1)};
U.prototype.R=function(a){a=this.m.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};U.prototype.ba=function(a,b){var c=ac("rx",a),d;a:{if(a&&(d=a.match("dt=([^&]+)"))&&2==d.length){d=d[1];break a}d=""}d=(new Date).getTime()-d;c=c.replace(/&dtd=(\d+|-?M)/,"&dtd="+(1E5<=d?"M":0<=d?d:"-M"));this.set(b,c);return c};
var ac=function(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),d=c.exec(b);d&&(b=b.replace(c,a+"="+(+d[1]+1||1)));return b};J||Ga||I&&Oa(11);var bc=/MSIE [2-7]|PlayStation|Gecko\/20090226|Android 2\.|Opera/i,cc=/Android/,dc=!1;var ec=function(a){if(!a)return"";(a=a.toLowerCase())&&"ca-"!=a.substring(0,3)&&(a="ca-"+a);return a};var W=null;var fc={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0};var X="google_ad_client google_ad_format google_ad_height google_ad_width google_city google_country google_encoding google_language google_page_url".split(" "),gc=function(a){try{var b=a.top.google_ads_params_store;if(b)return b;b=a.top.google_ads_params_store={};if(b===a.top.google_ads_params_store)return b}catch(c){}return null};var Y,Z=function(a){this.u=[];this.m=a||window;this.l=0;this.s=null;this.H=0},hc=function(a,b){this.S=a;this.da=b};Z.prototype.enqueue=function(a,b){0!=this.l||0!=this.u.length||b&&b!=window?this.C(a,b):(this.l=2,this.G(new hc(a,window)))};Z.prototype.C=function(a,b){this.u.push(new hc(a,b||this.m));ic(this)};Z.prototype.T=function(a){this.l=1;if(a){var b=zb("sjr::timeout",u(this.F,this,!0));this.s=this.m.setTimeout(b,a)}};
Z.prototype.F=function(a){a&&++this.H;1==this.l&&(null!=this.s&&(this.m.clearTimeout(this.s),this.s=null),this.l=0);ic(this)};Z.prototype.Y=function(){return!(!window||!Array)};Z.prototype.$=function(){return this.H};Z.prototype.nq=Z.prototype.enqueue;Z.prototype.nqa=Z.prototype.C;Z.prototype.al=Z.prototype.T;Z.prototype.rl=Z.prototype.F;Z.prototype.sz=Z.prototype.Y;Z.prototype.tc=Z.prototype.$;var ic=function(a){var b=zb("sjr::tryrun",u(a.aa,a));a.m.setTimeout(b,0)};
Z.prototype.aa=function(){if(0==this.l&&this.u.length){var a=this.u.shift();this.l=2;var b=zb("sjr::run",u(this.G,this,a));a.da.setTimeout(b,0);ic(this)}};Z.prototype.G=function(a){this.l=0;a.S()};
var jc=function(a){try{return a.sz()}catch(b){return!1}},kc=function(a){return!!a&&("object"===typeof a||"function"===typeof a)&&jc(a)&&N(a.nq)&&N(a.nqa)&&N(a.al)&&N(a.rl)},lc=function(){if(Y&&jc(Y))return Y;var a=Fb(),b=a.google_jobrunner;return kc(b)?Y=b:a.google_jobrunner=Y=new Z(a)},mc=function(a,b){lc().nq(a,b)},nc=function(a,b){lc().nqa(a,b)};var oc=jb?1==ib(L):!ib(L),pc=function(){var a=ra?"https":"http",b=H("script"),c;(c=A&&window.google_cafe_host)||(c=ea("","pagead2.googlesyndication.com"));return["<",b,' src="',Jb(c,["/pagead/js/",z(),"/r20151006/show_ads_impl.js"].join(""),a),'"></',b,">"].join("")},qc=function(a,b,c,d){return function(){var f=!1;d&&lc().al(3E4);try{var e=
a.document.getElementById(b).contentWindow;if(Ta(e)){var g=a.document.getElementById(b).contentWindow,h=g.document;h.body&&h.body.firstChild||(/Firefox/.test(navigator.userAgent)?h.open("text/html","replace"):h.open(),g.google_async_iframe_close=!0,h.write(c))}else{for(var k=a.document.getElementById(b).contentWindow,e=c,e=String(e),g=['"'],h=0;h<e.length;h++){var l=e.charAt(h),m=l.charCodeAt(0),q=h+1,w;if(!(w=C[l])){var p;if(31<m&&127>m)p=l;else{var t=l;if(t in D)p=D[t];else if(t in C)p=D[t]=C[t];
else{var r=t,y=t.charCodeAt(0);if(31<y&&127>y)r=t;else{if(256>y){if(r="\\x",16>y||256<y)r+="0"}else r="\\u",4096>y&&(r+="0");r+=y.toString(16).toUpperCase()}p=D[t]=r}}w=p}g[q]=w}g.push('"');k.location.replace("javascript:"+g.join(""))}f=!0}catch(G){k=Fb().google_jobrunner,kc(k)&&k.rl()}f&&(f=ac("google_async_rrc",c),(new U(a)).set(b,qc(a,b,f,!1)))}},rc=function(a){var b=["<iframe"];eb(a,function(a,d){null!=a&&b.push(" "+d+'="'+a+'"')});b.push("></iframe>");return b.join("")},sc=function(a){if(!W)a:{for(var b=
[n.top],c=[],d=0,f;f=b[d++];){c.push(f);try{if(f.frames)for(var e=f.frames.length,g=0;g<e&&1024>b.length;++g)b.push(f.frames[g])}catch(k){}}for(b=0;b<c.length;b++)try{var h=c[b].frames.google_esf;if(h){W=h;break a}}catch(k){}W=null}return W?"":(c={style:"display:none"},c["data-ad-client"]=ec(a),c.id="google_esf",c.name="google_esf",a=Jb(ea("","googleads.g.doubleclick.net"),["/pagead/html/",z(),"/r20151006/zrt_lookup.html"].join("")),
c.src=a,rc(c))},tc=function(a,b){var c=b.google_ad_output,d=b.google_ad_format;d||"html"!=c&&null!=c||(d=b.google_ad_width+"x"+b.google_ad_height);c=!b.google_ad_slot||b.google_override_format||!fc[b.google_ad_width+"x"+b.google_ad_height]&&"aa"==b.google_loader_used;d=d&&c?d.toLowerCase():"";b.google_ad_format=d;for(var d=[b.google_ad_slot,b.google_ad_format,b.google_ad_type,b.google_ad_width,b.google_ad_height],c=[],f=0,e=bb.parentElement;e&&25>f;e=e.parentNode,++f)c.push(9!==e.nodeType&&e.id||
"");(c=c.join())&&d.push(c);b.google_ad_unit_key=Wa(d.join(":")).toString();d=a.google_adk2_experiment=a.google_adk2_experiment||K(["C","E"],ka)||"N";if("E"==d){d=bb;c=[];for(f=0;d&&25>f;++f){var e="",e=(e=9!==d.nodeType&&d.id)?"/"+e:"",g;a:{if(d&&d.nodeName&&d.parentElement){g=d.nodeName.toString().toLowerCase();for(var h=d.parentElement.childNodes,k=0,l=0;l<h.length;++l){var m=h[l];if(m.nodeName&&m.nodeName.toString().toLowerCase()===g){if(d===m){g="."+k;break a}++k}}}g=""}c.push((d.nodeName&&d.nodeName.toString().toLowerCase())+
e+g);d=d.parentElement}d=c.join()+":";c=a;f=[];if(c)try{for(var q=c.parent,e=0;q&&q!==c&&25>e;++e){var w=q.frames;for(g=0;g<w.length;++g)if(c===w[g]){f.push(g);break}c=q;q=c.parent}}catch(p){}b.google_ad_dom_fingerprint=Wa(d+f.join()).toString()}else"C"==d&&(b.google_ad_dom_fingerprint="ctrl")};(function(a){O.v=function(b){Aa(a,function(a){a(b)})}})([function(a){a.shv=z()},function(a){Va(Ab,function(b,c){try{null!=n[b]&&(a[c]=n[b])}catch(d){}})}]);
yb("sa::main",function(){var a=window,b=a.google_ad_modifications=a.google_ad_modifications||{};if(!b.plle){b.plle=!0;var b=b.loeids=b.loeids||[],c=Q.K,d=c.j;(c=a.location&&a.location.hash=="#google_plle_"+d?d:Db(Gb,a,[c.i,d],ga,ha))&&b.push(c);c=Q.J;(c=R(a,ia,c.i,c.j))&&b.push(c);c=Q.L;(c=R(a,ja,c.i,c.j))&&b.push(c);c=Q.A;(c=R(a,oa,c.i,c.j))&&b.push(c);ab.body||(c=Q.I,(c=R(a,pa,c.i,c.j))&&b.push(c))}d=a.google_ad_slot;b=a.google_ad_modifications;!b||lb(b.ad_whitelist,d,void 0)?b=null:(c=b.space_collapsing||
"none",b=(d=lb(b.ad_blacklist,d))?{B:!0,V:d.space_collapsing||c}:b.remove_ads_by_default?{B:!0,V:c}:null);if(b&&b.B)Zb(a);else if(hb(a),(b=!1===window.google_enable_async)||(b=navigator.userAgent,bc.test(b)?b=!1:(void 0!==window.google_async_for_oa_experiment||!cc.test(navigator.userAgent)||bc.test(navigator.userAgent)||(window.google_async_for_oa_experiment=Db(Hb,window,["C","E"],Hb.D.start,Math.round(1E3*fa))),b=cc.test(b)?"E"!==window.google_async_for_oa_experiment:!0),b=!b||window.google_container_id||
window.google_ad_output&&"html"!=window.google_ad_output),b)a.google_loader_used="sb",a.google_start_time=v,tc(a,a),document.write(sc(a.google_ad_client)+pc());else{oc&&(c=a.google_ad_client,b=navigator,a&&c&&b&&(b=a.document,c=ec(c),(d=B("r20160212"))&&(d+="/"),d=Jb("pagead2.googlesyndication.com","/pub-config/"+d+c+".js"),c=b.createElement("script"),c.src=d,(b=b.getElementsByTagName("script")[0])&&b.parentNode&&b.parentNode.insertBefore(c,b)));a.google_unique_id?++a.google_unique_id:
a.google_unique_id=1;c={};null==a.google_ad_client&&Xb(a,c)&&(c.google_loader_features_used=2048);Wb(a,c);c.google_loader_used="sa";Zb(a);var b=H("script"),f,e;a:{try{var g=a.top.google_pubvars_reuse_experiment;if("undefined"!==typeof g){e=g;break a}g=K(["C","E"],la)||null;a.top.google_pubvars_reuse_experiment=g;if(a.top.google_pubvars_reuse_experiment===g){e=g;break a}}catch(tb){}e=null}if("E"===e){f=null!=c.google_ad_client;e=null!=c.google_ad_width;g=null!=c.google_ad_height;if(d=gc(a)){for(var h=
0;h<X.length;h++){var k=X[h];null!=c[k]&&(d[k]=c[k])}if(d=gc(a)){var h=d.google_ad_width,k=d.google_ad_height,l=d.google_ad_format;h&&k&&l&&(l=(l=l&&l.match(/(\d+)x(\d+)/))?{width:l[1],height:l[2]}:null,!l||l.width==h&&l.height==k||delete d.google_ad_format)}}if(d=gc(a))for(h=0;h<X.length;h++)k=X[h],null==c[k]&&null!=d[k]&&(c[k]=d[k]);d=null!=c.google_ad_client;h=null!=c.google_ad_width;k=null!=c.google_ad_height;f=[f?"c2":d?"c1":"c0",e?"w2":h?"w1":"w0",g?"h2":k?"h1":"h0"].join()}e={};g=c.google_ad_height;
e.width='"'+c.google_ad_width+'"';e.height='"'+g+'"';e.frameborder='"0"';e.marginwidth='"0"';e.marginheight='"0"';e.vspace='"0"';e.hspace='"0"';e.allowtransparency='"true"';e.scrolling='"no"';e.allowfullscreen='"true"';e.onload='"'+$b+'"';for(var m,g=a.document,d=e.id,h=0;!d||g.getElementById(d);)d="aswift_"+h++;e.id=d;e.name=d;var d=c.google_ad_width,h=c.google_ad_height,k=Q.A,l=k.i,q=k.j,w=c.google_active_plles=c.google_active_plles||[];gb(kb(a),l)?w.push(l):gb(kb(a),q)&&w.push(q);dc=gb(kb(a),k.j);
k=["<iframe"];for(m in e)e.hasOwnProperty(m)&&fb(k,m+"="+e[m]);m="left:0;position:absolute;top:0;";dc&&(m=m+"width:"+d+"px;height:"+h+"px;");k.push('style="'+m+'"');k.push("></iframe>");m=e.id;d="border:none;height:"+h+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+d+"px;background-color:transparent";g.write(['<ins id="',m+"_expand",'" style="display:inline-table;',d,'"><ins id="',m+"_anchor",'" style="display:block;',d,'">',k.join(" "),"</ins></ins>"].join(""));m=e.id;tc(a,c);
e=Yb(c);g=null;d=K(["C","E"],na);if("E"==d){a:{try{if(window.JSON&&window.JSON.stringify&&window.encodeURIComponent){var p=encodeURIComponent(window.JSON.stringify(c)),t;if(Qb)t=n.btoa(p);else{h=[];for(l=k=0;l<p.length;l++){for(var r=p.charCodeAt(l);255<r;)h[k++]=r&255,r>>=8;h[k++]=r}if(!S)for(S={},p=0;65>p;p++)S[p]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(p);p=S;r=[];for(k=0;k<h.length;k+=3){var y=h[k],G=k+1<h.length,ub=G?h[k+1]:0,vb=k+2<h.length,wb=vb?h[k+2]:0,
l=y>>2,q=(y&3)<<4|ub>>4,w=(ub&15)<<2|wb>>6,xb=wb&63;vb||(xb=64,G||(w=64));r.push(p[l],p[q],p[w],p[xb])}t=r.join("")}g=t;break a}$a(rb,"sblob",{json:window.JSON?1:0,eURI:window.encodeURIComponent?1:0},!0,void 0,void 0)}catch(tb){O.o("sblob",tb,void 0,void 0)}g=""}g||(g="{X}")}else"C"==d&&(g="{C}");t=sc(c.google_ad_client);y=(new Date).getTime();if(G=a.google_async_for_oa_experiment)a.google_async_for_oa_experiment=void 0;t=["<!doctype html><html><body>",t,"<",b,">",e,"google_show_ads_impl=true;google_unique_id=",
ib(a),';google_async_iframe_id="',m,'";google_start_time=',v,";",d?'google_pub_vars = "'+g+'";':"",f?'google_pubvars_reuse_experiment_result = "'+f+'";':"",G?'google_async_for_oa_experiment="'+G+'";':"","google_bpp=",y>v?y-v:1,";google_async_rrc=0;google_iframe_start_time=new Date().getTime();</",b,">",pc(),"</body></html>"].join("");(a.document.getElementById(m)?mc:nc)(qc(a,m,t,!0))}});}).call(this);
