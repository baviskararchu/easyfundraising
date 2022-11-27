/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    async open(path) {
        browser.url(path);
        await browser.maximizeWindow()
        let cookieConsent = await $("//*[@id='cookieConsentPopup']/button")
        let isExisting = await cookieConsent.isExisting();
        await console.log(isExisting)
        if (isExisting)
            await cookieConsent.click();
    }
}
