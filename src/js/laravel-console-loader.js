import { ping } from './http';
import { getURL } from './helpers';

(async () => {
    /**
     * Determine if web site is debuggable and if so register the devtool panel.
     */
    const isAvailable = await ping();
    if(isAvailable) {
        chrome.devtools.panels.create(
            "Laravel Console",
            "../images/laravel.png",
            "../html/laravel-console.html",
        );
    }
})();
