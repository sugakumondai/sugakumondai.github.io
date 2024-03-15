self.onmessage = m => {
  var xiv = new Request(m.data);
  fetch(xiv).then(response => response.text().then(res => {
    if(res == '1') self.postMessage(true);
    else self.postMessage(false);
  }));
}
