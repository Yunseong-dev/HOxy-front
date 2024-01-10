import axios from "axios";

const apiServer = 'http://localhost:8080';

export const customAxios = axios.create({
    baseURL: apiServer
});

export const fetcher = (url) => customAxios.get(url).then(res => res.data);

export const tokenFetcher = (token) => {
    return (url) => {
        return customAxios
            .get(url, { headers: { 'Authorization': `Bearer ${token}` } })
            .then(res => res.data);
    };
};
