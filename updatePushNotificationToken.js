import { Notifications } from 'expo';
import axios from 'axios';
import * as Permissions from 'expo-permissions';
import { appConfig } from './appConfig';

const PUSH_ENDPOINT = `${appConfig.ddiscountHeroUrl}/api/user/updateUserPushNotificationToken`;

const updatePushNotificationToken = async () => {
    const permissionsResponse = await Permissions.askAsync(Permissions.NOTIFICATIONS).catch(console.error);;

    if (permissionsResponse.status !== 'granted') {
        alert('No notification permissions!');
        return;
    }
    
    let token = await Notifications.getExpoPushTokenAsync().catch(console.error);
    return axios.post(PUSH_ENDPOINT, { token });
}


export default updatePushNotificationToken;