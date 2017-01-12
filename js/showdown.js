/*! showdown 09-01-2017 */

(function(){function a(a){"use strict";var b={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Specify a prefix to generated header ids",type:"string"},ghCompatibleHeaderId:{defaultValue:!1,describe:"Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",type:"boolean"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},excludeTrailingPunctuationFromURLs:{defaultValue:!1,describe:"Excludes trailing punctuation from links generated with autoLinking",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,description:"Tries to smartly fix indentation in es6 strings",type:"boolean"},disableForced4SpacesIndentedSublists:{defaultValue:!1,description:"Disables the requirement of indenting nested sublists by 4 spaces",type:"boolean"},simpleLineBreaks:{defaultValue:!1,description:"Parses simple line breaks as <br> (GFM Style)",type:"boolean"},requireSpaceBeforeHeadingText:{defaultValue:!1,description:"Makes adding a space between `#` and the header text mandatory (GFM Style)",type:"boolean"},ghMentions:{defaultValue:!1,description:"Enables github @mentions",type:"boolean"}};if(a===!1)return JSON.parse(JSON.stringify(b));var c={};for(var d in b)b.hasOwnProperty(d)&&(c[d]=b[d].defaultValue);return c}function b(){"use strict";var b=a(!0),c={};for(var d in b)b.hasOwnProperty(d)&&(c[d]=!0);return c}function c(a,b){"use strict";var c=b?"Error in "+b+" extension->":"Error in unnamed extension",d={valid:!0,error:""};e.helper.isArray(a)||(a=[a]);for(var f=0;f<a.length;++f){var g=c+" sub-extension "+f+": ",h=a[f];if("object"!=typeof h)return d.valid=!1,d.error=g+"must be an object, but "+typeof h+" given",d;if(!e.helper.isString(h.type))return d.valid=!1,d.error=g+'property "type" must be a string, but '+typeof h.type+" given",d;var i=h.type=h.type.toLowerCase();if("language"===i&&(i=h.type="lang"),"html"===i&&(i=h.type="output"),"lang"!==i&&"output"!==i&&"listener"!==i)return d.valid=!1,d.error=g+"type "+i+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',d;if("listener"===i){if(e.helper.isUndefined(h.listeners))return d.valid=!1,d.error=g+'. Extensions of type "listener" must have a property called "listeners"',d}else if(e.helper.isUndefined(h.filter)&&e.helper.isUndefined(h.regex))return d.valid=!1,d.error=g+i+' extensions must define either a "regex" property or a "filter" method',d;if(h.listeners){if("object"!=typeof h.listeners)return d.valid=!1,d.error=g+'"listeners" property must be an object but '+typeof h.listeners+" given",d;for(var j in h.listeners)if(h.listeners.hasOwnProperty(j)&&"function"!=typeof h.listeners[j])return d.valid=!1,d.error=g+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+j+" must be a function but "+typeof h.listeners[j]+" given",d}if(h.filter){if("function"!=typeof h.filter)return d.valid=!1,d.error=g+'"filter" must be a function, but '+typeof h.filter+" given",d}else if(h.regex){if(e.helper.isString(h.regex)&&(h.regex=new RegExp(h.regex,"g")),!h.regex instanceof RegExp)return d.valid=!1,d.error=g+'"regex" property must either be a string or a RegExp object, but '+typeof h.regex+" given",d;if(e.helper.isUndefined(h.replace))return d.valid=!1,d.error=g+'"regex" extensions must implement a replace string or function',d}}return d}function d(a,b){"use strict";var c=b.charCodeAt(0);return"~E"+c+"E"}var e={},f={},g={},h=a(!0),i="vanilla",j={github:{omitExtraWLInCodeBlocks:!0,prefixHeaderId:"user-content-",simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,disableForced4SpacesIndentedSublists:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghCompatibleHeaderId:!0,ghMentions:!0},vanilla:a(!0),allOn:b()};e.helper={},e.extensions={},e.setOption=function(a,b){"use strict";return h[a]=b,this},e.getOption=function(a){"use strict";return h[a]},e.getOptions=function(){"use strict";return h},e.resetOptions=function(){"use strict";h=a(!0)},e.setFlavor=function(a){"use strict";if(!j.hasOwnProperty(a))throw Error(a+" flavor was not found");var b=j[a];i=a;for(var c in b)b.hasOwnProperty(c)&&(h[c]=b[c])},e.getFlavor=function(){"use strict";return i},e.getFlavorOptions=function(a){"use strict";return j.hasOwnProperty(a)?j[a]:void 0},e.getDefaultOptions=function(b){"use strict";return a(b)},e.subParser=function(a,b){"use strict";if(e.helper.isString(a)){if("undefined"==typeof b){if(f.hasOwnProperty(a))return f[a];throw Error("SubParser named "+a+" not registered!")}f[a]=b}},e.extension=function(a,b){"use strict";if(!e.helper.isString(a))throw Error("Extension 'name' must be a string");if(a=e.helper.stdExtName(a),e.helper.isUndefined(b)){if(!g.hasOwnProperty(a))throw Error("Extension named "+a+" is not registered!");return g[a]}"function"==typeof b&&(b=b()),e.helper.isArray(b)||(b=[b]);var d=c(b,a);if(!d.valid)throw Error(d.error);g[a]=b},e.getAllExtensions=function(){"use strict";return g},e.removeExtension=function(a){"use strict";delete g[a]},e.resetExtensions=function(){"use strict";g={}},e.validateExtension=function(a){"use strict";var b=c(a,null);return b.valid?!0:(console.warn(b.error),!1)},e.hasOwnProperty("helper")||(e.helper={}),e.helper.isString=function(a){"use strict";return"string"==typeof a||a instanceof String},e.helper.isFunction=function(a){"use strict";var b={};return a&&"[object Function]"===b.toString.call(a)},e.helper.forEach=function(a,b){"use strict";if("function"==typeof a.forEach)a.forEach(b);else for(var c=0;c<a.length;c++)b(a[c],c,a)},e.helper.isArray=function(a){"use strict";return a.constructor===Array},e.helper.isUndefined=function(a){"use strict";return"undefined"==typeof a},e.helper.stdExtName=function(a){"use strict";return a.replace(/[_-]||\s/g,"").toLowerCase()},e.helper.escapeCharactersCallback=d,e.helper.escapeCharacters=function(a,b,c){"use strict";var e="(["+b.replace(/([\[\]\\])/g,"\\$1")+"])";c&&(e="\\\\"+e);var f=new RegExp(e,"g");return a=a.replace(f,d)};var k=function(a,b,c,d){"use strict";var e,f,g,h,i,j=d||"",k=j.indexOf("g")>-1,l=new RegExp(b+"|"+c,"g"+j.replace(/g/g,"")),m=new RegExp(b,j.replace(/g/g,"")),n=[];do for(e=0;g=l.exec(a);)if(m.test(g[0]))e++||(f=l.lastIndex,h=f-g[0].length);else if(e&&!--e){i=g.index+g[0].length;var o={left:{start:h,end:f},match:{start:f,end:g.index},right:{start:g.index,end:i},wholeMatch:{start:h,end:i}};if(n.push(o),!k)return n}while(e&&(l.lastIndex=f));return n};e.helper.matchRecursiveRegExp=function(a,b,c,d){"use strict";for(var e=k(a,b,c,d),f=[],g=0;g<e.length;++g)f.push([a.slice(e[g].wholeMatch.start,e[g].wholeMatch.end),a.slice(e[g].match.start,e[g].match.end),a.slice(e[g].left.start,e[g].left.end),a.slice(e[g].right.start,e[g].right.end)]);return f},e.helper.replaceRecursiveRegExp=function(a,b,c,d,f){"use strict";if(!e.helper.isFunction(b)){var g=b;b=function(){return g}}var h=k(a,c,d,f),i=a,j=h.length;if(j>0){var l=[];0!==h[0].wholeMatch.start&&l.push(a.slice(0,h[0].wholeMatch.start));for(var m=0;j>m;++m)l.push(b(a.slice(h[m].wholeMatch.start,h[m].wholeMatch.end),a.slice(h[m].match.start,h[m].match.end),a.slice(h[m].left.start,h[m].left.end),a.slice(h[m].right.start,h[m].right.end))),j-1>m&&l.push(a.slice(h[m].wholeMatch.end,h[m+1].wholeMatch.start));h[j-1].wholeMatch.end<a.length&&l.push(a.slice(h[j-1].wholeMatch.end)),i=l.join("")}return i},"undefined"==typeof console&&(console={warn:function(a){"use strict";alert(a)},log:function(a){"use strict";alert(a)},error:function(a){"use strict";throw a}}),e.Converter=function(a){"use strict";function b(){a=a||{};for(var b in h)h.hasOwnProperty(b)&&(m[b]=h[b]);if("object"!=typeof a)throw Error("Converter expects the passed parameter to be an object, but "+typeof a+" was passed instead.");for(var c in a)a.hasOwnProperty(c)&&(m[c]=a[c]);m.extensions&&e.helper.forEach(m.extensions,d)}function d(a,b){if(b=b||null,e.helper.isString(a)){if(a=e.helper.stdExtName(a),b=a,e.extensions[a])return console.warn("DEPRECATION WARNING: "+a+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),void f(e.extensions[a],a);if(e.helper.isUndefined(g[a]))throw Error('Extension "'+a+'" could not be loaded. It was either not found or is not a valid extension.');a=g[a]}"function"==typeof a&&(a=a()),e.helper.isArray(a)||(a=[a]);var d=c(a,b);if(!d.valid)throw Error(d.error);for(var h=0;h<a.length;++h){switch(a[h].type){case"lang":n.push(a[h]);break;case"output":o.push(a[h])}if(a[h].hasOwnProperty("listeners"))for(var i in a[h].listeners)a[h].listeners.hasOwnProperty(i)&&k(i,a[h].listeners[i])}}function f(a,b){"function"==typeof a&&(a=a(new e.Converter)),e.helper.isArray(a)||(a=[a]);var d=c(a,b);if(!d.valid)throw Error(d.error);for(var f=0;f<a.length;++f)switch(a[f].type){case"lang":n.push(a[f]);break;case"output":o.push(a[f]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}}function k(a,b){if(!e.helper.isString(a))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+typeof a+" given");if("function"!=typeof b)throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+typeof b+" given");p.hasOwnProperty(a)||(p[a]=[]),p[a].push(b)}function l(a){var b=a.match(/^\s*/)[0].length,c=new RegExp("^\\s{0,"+b+"}","gm");return a.replace(c,"")}var m={},n=[],o=[],p={},q=i;b(),this._dispatch=function(a,b,c,d){if(p.hasOwnProperty(a))for(var e=0;e<p[a].length;++e){var f=p[a][e](a,b,this,c,d);f&&"undefined"!=typeof f&&(b=f)}return b},this.listen=function(a,b){return k(a,b),this},this.makeHtml=function(a){if(!a)return a;var b={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:n,outputModifiers:o,converter:this,ghCodeBlocks:[]};return a=a.replace(/~/g,"~T"),a=a.replace(/\$/g,"~D"),a=a.replace(/\r\n/g,"\n"),a=a.replace(/\r/g,"\n"),a=a.replace(/\u00A0/g," "),m.smartIndentationFix&&(a=l(a)),a="\n\n"+a+"\n\n",a=e.subParser("detab")(a,m,b),a=e.subParser("stripBlankLines")(a,m,b),e.helper.forEach(n,function(c){a=e.subParser("runExtension")(c,a,m,b)}),a=e.subParser("hashPreCodeTags")(a,m,b),a=e.subParser("githubCodeBlocks")(a,m,b),a=e.subParser("hashHTMLBlocks")(a,m,b),a=e.subParser("hashHTMLSpans")(a,m,b),a=e.subParser("stripLinkDefinitions")(a,m,b),a=e.subParser("blockGamut")(a,m,b),a=e.subParser("unhashHTMLSpans")(a,m,b),a=e.subParser("unescapeSpecialChars")(a,m,b),a=a.replace(/~D/g,"$$"),a=a.replace(/~T/g,"~"),e.helper.forEach(o,function(c){a=e.subParser("runExtension")(c,a,m,b)}),a},this.setOption=function(a,b){m[a]=b},this.getOption=function(a){return m[a]},this.getOptions=function(){return m},this.addExtension=function(a,b){b=b||null,d(a,b)},this.useExtension=function(a){d(a)},this.setFlavor=function(a){if(!j.hasOwnProperty(a))throw Error(a+" flavor was not found");var b=j[a];q=a;for(var c in b)b.hasOwnProperty(c)&&(m[c]=b[c])},this.getFlavor=function(){return q},this.removeExtension=function(a){e.helper.isArray(a)||(a=[a]);for(var b=0;b<a.length;++b){for(var c=a[b],d=0;d<n.length;++d)n[d]===c&&n[d].splice(d,1);for(var f=0;f<o.length;++d)o[f]===c&&o[f].splice(d,1)}},this.getAllExtensions=function(){return{language:n,output:o}}},e.subParser("anchors",function(a,b,c){"use strict";a=c.converter._dispatch("anchors.before",a,b,c);var d=function(a,b,d,f,g,h,i,j){e.helper.isUndefined(j)&&(j=""),a=b;var k=d,l=f.toLowerCase(),m=g,n=j;if(!m)if(l||(l=k.toLowerCase().replace(/ ?\n/g," ")),m="#"+l,e.helper.isUndefined(c.gUrls[l])){if(!(a.search(/\(\s*\)$/m)>-1))return a;m=""}else m=c.gUrls[l],e.helper.isUndefined(c.gTitles[l])||(n=c.gTitles[l]);m=e.helper.escapeCharacters(m,"*_",!1);var o='<a href="'+m+'"';return""!==n&&null!==n&&(n=n.replace(/"/g,"&quot;"),n=e.helper.escapeCharacters(n,"*_",!1),o+=' title="'+n+'"'),o+=">"+k+"</a>"};return a=a.replace(/(\[((?:\[[^\]]*]|[^\[\]])*)][ ]?(?:\n[ ]*)?\[(.*?)])()()()()/g,d),a=a.replace(/(\[((?:\[[^\]]*]|[^\[\]])*)]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,d),a=a.replace(/(\[([^\[\]]+)])()()()()()/g,d),b.ghMentions&&(a=a.replace(/(^|\s)(\\)?(@([a-z\d\-]+))(?=[.!?;,[\]()]|\s|$)/gim,function(a,b,c,d,e){return"\\"===c?b+d:b+'<a href="https://www.github.com/'+e+'">'+d+"</a>"})),a=c.converter._dispatch("anchors.after",a,b,c)}),e.subParser("autoLinks",function(a,b,c){"use strict";function d(a,c,d,e,f){var g=c,h="";return/^www\./i.test(c)&&(c=c.replace(/^www\./i,"http://www.")),b.excludeTrailingPunctuationFromURLs&&f&&(h=f),'<a href="'+c+'">'+g+"</a>"+h}function f(a,b){var c=e.subParser("unescapeSpecialChars")(b);return e.subParser("encodeEmailAddress")(c)}a=c.converter._dispatch("autoLinks.before",a,b,c);var g=/\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+)()(?=\s|$)(?!["<>])/gi,h=/\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?()]?)(?=\s|$)(?!["<>])/gi,i=/<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)>/gi,j=/(?:^|\s)([A-Za-z0-9!#$%&'*+-\/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?:$|\s)/gi,k=/<(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi;return a=a.replace(i,d),a=a.replace(k,f),b.simplifiedAutoLink&&(a=b.excludeTrailingPunctuationFromURLs?a.replace(h,d):a.replace(g,d),a=a.replace(j,f)),a=c.converter._dispatch("autoLinks.after",a,b,c)}),e.subParser("blockGamut",function(a,b,c){"use strict";a=c.converter._dispatch("blockGamut.before",a,b,c),a=e.subParser("blockQuotes")(a,b,c),a=e.subParser("headers")(a,b,c);var d=e.subParser("hashBlock")("<hr />",b,c);return a=a.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm,d),a=a.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm,d),a=a.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm,d),a=e.subParser("lists")(a,b,c),a=e.subParser("codeBlocks")(a,b,c),a=e.subParser("tables")(a,b,c),a=e.subParser("hashHTMLBlocks")(a,b,c),a=e.subParser("paragraphs")(a,b,c),a=c.converter._dispatch("blockGamut.after",a,b,c)}),e.subParser("blockQuotes",function(a,b,c){"use strict";return a=c.converter._dispatch("blockQuotes.before",a,b,c),a=a.replace(/((^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(a,d){var f=d;return f=f.replace(/^[ \t]*>[ \t]?/gm,"~0"),f=f.replace(/~0/g,""),f=f.replace(/^[ \t]+$/gm,""),f=e.subParser("githubCodeBlocks")(f,b,c),f=e.subParser("blockGamut")(f,b,c),f=f.replace(/(^|\n)/g,"$1  "),f=f.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(a,b){var c=b;return c=c.replace(/^  /gm,"~0"),c=c.replace(/~0/g,"")}),e.subParser("hashBlock")("<blockquote>\n"+f+"\n</blockquote>",b,c)}),a=c.converter._dispatch("blockQuotes.after",a,b,c)}),e.subParser("codeBlocks",function(a,b,c){"use strict";a=c.converter._dispatch("codeBlocks.before",a,b,c),a+="~0";var d=/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g;return a=a.replace(d,function(a,d,f){var g=d,h=f,i="\n";return g=e.subParser("outdent")(g),g=e.subParser("encodeCode")(g),g=e.subParser("detab")(g),g=g.replace(/^\n+/g,""),g=g.replace(/\n+$/g,""),b.omitExtraWLInCodeBlocks&&(i=""),g="<pre><code>"+g+i+"</code></pre>",e.subParser("hashBlock")(g,b,c)+h}),a=a.replace(/~0/,""),a=c.converter._dispatch("codeBlocks.after",a,b,c)}),e.subParser("codeSpans",function(a,b,c){"use strict";return a=c.converter._dispatch("codeSpans.before",a,b,c),"undefined"==typeof a&&(a=""),a=a.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(a,b,c,d){var f=d;return f=f.replace(/^([ \t]*)/g,""),f=f.replace(/[ \t]*$/g,""),f=e.subParser("encodeCode")(f),b+"<code>"+f+"</code>"}),a=c.converter._dispatch("codeSpans.after",a,b,c)}),e.subParser("detab",function(a){"use strict";return a=a.replace(/\t(?=\t)/g,"    "),a=a.replace(/\t/g,"~A~B"),a=a.replace(/~B(.+?)~A/g,function(a,b){for(var c=b,d=4-c.length%4,e=0;d>e;e++)c+=" ";return c}),a=a.replace(/~A/g,"    "),a=a.replace(/~B/g,"")}),e.subParser("encodeAmpsAndAngles",function(a){"use strict";return a=a.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),a=a.replace(/<(?![a-z\/?\$!])/gi,"&lt;")}),e.subParser("encodeBackslashEscapes",function(a){"use strict";return a=a.replace(/\\(\\)/g,e.helper.escapeCharactersCallback),a=a.replace(/\\([`*_{}\[\]()>#+-.!])/g,e.helper.escapeCharactersCallback)}),e.subParser("encodeCode",function(a){"use strict";return a=a.replace(/&/g,"&amp;"),a=a.replace(/</g,"&lt;"),a=a.replace(/>/g,"&gt;"),a=e.helper.escapeCharacters(a,"*_{}[]\\",!1)}),e.subParser("encodeEmailAddress",function(a){"use strict";var b=[function(a){return"&#"+a.charCodeAt(0)+";"},function(a){return"&#x"+a.charCodeAt(0).toString(16)+";"},function(a){return a}];return a="mailto:"+a,a=a.replace(/./g,function(a){if("@"===a)a=b[Math.floor(2*Math.random())](a);else if(":"!==a){var c=Math.random();a=c>.9?b[2](a):c>.45?b[1](a):b[0](a)}return a}),a='<a href="'+a+'">'+a+"</a>",a=a.replace(/">.+:/g,'">')}),e.subParser("escapeSpecialCharsWithinTagAttributes",function(a){"use strict";var b=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;return a=a.replace(b,function(a){var b=a.replace(/(.)<\/?code>(?=.)/g,"$1`");return b=e.helper.escapeCharacters(b,"\\`*_",!1)})}),e.subParser("githubCodeBlocks",function(a,b,c){"use strict";return b.ghCodeBlocks?(a=c.converter._dispatch("githubCodeBlocks.before",a,b,c),a+="~0",a=a.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g,function(a,d,f){var g=b.omitExtraWLInCodeBlocks?"":"\n";return f=e.subParser("encodeCode")(f),f=e.subParser("detab")(f),f=f.replace(/^\n+/g,""),f=f.replace(/\n+$/g,""),f="<pre><code"+(d?' class="'+d+" language-"+d+'"':"")+">"+f+g+"</code></pre>",f=e.subParser("hashBlock")(f,b,c),"\n\n~G"+(c.ghCodeBlocks.push({text:a,codeblock:f})-1)+"G\n\n"}),a=a.replace(/~0/,""),c.converter._dispatch("githubCodeBlocks.after",a,b,c)):a}),e.subParser("hashBlock",function(a,b,c){"use strict";return a=a.replace(/(^\n+|\n+$)/g,""),"\n\n~K"+(c.gHtmlBlocks.push(a)-1)+"K\n\n"}),e.subParser("hashElement",function(a,b,c){"use strict";return function(a,b){var d=b;return d=d.replace(/\n\n/g,"\n"),d=d.replace(/^\n/,""),d=d.replace(/\n+$/g,""),d="\n\n~K"+(c.gHtmlBlocks.push(d)-1)+"K\n\n"}}),e.subParser("hashHTMLBlocks",function(a,b,c){"use strict";for(var d=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],f=function(a,b,d,e){var f=a;return-1!==d.search(/\bmarkdown\b/)&&(f=d+c.converter.makeHtml(b)+e),"\n\n~K"+(c.gHtmlBlocks.push(f)-1)+"K\n\n"},g=0;g<d.length;++g)a=e.helper.replaceRecursiveRegExp(a,f,"^ {0,3}<"+d[g]+"\\b[^>]*>","</"+d[g]+">","gim");return a=a.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,e.subParser("hashElement")(a,b,c)),a=e.helper.replaceRecursiveRegExp(a,function(a){return"\n\n~K"+(c.gHtmlBlocks.push(a)-1)+"K\n\n"},"^ {0,3}<!--","-->","gm"),a=a.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,e.subParser("hashElement")(a,b,c))}),e.subParser("hashHTMLSpans",function(a,b,c){"use strict";for(var d=e.helper.matchRecursiveRegExp(a,"<code\\b[^>]*>","</code>","gi"),f=0;f<d.length;++f)a=a.replace(d[f][0],"~C"+(c.gHtmlSpans.push(d[f][0])-1)+"C");return a}),e.subParser("unhashHTMLSpans",function(a,b,c){"use strict";for(var d=0;d<c.gHtmlSpans.length;++d)a=a.replace("~C"+d+"C",c.gHtmlSpans[d]);return a}),e.subParser("hashPreCodeTags",function(a,b,c){"use strict";var d=function(a,b,d,f){var g=d+e.subParser("encodeCode")(b)+f;return"\n\n~G"+(c.ghCodeBlocks.push({text:a,codeblock:g})-1)+"G\n\n"};return a=e.helper.replaceRecursiveRegExp(a,d,"^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^ {0,3}</code>\\s*</pre>","gim")}),e.subParser("headers",function(a,b,c){"use strict";function d(a){var b,d;return d=h?a.replace(/ /g,"-").replace(/&amp;/g,"").replace(/~T/g,"").replace(/~D/g,"").replace(/[&+$,\/:;=?@"#{}|^~\[\]`\\*)(%.!'<>]/g,"").toLowerCase():a.replace(/[^\w]/g,"").toLowerCase(),c.hashLinkCounts[d]?b=d+"-"+c.hashLinkCounts[d]++:(b=d,c.hashLinkCounts[d]=1),f===!0&&(f="section"),e.helper.isString(f)?f+b:b}a=c.converter._dispatch("headers.before",a,b,c);var f=b.prefixHeaderId,g=isNaN(parseInt(b.headerLevelStart))?1:parseInt(b.headerLevelStart),h=b.ghCompatibleHeaderId,i=b.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,j=b.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;a=a.replace(i,function(a,f){var h=e.subParser("spanGamut")(f,b,c),i=b.noHeaderId?"":' id="'+d(f)+'"',j=g,k="<h"+j+i+">"+h+"</h"+j+">";return e.subParser("hashBlock")(k,b,c)}),a=a.replace(j,function(a,f){var h=e.subParser("spanGamut")(f,b,c),i=b.noHeaderId?"":' id="'+d(f)+'"',j=g+1,k="<h"+j+i+">"+h+"</h"+j+">";return e.subParser("hashBlock")(k,b,c)});var k=b.requireSpaceBeforeHeadingText?/^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm:/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;return a=a.replace(k,function(a,f,h){var i=e.subParser("spanGamut")(h,b,c),j=b.noHeaderId?"":' id="'+d(h)+'"',k=g-1+f.length,l="<h"+k+j+">"+i+"</h"+k+">";return e.subParser("hashBlock")(l,b,c)}),a=c.converter._dispatch("headers.after",a,b,c)}),e.subParser("images",function(a,b,c){"use strict";function d(a,b,d,f,g,h,i,j){var k=c.gUrls,l=c.gTitles,m=c.gDimensions;if(d=d.toLowerCase(),j||(j=""),""===f||null===f){if((""===d||null===d)&&(d=b.toLowerCase().replace(/ ?\n/g," ")),f="#"+d,e.helper.isUndefined(k[d]))return a;f=k[d],e.helper.isUndefined(l[d])||(j=l[d]),e.helper.isUndefined(m[d])||(g=m[d].width,h=m[d].height)}b=b.replace(/"/g,"&quot;"),b=e.helper.escapeCharacters(b,"*_",!1),f=e.helper.escapeCharacters(f,"*_",!1);var n='<img src="'+f+'" alt="'+b+'"';return j&&(j=j.replace(/"/g,"&quot;"),j=e.helper.escapeCharacters(j,"*_",!1),n+=' title="'+j+'"'),g&&h&&(g="*"===g?"auto":g,h="*"===h?"auto":h,n+=' width="'+g+'"',n+=' height="'+h+'"'),n+=" />"}a=c.converter._dispatch("images.before",a,b,c);var f=/!\[(.*?)]\s?\([ \t]*()<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(['"])(.*?)\6[ \t]*)?\)/g,g=/!\[([^\]]*?)] ?(?:\n *)?\[(.*?)]()()()()()/g;return a=a.replace(g,d),a=a.replace(f,d),a=c.converter._dispatch("images.after",a,b,c)}),e.subParser("italicsAndBold",function(a,b,c){"use strict";return a=c.converter._dispatch("italicsAndBold.before",a,b,c),b.literalMidWordUnderscores?(a=a.replace(/(^|\s|>|\b)__(?=\S)([\s\S]+?)__(?=\b|<|\s|$)/gm,"$1<strong>$2</strong>"),a=a.replace(/(^|\s|>|\b)_(?=\S)([\s\S]+?)_(?=\b|<|\s|$)/gm,"$1<em>$2</em>"),a=a.replace(/(\*\*)(?=\S)([^\r]*?\S[*]*)\1/g,"<strong>$2</strong>"),a=a.replace(/(\*)(?=\S)([^\r]*?\S)\1/g,"<em>$2</em>")):(a=a.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g,"<strong>$2</strong>"),a=a.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g,"<em>$2</em>")),a=c.converter._dispatch("italicsAndBold.after",a,b,c)}),e.subParser("lists",function(a,b,c){"use strict";function d(a,d){c.gListLevel++,a=a.replace(/\n{2,}$/,"\n"),a+="~0";var f=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(~0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,g=/\n[ \t]*\n(?!~0)/.test(a);return b.disableForced4SpacesIndentedSublists&&(f=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm),a=a.replace(f,function(a,d,f,h,i,j,k){k=k&&""!==k.trim();var l=e.subParser("outdent")(i,b,c),m="";return j&&b.tasklists&&(m=' class="task-list-item" style="list-style-type: none;"',l=l.replace(/^[ \t]*\[(x|X| )?]/m,function(){var a='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return k&&(a+=" checked"),a+=">"})),l=l.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g,function(a){return"~A"+a}),d||l.search(/\n{2,}/)>-1?(l=e.subParser("githubCodeBlocks")(l,b,c),l=e.subParser("blockGamut")(l,b,c)):(l=e.subParser("lists")(l,b,c),l=l.replace(/\n$/,""),l=e.subParser("hashHTMLBlocks")(l,b,c),l=l.replace(/\n\n+/g,"\n\n"),l=l.replace(/\n\n/g,"~B"),l=g?e.subParser("paragraphs")(l,b,c):e.subParser("spanGamut")(l,b,c),l=l.replace(/~B/g,"\n\n")),l=l.replace("~A",""),l="<li"+m+">"+l+"</li>\n"}),a=a.replace(/~0/g,""),c.gListLevel--,d&&(a=a.replace(/\s+$/,"")),a}function f(a,c,e){var f=b.disableForced4SpacesIndentedSublists?/^ ?\d+\.[ \t]/gm:/^ {0,3}\d+\.[ \t]/gm,g=b.disableForced4SpacesIndentedSublists?/^ ?[*+-][ \t]/gm:/^ {0,3}[*+-][ \t]/gm,h="ul"===c?f:g,i="";return-1!==a.search(h)?!function j(a){var b=a.search(h);-1!==b?(i+="\n<"+c+">\n"+d(a.slice(0,b),!!e)+"</"+c+">\n",c="ul"===c?"ol":"ul",h="ul"===c?f:g,j(a.slice(b))):i+="\n<"+c+">\n"+d(a,!!e)+"</"+c+">\n"}(a):i="\n<"+c+">\n"+d(a,!!e)+"</"+c+">\n",i}return a=c.converter._dispatch("lists.before",a,b,c),a+="~0",a=c.gListLevel?a.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(a,b,c){var d=c.search(/[*+-]/g)>-1?"ul":"ol";return f(b,d,!0)}):a.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(a,b,c,d){var e=d.search(/[*+-]/g)>-1?"ul":"ol";return f(c,e,!1)}),a=a.replace(/~0/,""),a=c.converter._dispatch("lists.after",a,b,c)}),e.subParser("outdent",function(a){"use strict";return a=a.replace(/^(\t|[ ]{1,4})/gm,"~0"),a=a.replace(/~0/g,"")}),e.subParser("paragraphs",function(a,b,c){"use strict";a=c.converter._dispatch("paragraphs.before",a,b,c),a=a.replace(/^\n+/g,""),a=a.replace(/\n+$/g,"");for(var d=a.split(/\n{2,}/g),f=[],g=d.length,h=0;g>h;h++){var i=d[h];i.search(/~(K|G)(\d+)\1/g)>=0?f.push(i):(i=e.subParser("spanGamut")(i,b,c),i=i.replace(/^([ \t]*)/g,"<p>"),i+="</p>",f.push(i))}for(g=f.length,h=0;g>h;h++){for(var j="",k=f[h],l=!1;k.search(/~(K|G)(\d+)\1/)>=0;){var m=RegExp.$1,n=RegExp.$2;j="K"===m?c.gHtmlBlocks[n]:l?e.subParser("encodeCode")(c.ghCodeBlocks[n].text):c.ghCodeBlocks[n].codeblock,j=j.replace(/\$/g,"$$$$"),k=k.replace(/(\n\n)?~(K|G)\d+\2(\n\n)?/,j),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(k)&&(l=!0)}f[h]=k}return a=f.join("\n"),a=a.replace(/^\n+/g,""),a=a.replace(/\n+$/g,""),c.converter._dispatch("paragraphs.after",a,b,c)}),e.subParser("runExtension",function(a,b,c,d){"use strict";if(a.filter)b=a.filter(b,d.converter,c);else if(a.regex){var e=a.regex;!e instanceof RegExp&&(e=new RegExp(e,"g")),b=b.replace(e,a.replace)}return b}),e.subParser("spanGamut",function(a,b,c){"use strict";return a=c.converter._dispatch("spanGamut.before",a,b,c),a=e.subParser("codeSpans")(a,b,c),a=e.subParser("escapeSpecialCharsWithinTagAttributes")(a,b,c),a=e.subParser("encodeBackslashEscapes")(a,b,c),a=e.subParser("images")(a,b,c),a=e.subParser("anchors")(a,b,c),a=e.subParser("autoLinks")(a,b,c),a=e.subParser("encodeAmpsAndAngles")(a,b,c),a=e.subParser("italicsAndBold")(a,b,c),a=e.subParser("strikethrough")(a,b,c),a=b.simpleLineBreaks?a.replace(/\n/g,"<br />\n"):a.replace(/  +\n/g,"<br />\n"),a=c.converter._dispatch("spanGamut.after",a,b,c)}),e.subParser("strikethrough",function(a,b,c){"use strict";return b.strikethrough&&(a=c.converter._dispatch("strikethrough.before",a,b,c),a=a.replace(/(?:~T){2}([\s\S]+?)(?:~T){2}/g,"<del>$1</del>"),a=c.converter._dispatch("strikethrough.after",a,b,c)),a}),e.subParser("stripBlankLines",function(a){"use strict";return a.replace(/^[ \t]+$/gm,"")}),e.subParser("stripLinkDefinitions",function(a,b,c){"use strict";var d=/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=~0))/gm;return a+="~0",a=a.replace(d,function(a,d,f,g,h,i,j){return d=d.toLowerCase(),c.gUrls[d]=e.subParser("encodeAmpsAndAngles")(f),i?i+j:(j&&(c.gTitles[d]=j.replace(/"|'/g,"&quot;")),b.parseImgDimensions&&g&&h&&(c.gDimensions[d]={width:g,height:h}),"")}),a=a.replace(/~0/,"")}),e.subParser("tables",function(a,b,c){"use strict";function d(a){return/^:[ \t]*--*$/.test(a)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(a)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(a)?' style="text-align:center;"':""}function f(a,d){var f="";return a=a.trim(),b.tableHeaderId&&(f=' id="'+a.replace(/ /g,"_").toLowerCase()+'"'),a=e.subParser("spanGamut")(a,b,c),"<th"+f+d+">"+a+"</th>\n"}function g(a,d){var f=e.subParser("spanGamut")(a,b,c);return"<td"+d+">"+f+"</td>\n"}function h(a,b){for(var c="<table>\n<thead>\n<tr>\n",d=a.length,e=0;d>e;++e)c+=a[e];for(c+="</tr>\n</thead>\n<tbody>\n",e=0;e<b.length;++e){c+="<tr>\n";for(var f=0;d>f;++f)c+=b[e][f];c+="</tr>\n"}return c+="</tbody>\n</table>\n"}if(!b.tables)return a;var i=/^ {0,3}\|?.+\|.+\n[ \t]{0,3}\|?[ \t]*:?[ \t]*(?:-|=){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:-|=){2,}[\s\S]+?(?:\n\n|~0)/gm;return a=c.converter._dispatch("tables.before",a,b,c),a=a.replace(i,function(a){var b,c=a.split("\n");for(b=0;b<c.length;++b)/^ {0,3}\|/.test(c[b])&&(c[b]=c[b].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(c[b])&&(c[b]=c[b].replace(/\|[ \t]*$/,""));var i=c[0].split("|").map(function(a){return a.trim()}),j=c[1].split("|").map(function(a){return a.trim()}),k=[],l=[],m=[],n=[];for(c.shift(),c.shift(),b=0;b<c.length;++b)""!==c[b].trim()&&k.push(c[b].split("|").map(function(a){return a.trim()}));if(i.length<j.length)return a;for(b=0;b<j.length;++b)m.push(d(j[b]));for(b=0;b<i.length;++b)e.helper.isUndefined(m[b])&&(m[b]=""),l.push(f(i[b],m[b]));for(b=0;b<k.length;++b){for(var o=[],p=0;p<l.length;++p)e.helper.isUndefined(k[b][p]),o.push(g(k[b][p],m[p]));n.push(o)}return h(l,n)}),a=c.converter._dispatch("tables.after",a,b,c)}),e.subParser("unescapeSpecialChars",function(a){"use strict";return a=a.replace(/~E(\d+)E/g,function(a,b){var c=parseInt(b);return String.fromCharCode(c)})});var l=this;"undefined"!=typeof module&&module.exports?module.exports=e:"function"==typeof define&&define.amd?define(function(){"use strict";return e}):l.showdown=e}).call(this);
//# sourceMappingURL=showdown.min.js.map
