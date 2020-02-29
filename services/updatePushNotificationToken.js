import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import axiosInstance from '../axiosInstance';

const updatePushNotificationToken = async () => {
  const permissionsResponse = await Permissions.askAsync(Permissions.NOTIFICATIONS).catch(console.error);

  if (permissionsResponse.status !== 'granted') {
    alert('No notification permissions!');
    return;
  }

  const token = await Notifications.getExpoPushTokenAsync().catch(console.error);
  return axiosInstance.post('/api/user/updateUserPushNotificationToken', { token });
};


export default updatePushNotificationToken;
