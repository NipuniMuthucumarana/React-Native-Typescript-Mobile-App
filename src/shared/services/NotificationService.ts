import PushNotification from "react-native-push-notification";

// interface Notification {
//   title: string
//   message: string
//   date: string
// }

const ShowNotification = ( title: string, message: string  ) => {
  PushNotification.localNotification({
    title: title,
    message: message,
  });
};

const handleScheduleNotification = (title: string, message: string) => {
  PushNotification.localNotificationSchedule({
    title: title,
    message: message,
    date: new Date(Date.now() + 5 * 1000),
  });
};

const handleCancel = () => {
  PushNotification.cancelAllLocalNotifications();
}

export { ShowNotification, handleScheduleNotification, handleCancel }