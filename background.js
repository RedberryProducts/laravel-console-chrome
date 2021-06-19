let color = 'green';

chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({color});
	console.log(`Default color set to ${color}!`);
});