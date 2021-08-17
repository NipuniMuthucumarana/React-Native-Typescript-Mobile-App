import PushNotification from "react-native-push-notification";

const ShowNotification = ( title: string, message: string, index: number  ) => {
  PushNotification.localNotification({
    channelId: 'channel-id',
    title: title,
    message: message,
    id: index
  });
};

const handleScheduleNotification = (title: string, message: string) => {
  PushNotification.localNotificationSchedule({
    channelId: 'channel-id',
    title: title,
    message: message,
    date: new Date(Date.now() + 5 * 1000),
  });
};

const handleCancel = () => {
  PushNotification.cancelAllLocalNotifications();
}

export { ShowNotification, handleScheduleNotification, handleCancel }