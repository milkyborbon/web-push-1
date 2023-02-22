var push  = require('web-push');


let vapidKeys = {
  publicKey: 'BEF2yQD9NjBqigMuZINUl6t6fIlPyZWihXir1uW0dfT829wa9egxIgDMzNKGiEUKGgrJHWJewX3ntaNXrimTR-4',
  privateKey: 'D9gMTmS22o0dKqk341BG6l9rIsco_wh_BgZBIGboNws'
};

push.setVapidDetails('mailto:milkyborbon30@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {

};
push.sendNotification(sub, 'This is the Test Message');
