self.onmessage = m => {
  var req = new Request(m.data);
  fetch(req).then(response => response.text()).then(res => {
    if(res == '1') postMessage(true);
    else postMessage(false);
  }).catch(() => postMessage(false));
}
