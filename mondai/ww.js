self.onmessage = m => {
  var req = new Request(m.data);
  fetch(req).then(response => response.text()).then(res => res.includes('IPアドレス') && res.includes('認証ユーザー名') ? postMessage([res.slice(res.indexOf('2">', res.indexOf('IPアドレス')) + 3, res.indexOf('<', res.indexOf('2">', res.indexOf('IPアドレス')))),res.slice(res.indexOf('2">', res.indexOf('認証ユーザー名')) + 3, res.indexOf('<', res.indexOf('2">', res.indexOf('認証ユーザー名'))))]) : postMesssage(false);).catch(() => postMessage(false));
};
