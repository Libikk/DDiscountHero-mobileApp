import { Notifications } from 'expo';
import axios from 'axios';
import * as Permissions from 'expo-permissions';
import appConfig from '../appConfig';

const updatePushNotificationToken = async () => {
  const permissionsResponse = await Permissions.askAsync(Permissions.NOTIFICATIONS).catch(console.error);

  if (permissionsResponse.status !== 'granted') {
    alert('No notification permissions!');
    return;
  }

  const token = await Notifications.getExpoPushTokenAsync().catch(console.error);
  return axios.post(`${appConfig.ddiscountHeroUrl}/api/user/updateUserPushNotificationToken`, { token });
};


export default updatePushNotificationToken;
