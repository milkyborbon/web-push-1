var push  = require('web-push');

let vapidKeys = { 
    publicKey:'BCxNhG17oHiw2fOD6giH0YFriasUJq5kJCBOEqP07dLmyiYBBArNBaNojJAhY8aZYr49vN3vBXKv5EihcfSoEq0',
    privateKey:'j4Omosy_CkXbxVmjVq9xbMlFxcAiBGFnhoyoT_wXnPQ'
};

push.setVapidDetails('mailto:tanpure.anjali@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {
    "endpoint":"https://fcm.googleapis.com/fcm/send/cxfdBmXIvGs:APA91bEyIb1YodZuWIHctSOyMGiWTMvp3EyFHsYmvbS6ppGzNQMPbjfH8jDbwACY50Xro7A-oEE41MrEfvtcbq2TcOHAljSJbv7x-Zq7lV07GyWzSP0uaVnDupOqHhioLQhVNdW_IiPz",
    "expirationTime":null,
    "keys":{
        "p256dh":"BBrO_bb8bBd_kZ201MvUVSDWTjLWBm_v0sZ5h-y7_DHdvqJ15LRXSmRJyGHogBBCq7wuaClPzXnmo5LwraRJfXU",
        "auth":"HZErgoekdTBmj3_KGmtAYw"}
};
push.sendNotification(sub, 'This is the Test Message');
