import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import StackNavigation from './modules/auth/navigation/StackNavigation';
import PushNotification, {Importance} from 'react-native-push-notification';
import { ShowNotification, handleScheduleNotification, handleCancel } from './shared/services/NotificationService'

export default function App() {
  useEffect(() => {
    //createChannel();
    //ShowNotification('Hello', 'Welcome to my App');
  }, [])
  return <StackNavigation />;
}


// const createChannel = () => {
//   PushNotification.createChannel(
//     {
//       channelId: 'channel-id', // (required)
//       channelName: 'My channel', // (required)
//       // channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
//       // playSound: false, // (optional) default: true
//       // soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
//       // importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
//       // vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
//     },
//     (created) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
//   );
// };