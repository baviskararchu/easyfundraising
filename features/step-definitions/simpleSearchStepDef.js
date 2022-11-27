
const { Given, When, Then } = require('@wdio/cucumber-framework');
const SearchPage = require('../pageobjects/simpleSearchPageObject');

Given('I am on the home page', async function () {
    await SearchPage.open()
});

When('I clicked the link ‘Find a Cause’ on the top of the page', async function () {
    await SearchPage.clickOnFindACuaseLink()
});

When('I entered {string} in the Search field', async function (cause) {
    await SearchPage.enterSearchCause(cause)
});

When('I selected the 3rd cause from the suggestion list', async function () {
    await SearchPage.selectThirdCauseFromAutosuggession()
});

When('I clicked on Search cause', async function () {
    await SearchPage.submitSearchCause();

});

Then('I should see the selected 3rd Cause in {string}', async function (searchcauseresult) {
    await expect(SearchPage.searchResultTxt).toHaveText(searchcauseresult);
});


