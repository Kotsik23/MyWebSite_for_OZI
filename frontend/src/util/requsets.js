import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:2525/',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token, Origin'
    }
});