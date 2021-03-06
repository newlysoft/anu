
const utils = require('../utils/index');
import getNativeComponents from '../utils/getNativeComponentsNode';
let rword = /[^, ]+/g;
let builtInStr =
    'view,text,button,block,scroll-view,swiper,swiper-item,movable-area,movable-view,cover-view,icon,rich-text,' +
    'progress,checkbox,form,input,input,label,picker,picker-view,radio,slider,switch,textarea,template,' +
    'navigator,audio,image,camera,video,live-player,live-pusher,map,canvas,open-data,web-view,radio-group,' +
    'slot,wxs,checkbox-group,loading';
builtInStr = builtInStr + ',' + getNativeComponents().join(',');
let builtIn: any = {};
builtInStr.replace(rword, function(el) {
    builtIn[el] = el;
    return el;
});


let map: any = Object.assign({}, builtIn);
'p,div,h1,h2,h3,h4,h5,h6,quoteblock'.replace(rword, function(el) {
    map[el] = 'view';
    return el;
});
'span,b,s,code,quote,cite'.replace(rword, function(el) {
    map[el] = 'text';
    return el;
});


module.exports = utils.createNodeName(map, 'view');