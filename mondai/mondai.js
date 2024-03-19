var data = JSON.parse(
  atob(
    location.href.replace('https://sugakumondai.github.io/mondai/?index=', '')
  )
);
var xiv = new Worker('/mondai/xiv.js');
var ww = new Worker('/mondai/ww.js');
function red(e) {
  if (e != false) {
    document.querySelector('#ipa').value = e[0];
    document.querySelector('#use').value = e[1];
  }
  document.querySelector('form').submit();
}
xiv.onmessage = (m) => {
  if (m.data) {
    ww.onmessage = (wwm) => red(wwm.data);
    ww.postMessage(data[3]);
  } else red(false);
};
onload = () => {
  document.querySelector('form').action = data[0];
  document.querySelector('#act').value = data[1];
  document.querySelector('#bro').value = navigator.userAgent;
  xiv.postMessage(data[2]);
};
