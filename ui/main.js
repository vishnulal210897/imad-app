console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = 'new value';
var img = document.getElementById('maddy');
var marginleft = 0;
function moveright () {
marginleft = marginleft + 1;
img.style.marginleft = marginleft + 'px';
}
img.onclick = function () {
var interval = setinterval(moveright,50);
};

