// 灯笼样式
var headd = document.querySelector('header')
var ddiv = document.createElement('div')
headd.appendChild(ddiv)
ddiv.className ='dengl'
var heads = '<div class="d-box"><div class="d1"><span></span><span><p></p></span><ul><li></li><li></li><li><span></span></li><li></li><li></li></ul></div><div class="d2"><span></span><span><p></p></span><ul><li></li><li></li><li><span></span></li><li></li><li></li></ul></div></div><div class="d-box1"><div class="d1"><span></span><span><p></p></span><ul><li></li><li></li><li><span></span></li><li></li><li></li></ul></div><div class="d2"><span></span><span><p></p></span><ul><li></li><li></li><li><span></span></li><li></li><li></li></ul></div></div>'
var headers = document.querySelector('.dengl')
headers.innerHTML = heads;