import axios from 'axios';
import {getURL} from './helpers';

const logsAPI = 'laravel-console';
const forgetLogsAPI = 'laravel-console/forget';

export const getLogs = async () => {
	const origin = await getURL();
	const {data} = await axios.get(`${origin}/${logsAPI}`);
	return data;
}

export const forgetLogs = async () => {
	const origin = await getURL();
	await axios.get(`${origin}/${forgetLogsAPI}`);
}