var mzadxC=(function(mzadxC,win,doc){var page_loaded=0,_onload=win.onload,MZ_RSQ="__mz_ad_rsq",render_pre_data_queue="__mz_render_data_queue";mzadxC.render=function(materials){var i=0,constructor,len;if(!materials){return}constructor=materials.constructor;if(constructor==Array){for(len=materials.length;i<len;){mzadxC.render(materials[i++])}}else{if(constructor==Object){deal_task(materials)}}};win.onload=function(){page_loaded=1;win.onload=_onload;_onload&&_onload.call(win)};function monitor_send(arr,type,server){var i=0,img,len;for(len=arr.length;i<len;){img=new Image();img.onload=img.onerror=function(){};img.src=arr[i++]}}function render_material(material,node){var type=material.type,style=material.style,imp=material.pm,server=material.server;if(imp.constructor==Object){var s0imp=imp["0"];if(s0imp&&s0imp.constructor==Array){monitor_send(s0imp,"imp",server);delete imp["0"]}for(var sec in imp){var sximp=imp[sec];if(sximp.constructor==Array){(function(sximp,sec){win.setTimeout(function(){monitor_send(sximp,"imp",server)},parseInt(sec)*1000)})(sximp,sec)}}}if(material.src.toLowerCase().indexOf("<iframe")==0){if(style){var data={};data.material=material;data.contentHTML=material.src;pushDataToRenderStyleQueue(data)}else{node.innerHTML=material.src}}else{if(style){var data={};data.material=material;data.contentHTML='<iframe width="'+material.adw+'" height="'+material.adh+'" frameborder="0" marginwidth="0" marginheight="0" allowTransparency="true" scrolling="no" src="http://js.xtgreat.com/mz_iframed_js.html#'+encodeURIComponent(material.src.split("").reverse().join(""))+'"></iframe>';pushDataToRenderStyleQueue(data)}else{node.innerHTML='<iframe width="'+material.adw+'" height="'+material.adh+'" frameborder="0" marginwidth="0" marginheight="0" allowTransparency="true" scrolling="no" src="http://js.xtgreat.com/mz_iframed_js.html#'+encodeURIComponent(material.src.split("").reverse().join(""))+'"></iframe>'}}}function pushDataToRenderStyleQueue(data){win[MZ_RSQ]||(win[MZ_RSQ]=[]);win[MZ_RSQ].push(data)}function deal_task(material){var src=material.src;if(src.replace(/^\s+|\s+$/g,"")==""){return}var node=document.getElementById(material.nodeId);if(node){render_material(material,node)}else{if(!page_loaded){win.setTimeout(function(){deal_task.call(null,material)},50)}}}function __mz_render_queue(){this.push=function(materials){materials.constructor==Array&&mzadxC.render(materials)}}var data_queue_C=win[render_pre_data_queue+"C"];if(data_queue_C&&data_queue_C.constructor==Array){mzadxC.render(data_queue_C);win[render_pre_data_queue+"C"]=new __mz_render_queue()}})(mzadxC||{},window,document);
