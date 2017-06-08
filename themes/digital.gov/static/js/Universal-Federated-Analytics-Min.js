var oCONFIG={GWT_UAID:['UA-33523145-1'],FORCE_SSL:true,ANONYMIZE_IP:true,AGENCY:'',SUB_AGENCY:'',VERSION:'20160520 v3.1 - Universal Analytics',SITE_TOPIC:'',SITE_PLATFORM:'',USE_MAIN_CUSTOM_DIMENSIONS:true,MAIN_AGENCY_CUSTOM_DIMENSION_SLOT:'dimension1',MAIN_SUBAGENCY_CUSTOM_DIMENSION_SLOT:'dimension2',MAIN_CODEVERSION_CUSTOM_DIMENSION_SLOT:'dimension3',MAIN_SITE_TOPIC_CUSTOM_DIMENSION_SLOT:'dimension4',MAIN_SITE_PLATFORM_CUSTOM_DIMENSION_SLOT:'dimension5',USE_PARALLEL_CUSTOM_DIMENSIONS:false,PARALLEL_AGENCY_CUSTOM_DIMENSION_SLOT:'dimension1',PARALLEL_SUBAGENCY_CUSTOM_DIMENSION_SLOT:'dimension2',PARALLEL_CODEVERSION_CUSTOM_DIMENSION_SLOT:'dimension3',PARALLEL_SITE_TOPIC_CUSTOM_DIMENSION_SLOT:'dimension4',PARALLEL_SITE_PLATFORM_CUSTOM_DIMENSION_SLOT:'dimension5',COOKIE_DOMAIN:location.hostname.replace('www.','').toLowerCase(),COOKIE_TIMEOUT:60*60*24*2*365,SEARCH_PARAMS:'q|querytext|nasaInclude|k|qt',YOUTUBE:false,AUTOTRACKER:true,EXTS:'doc|docx|xls|xlsx|xlsm|ppt|pptx|exe|zip|pdf|js|txt|csv|dxf|dwgd|rfa|rvt|dwfx|dwg|wmv|jpg|msi|7z|gz|tgz|wma|mov|avi|mp3|mp4|csv|mobi|epub|swf|rar',SUBDOMAIN_BASED:true,DOUNBLECLICK_LINK:false,ENHANCED_LINK:false,OPTOUT_PAGE:false,PUA_NAME:'GSA_ENOR'};function _onEveryPage(){_updateConfig();_defineCookieDomain();_defineAgencyCDsValues();}
_onEveryPage();function _defineCookieDomain()
{var domainPattern=/(([^.\/]+\.[^.\/]{2,3}\.[^.\/]{2})|(([^.\/]+\.)[^.\/]{2,4}))(\/.*)?$/;if(domainPattern.test(oCONFIG.SUBDOMAIN_BASED.toString()))
{oCONFIG.COOKIE_DOMAIN=oCONFIG.SUBDOMAIN_BASED.toLowerCase().replace('www.','');oCONFIG.SUBDOMAIN_BASED=true;}
else
{if(oCONFIG.SUBDOMAIN_BASED.toString()=='false')
{oCONFIG.COOKIE_DOMAIN=document.location.hostname.match(/(([^.\/]+\.[^.\/]{2,3}\.[^.\/]{2})|(([^.\/]+\.)[^.\/]{2,4}))(\/.*)?$/)[1];oCONFIG.SUBDOMAIN_BASED=true;}
else if(oCONFIG.SUBDOMAIN_BASED.toString()=='auto'||oCONFIG.SUBDOMAIN_BASED.toString()=='true')
{oCONFIG.COOKIE_DOMAIN=location.hostname.toLowerCase().replace('www.','');oCONFIG.SUBDOMAIN_BASED=false;}
else
{oCONFIG.COOKIE_DOMAIN=location.hostname.toLowerCase().replace('www.','');oCONFIG.SUBDOMAIN_BASED=false;}}}
function _defineAgencyCDsValues()
{oCONFIG.AGENCY=oCONFIG.AGENCY||'unspecified:'+oCONFIG.COOKIE_DOMAIN;oCONFIG.SUB_AGENCY=oCONFIG.SUB_AGENCY||(''+oCONFIG.COOKIE_DOMAIN);oCONFIG.SUB_AGENCY=oCONFIG.AGENCY+' - '+oCONFIG.SUB_AGENCY;oCONFIG.SITE_TOPIC=oCONFIG.SITE_TOPIC||'unspecified:'+oCONFIG.COOKIE_DOMAIN;oCONFIG.SITE_PLATFORM=oCONFIG.SITE_PLATFORM||'unspecified:'+oCONFIG.COOKIE_DOMAIN;}
function _cleanBooleanParam(_paramValue){switch(_paramValue.toString().toLowerCase()){case'true':case'on':case'yes':case'1':return true;case'false':case'off':case'no':case'0':return false;default:return _paramValue;}}
function _isValidUANum(_UANumber){_UANumber=_UANumber.toLowerCase();var _regEx=/^ua\-([0-9]+)\-[0-9]+$/;var match=_UANumber.match(_regEx);return(match!=null&&match.length>0);}
function _cleanDimensionValue(_paramValue){try{pattern=/^dimension([1-9]|[1-9][0-9]|1([0-9][0-9])|200)$/;if(pattern.test(_paramValue))
return _paramValue;if(_paramValue.match(/\d+$/g)!=null)
{var _tmpValue='dimension'+_paramValue.match(/\d+$/g)[0];if(pattern.test(_tmpValue))
return _tmpValue;}
return'';}catch(err){}}
function _updateConfig(){var _JSElement='';var _paramList='';if(typeof _fedParmsGTM!='undefined'){_paramList=_fedParmsGTM.toLowerCase().split('&');}
else
{_JSElement=document.getElementById('_fed_an_ua_tag').getAttribute('src').match(/^([^\?]*)(.*)$/i)[2].replace("?","");_paramList=_JSElement.split('&');}
for(var i=0;i<_paramList.length;i++){_keyValuePair=decodeURIComponent(_paramList[i].toLowerCase());_key=_keyValuePair.split('=')[0];_value=_keyValuePair.split('=')[1];switch(_key){case'pua':var _UAList=_value.split(',');for(var j=0;j<_UAList.length;j++)
if(_isValidUANum(_UAList[j]))
oCONFIG.GWT_UAID.push(_UAList[j].toUpperCase());break;case'agency':oCONFIG.AGENCY=_value.toUpperCase();break;case'subagency':oCONFIG.SUB_AGENCY=_value.toUpperCase();break;case'sitetopic':oCONFIG.SITE_TOPIC=_value;break;case'siteplatform':oCONFIG.SITE_PLATFORM=_value;break;case'parallelcd':_value=_cleanBooleanParam(_value);if(true==_value||false==_value)
oCONFIG.USE_PARALLEL_CUSTOM_DIMENSIONS=_value;break;case'palagencydim':_value=_cleanDimensionValue(_value);if(''!=_value)
oCONFIG.PARALLEL_AGENCY_CUSTOM_DIMENSION_SLOT=_value;break;case'palsubagencydim':_value=_cleanDimensionValue(_value);if(''!=_value)
oCONFIG.PARALLEL_SUBAGENCY_CUSTOM_DIMENSION_SLOT=_value;break;case'palversiondim':_value=_cleanDimensionValue(_value);if(''!=_value)
oCONFIG.PARALLEL_CODEVERSION_CUSTOM_DIMENSION_SLOT=_value;break;case'paltopicdim':_value=_cleanDimensionValue(_value);if(''!=_value)
oCONFIG.PARALLEL_SITE_TOPIC_CUSTOM_DIMENSION_SLOT=_value;break;case'palplatformdim':_value=_cleanDimensionValue(_value);if(''!=_value)
oCONFIG.PARALLEL_SITE_PLATFORM_CUSTOM_DIMENSION_SLOT=_value;break;case'cto':oCONFIG.COOKIE_TIMEOUT=parseInt(_value)*2628000;break;case'sp':oCONFIG.SEARCH_PARAMS+='|'+_value.replace(/,/g,'|');break;case'exts':oCONFIG.EXTS+='|'+_value.replace(/,/g,'|');break;case'yt':_value=_cleanBooleanParam(_value);if(true==_value||false==_value)
oCONFIG.YOUTUBE=_value;break;case'autotracker':_value=_cleanBooleanParam(_value);if(true==_value||false==_value)
oCONFIG.AUTOTRACKER=_value;break;case'sdor':oCONFIG.SUBDOMAIN_BASED=_cleanBooleanParam(_value);break;case'dclink':_value=_cleanBooleanParam(_value);if(true==_value||false==_value)
oCONFIG.DOUNBLECLICK_LINK=_value;break;case'enhlink':_value=_cleanBooleanParam(_value);if(true==_value||false==_value)
oCONFIG.ENHANCED_LINK=_value;break;case'optout':_value=_cleanBooleanParam(_value);if(true==_value||false==_value)
oCONFIG.OPTOUT_PAGE=_value;break;default:break;}}}
function _sendCustomDimensions(_slotNums,_val)
{if(_slotNums.length>0&&_val!=''&&_val!=undefined)
{if(tObjectCheck!=window['GoogleAnalyticsObject'])
{createTracker(false);}
for(var i=0;i<oCONFIG.GWT_UAID.length;i++)
{if(_slotNums[i]!='dimension0')
{try
{window[window['GoogleAnalyticsObject']](oCONFIG.PUA_NAME+i+'.set',_slotNums[i],_val);}
catch(err)
{}}}}}
function _sendCustomMetrics(_slotNums,_val)
{if(_slotNums.length>0&&_val!=''&&_val!=undefined)
{if(tObjectCheck!=window['GoogleAnalyticsObject'])
{createTracker(false);}
for(var i=0;i<oCONFIG.GWT_UAID.length;i++)
{if(_slotNums[i]!='metric0')
{try
{window[window['GoogleAnalyticsObject']](oCONFIG.PUA_NAME+i+'.set',_slotNums[i],_val);}
catch(err)
{}}}}}
function _sendEvent(_cat,_act,_lbl,_val,_nonInteraction){if(_cat!=''&&_cat!=undefined&&_act!=''&&_act!=undefined)
{if(tObjectCheck!=window['GoogleAnalyticsObject'])
{createTracker(false);}
for(var i=0;i<oCONFIG.GWT_UAID.length;i++)
{try
{window[window['GoogleAnalyticsObject']](oCONFIG.PUA_NAME+i+'.send','event',_cat,_act,((_lbl!=undefined)?_lbl:''),((_val!=''||!isNaN(_val)||_val!=undefined)?parseInt(_val):0),{'nonInteraction':_nonInteraction});}
catch(err)
{}}}}
function _sendPageview(_virtualPath,_virtualTitle)
{if(_virtualPath!=''&&_virtualPath!=undefined)
{if(tObjectCheck!=window['GoogleAnalyticsObject'])
{createTracker(false);}
for(var i=0;i<oCONFIG.GWT_UAID.length;i++)
{try
{window[window['GoogleAnalyticsObject']](oCONFIG.PUA_NAME+i+'.send','pageview',{'page':_virtualPath,'title':((_virtualTitle!=''||_virtualTitle!=undefined)?_virtualTitle:document.title)});}
catch(err)
{}}}}
function gas(_command,_hitType,_param1,_param2,_param3,_param4,_param5)
{if(_command!=undefined&&_command!=''&&_hitType!=undefined&&_hitType!=''&&_param1!=undefined&&_param1!='')
{if(_hitType.toLowerCase()=='pageview')
{try
{_sendPageview(_param1,((_param2==undefined||_param2=='')?document.title:_param2));}
catch(err)
{}}
else if(_hitType.toLowerCase()=='event'&&_param2!=undefined&&_param2!='')
{try
{var _nonInteraction='false';if(_param5==undefined)
{_param5=_nonInteraction;}
else
{_nonInteraction=_cleanBooleanParam(_param5);}
_sendEvent(_param1,_param2,((_param3==undefined)?'':_param3),((_param4==undefined||_param4==''||isNaN(_param4))?0:parseInt(_param4)),((_nonInteraction=='true')?1:0));}
catch(err)
{}}
else if(_hitType.toLowerCase().indexOf('dimension')!=-1)
{try
{var cdsTmpArr=_hitType.toLowerCase().split(',');var cdsArr=[];dimsPattern=/^dimension([1-9]|[1-9][0-9]|1([0-9][0-9])|200)$/;for(var ix=0;ix<cdsTmpArr.length;ix++)
{if(dimsPattern.test(cdsTmpArr[ix]))
{cdsArr.push(cdsTmpArr[ix]);}
else
{var tmpDim='dimension'+cdsTmpArr[ix].match(/\d+$/g)[0];if(dimsPattern.test(tmpDim)||tmpDim=='dimension0')
{cdsArr.push(tmpDim);}}}
if(cdsArr.length>0)
{_sendCustomDimensions(cdsArr,((_param1==undefined)?'':_param1));}}
catch(err)
{}}
else if(_hitType.toLowerCase().indexOf('metric')!=-1)
{try
{var mtrcsTmpArr=_hitType.toLowerCase().split(',');var mtrcsArr=[];mtrcsPattern=/^metric([1-9]|[1-9][0-9]|1([0-9][0-9])|200)$/;for(var ixx=0;ixx<mtrcsTmpArr.length;ixx++)
{if(mtrcsPattern.test(mtrcsTmpArr[ixx]))
{mtrcsArr.push(mtrcsTmpArr[ixx]);}
else
{var tmpMtrcs='metric'+mtrcsTmpArr[ixx].match(/\d+$/g)[0];if(mtrcsPattern.test(tmpMtrcs)||tmpMtrcs=='metric0')
{mtrcsArr.push(tmpMtrcs);}}}
if(mtrcsArr.length>0)
{_sendCustomMetrics(mtrcsArr,((_param1==undefined||_param1==''||isNaN(_param1))?1:parseFloat(_param1)));}}
catch(err)
{}}}}
function _URIHandler(pageName){var re=new RegExp('([?&])('+oCONFIG.SEARCH_PARAMS+')(=[^&]*)','i');if(re.test(pageName)){pageName=pageName.replace(re,'$1query$3');}
return pageName;}
function _isExcludedReferrer(){if(document.referrer!='')
{var refer=document.referrer.replace(/https?\:\/\//,'').split('/')[0].replace('www.','');if(oCONFIG.SUBDOMAIN_BASED)
{if(refer.indexOf(oCONFIG.COOKIE_DOMAIN)!=-1){return true;}
else{return false;}}else
{if(refer==oCONFIG.COOKIE_DOMAIN){return true;}
else{return false;}}}}
var tObjectCheck;if(typeof window['GoogleAnalyticsObject']=='undefined')
{(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');tObjectCheck=window['GoogleAnalyticsObject'];}
else
{tObjectCheck=window['GoogleAnalyticsObject'];}
createTracker(true);function createTracker(sendPv)
{for(var dpv=0;dpv<oCONFIG.GWT_UAID.length;dpv++)
{var _adjPageUri=_URIHandler(document.location.pathname+document.location.search+document.location.hash);if(oCONFIG.OPTOUT_PAGE)
{window['ga-disable-'+oCONFIG.GWT_UAID[dpv]]=true;};window[window['GoogleAnalyticsObject']]('create',oCONFIG.GWT_UAID[dpv],oCONFIG.COOKIE_DOMAIN,{'name':oCONFIG.PUA_NAME+dpv,'allowLinker':true,'cookieExpires':parseInt(oCONFIG.COOKIE_TIMEOUT)});if(oCONFIG.ANONYMIZE_IP){window[window['GoogleAnalyticsObject']](oCONFIG.PUA_NAME+dpv+'.set','anonymizeIp',oCONFIG.ANONYMIZE_IP);}
if(oCONFIG.DOUNBLECLICK_LINK){window[window['GoogleAnalyticsObject']](oCONFIG.PUA_NAME+dpv+'.require','displayfeatures');}
if(oCONFIG.ENHANCED_LINK){window[window['GoogleAnalyticsObject']](oCONFIG.PUA_NAME+dpv+'.require','linkid','linkid.js');}
if(oCONFIG.FORCE_SSL){window[window['GoogleAnalyticsObject']](oCONFIG.PUA_NAME+dpv+'.set','forceSSL',true);}
if(_isExcludedReferrer()){window[window['GoogleAnalyticsObject']](oCONFIG.PUA_NAME+dpv+'.set','referrer','');}
if(oCONFIG.USE_MAIN_CUSTOM_DIMENSIONS&&dpv==0){window[window['GoogleAnalyticsObject']](oCONFIG.PUA_NAME+dpv+'.set',oCONFIG.MAIN_AGENCY_CUSTOM_DIMENSION_SLOT,oCONFIG.AGENCY);window[window['GoogleAnalyticsObject']](oCONFIG.PUA_NAME+dpv+'.set',oCONFIG.MAIN_SUBAGENCY_CUSTOM_DIMENSION_SLOT,oCONFIG.SUB_AGENCY);window[window['GoogleAnalyticsObject']](oCONFIG.PUA_NAME+dpv+'.set',oCONFIG.MAIN_CODEVERSION_CUSTOM_DIMENSION_SLOT,oCONFIG.VERSION);window[window['GoogleAnalyticsObject']](oCONFIG.PUA_NAME+dpv+'.set',oCONFIG.MAIN_SITE_TOPIC_CUSTOM_DIMENSION_SLOT,oCONFIG.SITE_TOPIC);window[window['GoogleAnalyticsObject']](oCONFIG.PUA_NAME+dpv+'.set',oCONFIG.MAIN_SITE_PLATFORM_CUSTOM_DIMENSION_SLOT,oCONFIG.SITE_PLATFORM);}
if(oCONFIG.USE_PARALLEL_CUSTOM_DIMENSIONS&&dpv>0){window[window['GoogleAnalyticsObject']](oCONFIG.PUA_NAME+dpv+'.set',oCONFIG.PARALLEL_AGENCY_CUSTOM_DIMENSION_SLOT,oCONFIG.AGENCY);window[window['GoogleAnalyticsObject']](oCONFIG.PUA_NAME+dpv+'.set',oCONFIG.PARALLEL_SUBAGENCY_CUSTOM_DIMENSION_SLOT,oCONFIG.SUB_AGENCY);window[window['GoogleAnalyticsObject']](oCONFIG.PUA_NAME+dpv+'.set',oCONFIG.PARALLEL_CODEVERSION_CUSTOM_DIMENSION_SLOT,oCONFIG.VERSION);window[window['GoogleAnalyticsObject']](oCONFIG.PUA_NAME+dpv+'.set',oCONFIG.PARALLEL_SITE_TOPIC_CUSTOM_DIMENSION_SLOT,oCONFIG.SITE_TOPIC);window[window['GoogleAnalyticsObject']](oCONFIG.PUA_NAME+dpv+'.set',oCONFIG.PARALLEL_SITE_PLATFORM_CUSTOM_DIMENSION_SLOT,oCONFIG.SITE_PLATFORM);}
if(document.title.search(/404|not found/i)!==-1)
{var vpv404='/vpv404/'+_adjPageUri;_adjPageUri=vpv404.replace(/\/\//g,'/')+'/'+document.referrer;}
if(sendPv)
{window[window['GoogleAnalyticsObject']](oCONFIG.PUA_NAME+dpv+'.send','pageview',_adjPageUri);}}}
function _initAutoTracker()
{var mainDomain=oCONFIG.COOKIE_DOMAIN;var extDoc=oCONFIG.EXTS.split("|");var arr=document.getElementsByTagName("a");for(i=0;i<arr.length;i++)
{var flag=0;var flagExt=0;var doname="";var mailPattern=/^mailto\:[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/i;var urlPattern=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i;var telPattern=/^(tel\:)(.*)$/i;if(mailPattern.test(arr[i].href)||urlPattern.test(arr[i].href)||telPattern.test(arr[i].href))
{try
{if(urlPattern.test(arr[i].href))
{doname=arr[i].hostname.toLowerCase().replace("www.","");}
else if(mailPattern.test(arr[i].href))
{doname=arr[i].href.split('@')[1].toLowerCase();}
else if(telPattern.test(arr[i].href))
{doname=arr[i].href;doname=doname.toLowerCase();}}
catch(err)
{continue;}}
else
{continue;}
var condition=false;if(oCONFIG.SUBDOMAIN_BASED)
{condition=(doname.indexOf(mainDomain)!=-1);}else
{condition=(doname==mainDomain);}
if(condition)
{if(arr[i].href.toLowerCase().indexOf("mailto:")!=-1&&arr[i].href.toLowerCase().indexOf("tel:")==-1)
{var gaUri=arr[i].href.match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/);_tagClicks(arr[i],'Mailto',gaUri[0],'',0);}
else if(arr[i].href.toLowerCase().indexOf("mailto:")==-1&&arr[i].href.toLowerCase().indexOf("tel:")!=-1)
{_tagClicks(arr[i],'Telephone Clicks',arr[i].href.split("tel:")[1],'',0);}
else if(arr[i].href.toLowerCase().indexOf("mailto:")==-1&&arr[i].href.toLowerCase().indexOf("tel:")==-1)
{for(var j=0;j<extDoc.length;j++)
{var arExt=arr[i].href.split(".");var ext=arExt[arExt.length-1].split(/[#?&?]/);if(ext[0].toLowerCase()==extDoc[j])
{_tagClicks(arr[i],'Download',ext[0].toLowerCase(),arr[i].href.split(/[#?&?]/)[0],0);break;}}}}
else
{for(var l=0;l<extDoc.length;l++)
{var arExt=arr[i].href.split(".");var ext=arExt[arExt.length-1].split(/[#?]/);if(ext[0].toLowerCase()==extDoc[l])
{var gaUri=arr[i].href.split(extDoc[l]);_tagClicks(arr[i],'Outbound Downloads',ext[0].toLowerCase(),arr[i].href.split(/[#?&?]/)[0],0);break;}
else if(ext[0].toLowerCase()!=extDoc[l])
{flagExt++;if(flagExt==extDoc.length)
{if(arr[i].href.toLowerCase().indexOf("mailto:")==-1&&arr[i].href.toLowerCase().indexOf("tel:")==-1)
{_tagClicks(arr[i],'Outbound',arr[i].hostname,arr[i].pathname,0);}
else if(extDoc.length&&arr[i].href.toLowerCase().indexOf("mailto:")!=-1&&arr[i].href.toLowerCase().indexOf("tel:")==-1)
{var gaUri=arr[i].href.match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/i);_tagClicks(arr[i],'Outbound MailTo',gaUri[0],'',0);}
else if(extDoc.length&&arr[i].href.toLowerCase().indexOf("mailto:")==-1&&arr[i].href.toLowerCase().indexOf("tel:")!=-1)
{_tagClicks(arr[i],'Telephone Clicks',arr[i].href.split("tel:")[1],'',0);}}}}}}}
if(oCONFIG.YOUTUBE)
{var videoArray_fed=new Array();var playerArray_fed=new Array();var _f33=false;var _f66=false;var _f90=false;var tag=document.createElement('script');tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName('script')[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);var youtube_parser_fed=function youtube_parser_fed(url){var regExp=/^(https?\:)?(\/\/)?(www\.)?(youtu\.be\/|youtube(\-nocookie)?\.([A-Za-z]{2,4}|[A-Za-z]{2,3}\.[A-Za-z]{2})\/)(watch|embed\/|vi?\/)?(\?vi?\=)?([^#\&\?\/]{11}).*$/;var match=url.match(regExp);if(match&&match[9].length==11){return match[9];}else{}}
var IsYouTube_fed=function IsYouTube_fed(url){var YouTubeLink_regEx=/^(https?\:)?(\/\/)?(www\.)?(youtu\.be\/|youtube(\-nocookie)?\.([A-Za-z]{2,4}|[A-Za-z]{2,3}\.[A-Za-z]{2})\/)(watch|embed\/|vi?\/)?(\?vi?\=)?([^#\&\?\/]{11}).*$/;if(YouTubeLink_regEx.test(url.toString()))
{return true;}
else
{return false;}}
var YTUrlHandler_fed=function YTUrlHandler_fed(url)
{url=url.replace(/origin\=(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})\&?/ig,'origin='+document.location.protocol+'//'+document.location.host);stAdd='';adFlag=false;if(url.indexOf('https')==-1){url=url.replace('http','https');}
if(url.indexOf('?')==-1){stAdd='?flag=1';}
if(url.indexOf('enablejsapi')==-1){stAdd+='&enablejsapi=1';adFlag=true;}
if(url.indexOf('html5')==-1){stAdd+='&html5=1';adFlag=true;}
if(url.indexOf('origin')==-1){stAdd+='&origin='+document.location.protocol+'//'+document.location.host;adFlag=true;}
if(adFlag==true)
{return url+stAdd;}
else
{return url;}}
var _initYouTubeTracker=function(){var _iframes=document.getElementsByTagName('iframe');var vArray=0;for(var ytifrm=0;ytifrm<_iframes.length;ytifrm++){_thisVideoObj=_iframes[ytifrm];var _thisSrc=_thisVideoObj.src;if(IsYouTube_fed(_thisSrc)){_thisVideoObj.src=YTUrlHandler_fed(_thisSrc);var youtubeid=youtube_parser_fed(_thisSrc);_thisVideoObj.setAttribute('id',youtubeid);videoArray_fed[vArray]=youtubeid;vArray++;}}}
var onYouTubePlayerAPIReady=function(){for(var i=0;i<videoArray_fed.length;i++){playerArray_fed[i]=new YT.Player(videoArray_fed[i],{events:{'onReady':onFedPlayerReady,'onStateChange':onFedPlayerStateChange}});}}
var onFedPlayerReady=function onFedPlayerReady(event){}
var onFedPlayerStateChange=function onFedPlayerStateChange(event){var videoURL=event.target.getIframe().getAttribute('src');var videoId=youtube_parser_fed(videoURL);_thisDuration=((parseInt(event.target.getCurrentTime())/ parseInt(event.target.getDuration()))*100).toFixed();if(typeof onPlayerStateChange!="undefined"){onPlayerStateChange(event);}
if(parseInt(event.data)==parseInt(YT.PlayerState.PLAYING)){if(_thisDuration==0){_f33=false;_f66=false;_f90=false;}
_sendEvent('YouTube Video','play',videoURL,0);}else if(event.data==YT.PlayerState.ENDED){_sendEvent('YouTube Video','finish',videoURL,0);}else if(event.data==YT.PlayerState.PAUSED){_sendEvent('YouTube Video','pause',videoURL,0);var duration=_thisDuration;if(duration<100){var precentage=_thisDuration;if(precentage>0&&precentage<=33&&_f33==false){_sendEvent('YouTube Video','33%',videoURL,0);_f33=true;}else if(precentage>33&&precentage<=66&&_f66==false){_sendEvent('YouTube Video','66%',videoURL,0);_f66=true;}else if(precentage>66&&precentage<=90&&_f90==false){_sendEvent('YouTube Video','90%',videoURL,0);_f90=true;}}}}}
function _initIdAssigner(){var _allDocLinks=document.getElementsByTagName('a');for(var sid=0;sid<_allDocLinks.length;sid++){var currentId=_allDocLinks[sid].getAttribute('id');if(currentId==null||currentId==''||currentId==undefined){_allDocLinks[sid].setAttribute('id','anch_'+sid);}}}
function _tagClicks(evObj,evCat,evAct,evLbl,evVal)
{if(evObj.addEventListener)
{evObj.addEventListener('mousedown',function(){_sendEvent(evCat,evAct,evLbl,evVal);});}
else if(evObj.attachEvent)
{evObj.attachEvent('onmousedown',function(){_sendEvent(evCat,evAct,evLbl,evVal);});}}
function _setUpTrackers()
{if(tObjectCheck!=window["GoogleAnalyticsObject"])
{createTracker(false);}
oCONFIG.ENHANCED_LINK?_initIdAssigner():'';oCONFIG.AUTOTRACKER?_initAutoTracker():'';oCONFIG.YOUTUBE?_initYouTubeTracker():'';}
function _setUpTrackersIfReady()
{if(document.readyState==='interactive'||document.readyState==='complete')
{_setUpTrackers();return true;}
else
{return false;}}
if(_setUpTrackersIfReady())
{}
else
{if(document.addEventListener)
{document.addEventListener('DOMContentLoaded',_setUpTrackers);}
else if(document.attachEvent)
{document.attachEvent('onreadystatechange',_setUpTrackersIfReady);}}
