import axios from 'axios';
import appConfig from '../appConfig';
import { loadData, saveData } from '../services/localStorageService';

export const getCookie = (name, cookie) => {
    const escape = (s) => s.replace(/([.*+?\^${}()|\[\]\/\\])/g, '\\$1');
    var match = cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
    return match ? match[1] : null;
}

export const authorize = async () => {
    const token = await loadData('userToken');

    return axios.post(`${appConfig.ddiscountHeroUrl}/api/auth/authorize`, { token })
        .then(res => {
            const newToken = getCookie('access_token', res.headers['set-cookie'][0]);
            saveData('userToken', newToken)
            return res.data;
        })
}