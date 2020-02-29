import axios from 'axios';
import appConfig from './appConfig';

export default axios.create({
  baseURL: appConfig.ddiscountHeroUrl,
  headers: {
    mobile: 'DDISCOUNT_HERO-MOBILE',
  },
});
