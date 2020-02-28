var push  = require('web-push');

let vapidKeys = { 
    publicKey:'BCxNhG17oHiw2fOD6giH0YFriasUJq5kJCBOEqP07dLmyiYBBArNBaNojJAhY8aZYr49vN3vBXKv5EihcfSoEq0',
    privateKey:'j4Omosy_CkXbxVmjVq9xbMlFxcAiBGFnhoyoT_wXnPQ'
};

push.setVapidDetails('mailto:tanpure.anjali@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {};

push.sendNotification(sub, 'This is the Test Message');
