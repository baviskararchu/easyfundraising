const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */

    get findACuaseLnk() { return $("a[href='/support-a-good-cause/']") }

    get searchTermField() { return $("input[name='cause']"); }

    get searchCauseBtn() { return $("button[type='submit']"); }

    get searchResultTxt() { return $("p[data-testid='title']"); }

    get select3rdCauseFromAutoSuggestLst() { return $('.style_suggestionsList__2o3hQ').$$('.style_suggestion__-CRCo')[2].$("button[class='style_suggestionBtn__47Wy4']"); }

    /**
     * Alternate  chain selector for choosing 3rd cause from AutosuggestionList
     */
    //  get select3rdCauseFromAutoSuggestLst () { return $('.style_suggestionsList__2o3hQ .style_suggestion__-CRCo:nth-child(4)').$("button[class='style_suggestionBtn__47Wy4']");}


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async clickOnFindACuaseLink() {
        await this.findACuaseLnk.click();
    }

    async enterSearchCause(searchcause) {
        await this.searchTermField.setValue(searchcause)
    }

    async selectThirdCauseFromAutosuggession() {
        await this.select3rdCauseFromAutoSuggestLst.click()
    }

    async submitSearchCause() {
        await this.searchCauseBtn.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('https://www.easyfundraising.org.uk/');
    }
}

module.exports = new SearchPage();
