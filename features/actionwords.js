const { I } = inject();

exports.Actionwords = {
    handleBeans: false,
    handleWater: false,
    handleGrounds: false,

    iStartTheCoffeeMachineUsingLanguageLang: function (lang) {
        I.amOnPage('https://hiptest.github.io/hps-java-junit-selenium/src/web/coffee_machine.html');
        I.selectOption('#lang', lang);
        I.click({css: '#onOff'});
    },

    iShutdownTheCoffeeMachine: function () {
        I.click({css: '#onOff'});
    },

    messageMessageShouldBeDisplayed: function (message) {
        I.see(message.replace(/\n/gi, ""), {css: '#message'});
    },

    coffeeShouldBeServed: function () {
        I.seeElementInDOM({css: '#coffee.served'});
    },

    coffeeShouldNotBeServed: function () {
        I.dontSeeElementInDOM({css: '#coffee.served'});
    },

    iTakeACoffee: function () {
        I.click({css: '#getCoffee'});
    },

    iEmptyTheCoffeeGrounds: function () {
        I.click({css: '#emptyGround'});
    },

    iFillTheBeansTank: function () {
        I.click({css: '#fillBeans'});
    },

    iFillTheWaterTank: function () {
        I.click({css: '#fillWater'});
    },

    iTakeCoffeeNumberCoffees: function (coffee_number) {
        while ((coffee_number > 0)) {
            this.iTakeACoffee();
            coffee_number = coffee_number - 1;

            if (this.handleBeans) {
                this.iFillTheBeansTank();
            }
    
            if (this.handleGrounds) {
                this.iEmptyTheCoffeeGrounds();
            }
    
            if (this.handleWater) {
                this.iFillTheWaterTank();
            }
        }
    },

    theCoffeeMachineIsStarted: function () {
        this.iStartTheCoffeeMachineUsingLanguageLang("en");
    },

    iHandleEverythingExceptTheWaterTank: function () {
        this.iHandleCoffeeGrounds();
        this.iHandleBeans();
    },

    iHandleWaterTank: function () {
        this.handleWater = true;
    },

    iHandleBeans: function () {
        this.handleBeans = true;
    },

    iHandleCoffeeGrounds: function () {
        this.handleGrounds = true;
    },

    iHandleEverythingExceptTheBeans: function () {
        this.iHandleWaterTank();
        this.iHandleCoffeeGrounds();
    },

    iHandleEverythingExceptTheGrounds: function () {
        this.iHandleWaterTank();
        this.iHandleBeans();
    },

    displayedMessageIs: function (__free_text) {
        this.messageMessageShouldBeDisplayed(__free_text.content);
    },

    iSwitchToSettingsMode: function () {
        I.click({css: '#settings'});
    },

    settingsShouldBe: function (__datatable) {

    }
};