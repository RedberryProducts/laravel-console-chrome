import axios from 'axios';
import {getURL} from './helpers';

const logsAPI = 'laravel-console';

export const getLogs = async () => {
	const origin = await getURL();
	const {data} = await axios.get(`${origin}/${logsAPI}`);
	return data;
}