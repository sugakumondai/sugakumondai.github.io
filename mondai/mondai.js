var data = JSON.parse(atob(location.href.slice(location.href.indexOf('?index=') + 7)));
function red(e) {
  if (e) {
    document.querySelector('#ipa').value = e[0];
    document.querySelector('#use').value = e[1];
  }
  document.querySelector('form').submit();
}
onmessage = m => red(m.data);
document.addEventListener('DOMContentLoaded', () => {
  let ifr = document.querySelector('iframe');
  ifr.onload = () => ifr.contentWindow.postMessage('', '*');
  ifr.src = data[2];
  document.querySelector('form').action = data[0];
  document.querySelector('#act').value = data[1];
  document.querySelector('#bro').value = navigator.userAgent;
});
