import { Notifications } from 'expo';
import axios from 'axios';
import * as Permissions from 'expo-permissions';

const PUSH_ENDPOINT = 'http://192.168.1.103:3000/api/user/updateUserPushNotificationToken'

const updatePushNotificationToken = async () => {
    const permissionsResponse = await Permissions.askAsync(Permissions.NOTIFICATIONS);

    if (permissionsResponse.status !== 'granted') {
        alert('No notification permissions!');
        return;
    }
    
    let token = await Notifications.getExpoPushTokenAsync().catch(console.error);
    return axios.post(PUSH_ENDPOINT, { token });
}


export default updatePushNotificationToken;