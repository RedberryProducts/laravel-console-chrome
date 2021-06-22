/**
 * Get current chrome tab.
 */
const getCurrentTab = async () => {
	const queryOptions = {active: true, currentWindow: true};
	const [tab] = await chrome.tabs.query(queryOptions);

	return tab;
}

/**
 * Get gurrent active tab url.
 */
export const getURL = async() => {
	const {url} = await getCurrentTab();
	const {origin} = new URL(url);
	return origin;
}

/**
 * Determine if string is JSON.
 */
export const isJSON = (str) => {
	try {
			JSON.parse(str);
	} catch (e) {
			return false;
	}
	return true;
}
