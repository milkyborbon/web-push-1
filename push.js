var push  = require('web-push');


let vapidKeys = {
  publicKey: 'BEF2yQD9NjBqigMuZINUl6t6fIlPyZWihXir1uW0dfT829wa9egxIgDMzNKGiEUKGgrJHWJewX3ntaNXrimTR-4',
  privateKey: 'D9gMTmS22o0dKqk341BG6l9rIsco_wh_BgZBIGboNws'
};

push.setVapidDetails('mailto:milkyborbon30@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/eXQ6tkl8gsY:APA91bEm8b8mptRIUXGfrJk7Ody8YUGfCZpHI15Wp4NuR0plj7L2VPSNNmHZYD0944ksGTMaCLWczH4eEfpd8rYp-ODanIpoHkDTqGtScuXUzSUHtj909UtVqG2dqnqxUJFjatzdnGyJ","expirationTime":null,"keys":{"p256dh":"BN6fYTKYmDkqOw0NomKfD-5nh6TKSgrPQC_sUPg2gZr5pdnFuYidciu090O61Zp339meyrQI6i-ooNuPlVQWnR4","auth":"On2GI7QRL79EeKeZsoaU9A"}};
push.sendNotification(sub, 'This is the Test Message');
