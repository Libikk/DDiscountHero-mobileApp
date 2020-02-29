import axiosInstance from '../axiosInstance';

export class UserProducts {

    static getUserProducts = async () => axiosInstance.get('/api/product/getUserProducts').then(({ data }) => data);
}