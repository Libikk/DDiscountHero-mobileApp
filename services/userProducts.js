import axios from 'axios';
import appConfig from '../appConfig';

export class UserProducts {

    static getUserProducts = async () => axios.get(`${appConfig.ddiscountHeroUrl}/api/product/getUserProducts`).then(({ data }) => data);
}