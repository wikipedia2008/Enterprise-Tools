__twttrll([2],{107:function(t,a,e){var n=e(84);t.exports=n.build([e(108)])},108:function(t,a,e){function n(t){return"large"===t?"l":"m"}function s(t){t.params({screenName:{required:!0},lang:{required:!0,transform:f.matchLanguage,fallback:"en"},size:{fallback:"medium",transform:n},showScreenName:{fallback:!0},showCount:{fallback:!0},partner:{fallback:p(o.val,o,"partner")},count:{},preview:{}}),t.define("getUrlParams",function(){return l.compact({id:this.id,lang:this.params.lang,size:this.params.size,screen_name:this.params.screenName,show_count:"none"===this.params.count?!1:this.params.showCount,show_screen_name:this.params.showScreenName,preview:this.params.preview,partner:this.params.partner,dnt:m.enabled(),time:+new Date})}),t.around("widgetDataAttributes",function(t){return l.aug({"screen-name":this.params.screenName},t())}),t.around("scribeNamespace",function(t){return l.aug(t(),{page:"button",section:"follow"})}),t.define("scribeImpression",function(){this.scribe({action:"impression"},{language:this.params.lang,message:[this.params.size,"none"===this.params.count?"nocount":"withcount"].join(":")+":"})}),t.override("render",function(){var t=h(g,{lang:this.params.lang}),a=c.encode(this.getUrlParams()),e=u.base()+t+"#"+a;return this.scribeImpression(),r.all([this.sandbox.setTitle(b),this.sandbox.addClass(w),this.sandbox.loadDocument(e)])})}var r=e(2),i=e(84),o=e(37),u=e(93),m=e(33),h=e(109),l=e(11),c=e(24),p=e(13),d=e(110),f=e(90),g=d.followButtonHtmlPath,b="Twitter Follow Button",w="twitter-follow-button";t.exports=i.couple(e(96),e(111),s)},109:function(t,a){function e(t,a){return t.replace(n,function(t,e){return void 0!==a[e]?a[e]:t})}var n=/\{\{([\w_]+)\}\}/g;t.exports=e},110:function(t,a){t.exports={tweetButtonHtmlPath:"/widgets/tweet_button.b41e99df00581dc95d7fdd63f3283511.{{lang}}.html",followButtonHtmlPath:"/widgets/follow_button.b41e99df00581dc95d7fdd63f3283511.{{lang}}.html",hubHtmlPath:"/widgets/hub.b41e99df00581dc95d7fdd63f3283511.html"}},225:function(t,a,e){var n=e(84);t.exports=n.build([e(226)])},226:function(t,a,e){function n(t){return"large"===t?"l":"m"}function s(t){return g.contains(C,t)}function r(t){return w.hashTag(t,!1)}function i(t){var a=/\+/.test(t)&&!/ /.test(t);return a?t.replace(/\+/g," "):t}function o(t){t.params({lang:{required:!0,transform:_.matchLanguage,fallback:"en"},size:{fallback:"medium",transform:n},type:{fallback:"share",validate:s},text:{transform:i},screenName:{transform:w.screenName},buttonHashtag:{transform:r},partner:{fallback:x(l.val,l,"partner")},via:{},related:{},hashtags:{},url:{}}),t.define("getUrlParams",function(){var t=this.params.text,a=this.params.url,e=this.params.via,n=this.params.related,s=f.getScreenNameFromPage();return"share"===this.params.type?(t=t||m.title,a=a||f.getCanonicalURL()||h.href,e=e||s):s&&(n=n?s+","+n:s),g.compact({id:this.id,lang:this.params.lang,size:this.params.size,type:this.params.type,text:t,url:a,via:e,related:n,button_hashtag:this.params.buttonHashtag,screen_name:this.params.screenName,hashtags:this.params.hashtags,partner:this.params.partner,original_referer:h.href,dnt:p.enabled(),time:+new Date})}),t.around("widgetDataAttributes",function(t){return"mention"==this.params.type?g.aug({"screen-name":this.params.screenName},t()):"hashtag"==this.params.type?g.aug({hashtag:this.params.buttonHashtag},t()):g.aug({url:this.params.url},t())}),t.around("scribeNamespace",function(t){return g.aug(t(),{page:"button",section:this.params.type})}),t.define("scribeImpression",function(){this.scribe({action:"impression"},{language:this.params.lang,message:[this.params.size,"nocount"].join(":")+":"})}),t.override("render",function(){var t,a=d(k,{lang:this.params.lang}),e=b.encode(this.getUrlParams()),n=c.base()+a+"#"+e;switch(this.params.type){case"hashtag":t=H;break;case"mention":t=B;break;default:t=z}return this.scribeImpression(),u.all([this.sandbox.setTitle(P),this.sandbox.addClass(y),this.sandbox.addClass(t),this.sandbox.loadDocument(n)])})}var u=e(2),m=e(9),h=e(18),l=e(37),c=e(93),p=e(33),d=e(109),f=e(35),g=e(11),b=e(24),w=e(23),v=e(84),x=e(13),N=e(110),_=e(90),k=N.tweetButtonHtmlPath,P="Twitter Tweet Button",y="twitter-tweet-button",z="twitter-share-button",H="twitter-hashtag-button",B="twitter-mention-button",C=["share","hashtag","mention"];t.exports=v.couple(e(96),e(111),o)}});