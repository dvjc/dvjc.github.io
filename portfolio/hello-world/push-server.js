// Web-push Module
const webpush = require('web-push');
const vapid = require('./vapid.json');

// Configure keys
webpush.setValidDetails(
  'mailto:gnugnats@gmail.com',
  vapid.publicKey,
  vapid.privateKey
);

const pushSubscription - {
  endpoint: 'https://fcm.googleapis.com/fcm/send/dMYSGGXRW98:APA91bELtF9sB_v_fhfgeaB7pJ96lxs_9hya1Mvip_cQCPbSa2iQT8MCAomSW-fkQpWXre5_X2ALitDOPehzZjDOyup9ZjWdakwTlFgjr223UmR2ttp1tDwomk0yUmHFblV4jsSQxCsU',
  keys: {
    auth: '50n5epYQX5GFnzJcnEZvYQ',
    p256dh: 'BKPz9C7Pcr826qZH2q3fCWWMbkL7zmv0pTUV7SL_6KIMO7GkLiVj6oIJzX36saJrNw3Y8kbVYHfUwyQsEK7Kx7o'
  }
};

webpush.sendNotification(pushSubscription, 'A notification from the push server');
console.log('Push sent to client');

