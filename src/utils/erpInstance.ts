import axios from 'axios';
import { env } from '~/env.mjs';

const instance = axios.create({
    baseURL: env.NEXT_PUBLIC_ERP_URL,
    timeout: 1000,
    headers: { 'Authorization': env.NEXT_PUBLIC_ERP_AUTHORIZATION }
});

export default instance;
