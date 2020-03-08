/**
 * 移动端适配
 */

(function (doc, win, undefined) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (clientWidth === undefined) return;
      // 以ip5为基准  
      docEl.style.fontSize = (clientWidth * 14) / 375 + 'px';
    };
  if (doc.addEventListener === undefined) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window);
