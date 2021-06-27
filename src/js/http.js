import axios from 'axios';
import {getURL} from './helpers';

/**
 * Extension supported routes.
 */
const logsAPI = 'laravel-console';
const forgetLogsAPI = 'laravel-console/forget';
const pingAPI = 'laravel-console/ping';

/**
 * Get all the logs from the server.
 */
export const getLogs = async () => {
    const origin = await getURL();
    const {data} = await axios.get(`${origin}/${logsAPI}`);
    return data;
}

/**
 * Clear all the logs on the server.
 */
export const forgetLogs = async () => {
    const origin = await getURL();
    await axios.get(`${origin}/${forgetLogsAPI}`);
}

/**
 * Determine if laravel console extension 
 * is supported for website.
 */
export const ping = async () => {
    const origin = await getURL();

    try {
        const {status} = await axios.get(`${origin}/${forgetLogsAPI}`);
        return status === 200;
    } catch(_) {
        return false;
    }
}
