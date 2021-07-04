/**
 * Get main tab id.
 */
export const getMainTabId = () => chrome.devtools.inspectedWindow.tabId; 

/**
 * Get current chrome tab.
 */
const getMainTab = async () => {
    const tab = await chrome.tabs.get(getMainTabId());
    return tab;
}

/**
 * Get gurrent active tab url.
 */
export const getURL = async() => {
    const {url} = await getMainTab();
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

/**
 * Get variable type.
 */
export const getType = (el) => {
    if(el === null) {
        return 'null';
    }
        
    if(Array.isArray(el)) {
        return 'array';
    }

    return typeof(el);
}
