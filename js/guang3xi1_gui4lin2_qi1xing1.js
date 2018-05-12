(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('七星区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"450305","properties":{"name":"七星区","cp":[110.317826,25.252701],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BEFAAEDCCC@AA@CCCBGDABA@IJEACAIJ@@GHAB@BGF@A@@AB@B@BB@A@AAKMC@BDABAA@@@BA@A@@A@AA@A@A@A@@A@CA@@AWP@@ABABCBABAB@@AB@@ABEBAB@AA@@AA@A@@@A@@BA@@@@@@D@@@@@BAB@@ABABCDA@@B@@AD@@A@@BB@FDDBBH@D@B@BAH@@@@@BDH@@FHBD@@@@@@BD@BDD@B@F@FADAD@DBD@@@@DB@BJFDBBBB@FF@A@BBAB@@@@A@@DAAA@@@A@A@AA@@A@B@AA@@ABA@AB@AC@@@@BA@@@BB@@@BB@A@A@@@AB@@@@@BB@@@AB@@@@@@@@A@@B@B@B@@@B@@A@@BAB@@@@@B@@@@B@@@@D@@@@A@@B@BAB@DCHBCB@B@BD@@BB@HDBBHDHAHA@CD@@@B@@@ABDDFAHDDBFBBBBAB@@DD@@@F@DBBAFGFCHE@I@CAA@@AEDEBAFCD@@A@AACA@CAG@A@A@BA@@BG@GBB@A@AIA@AACBAACGCBCA@BCJG@CBCQE@@BEDEFGBA@AE@AABCAA@@AB@@@BAD@BBADB@B@BAA@BABABA@AA@A@ACACD@BA@@@C@@@@A@@@@@@@@AA@@@@"],"encodeOffsets":[[113026,25832]]}}],"UTF8Encoding":true});}));