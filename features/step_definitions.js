const { I } = inject();
let actionwords;

Before(() => {
    actionwords = Object.create(require('./actionwords.js')).Actionwords;
});


When(/^I start the coffee machine using language "(.*)"$/, function (lang) {
    return actionwords.iStartTheCoffeeMachineUsingLanguageLang(lang);
});

When(/^I shutdown the coffee machine$/, function () {
    return actionwords.iShutdownTheCoffeeMachine();
});

Then(/^message "(.*)" should be displayed$/, function (message) {
    return actionwords.messageMessageShouldBeDisplayed(message);
});

Then(/^coffee should be served$/, function () {
    return actionwords.coffeeShouldBeServed();
});

Then(/^coffee should not be served$/, function () {
    return actionwords.coffeeShouldNotBeServed();
});

When(/^I take a coffee$/, function () {
    return actionwords.iTakeACoffee();
});

When(/^I empty the coffee grounds$/, function () {
    return actionwords.iEmptyTheCoffeeGrounds();
});

When(/^I fill the beans tank$/, function () {
    return actionwords.iFillTheBeansTank();
});

When(/^I fill the water tank$/, function () {
    return actionwords.iFillTheWaterTank();
});

When(/^I take "(.*)" coffees$/, function (coffee_number) {
    return actionwords.iTakeCoffeeNumberCoffees(coffee_number);
});

Given(/^the coffee machine is started$/, function () {
    return actionwords.theCoffeeMachineIsStarted();
});

Given(/^I handle everything except the water tank$/, function () {
    return actionwords.iHandleEverythingExceptTheWaterTank();
});

Given(/^I handle water tank$/, function () {
    return actionwords.iHandleWaterTank();
});

Given(/^I handle beans$/, function () {
    return actionwords.iHandleBeans();
});

Given(/^I handle coffee grounds$/, function () {
    return actionwords.iHandleCoffeeGrounds();
});

Given(/^I handle everything except the beans$/, function () {
    return actionwords.iHandleEverythingExceptTheBeans();
});

Given(/^I handle everything except the grounds$/, function () {
    return actionwords.iHandleEverythingExceptTheGrounds();
});

Then(/^displayed message is:$/, function (__free_text) {
    return actionwords.displayedMessageIs(__free_text);
});

When(/^I switch to settings mode$/, function () {
    return actionwords.iSwitchToSettingsMode();
});

Then(/^settings should be:$/, function (__datatable) {
    return actionwords.settingsShouldBe(__datatable);
});
