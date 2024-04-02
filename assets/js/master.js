(function(){
 let params = (function(){var p={};location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v});return p;})();(/(\w+)\.html$/.exec(location.pathname)) ? /(\w+)\.html$/.exec(location.pathname)[1] : '';
 let spiderx = /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(navigator.userAgent);
 let parameterName = Object.keys(params)[0]; 
 if(parameterName && !spiderx) {
  location.href = 'https://store.tydack.com/cc/i/'+params[parameterName]+''; 
 } else if(parameterName && spiderx) {
  location.replace('https://store.tydack.com/cc/i/'+params[parameterName]+'.html');
 }
})();