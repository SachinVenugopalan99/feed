import apiInstance from "../utils/api";
import qs from 'qs';

const API_KEY = 'XM0ooo4EG8puK9EPQ16M3KGxSA3ZsCKS';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    async users() {
        return await apiInstance.get('/users', {
            headers: {'Authorization': API_KEY, "Access-Control-Allow-Origin": "*"}
        })
    },
    async feeds(params: any) {
        return await apiInstance.get(`/posts?${qs.stringify(params)}`, {
            headers: {'Authorization': API_KEY, "Access-Control-Allow-Origin": "*"}
        })
    },
    async feedById(id: any) {
        return await apiInstance.get(`/posts/${id}`, {
            headers: {'Authorization': API_KEY, "Access-Control-Allow-Origin": "*"}
        })
    }
}