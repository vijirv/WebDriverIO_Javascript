const internetpage = require('../../pages/internetpage');



describe("handling checkboxes", function(){
    
    it("check page url", function(){
       // browser.url("/"); //baseurl specified in config
       //to pass the test i added here..
       browser.url('https://the-internet.herokuapp.com/');
    // expect(browser.getUrl()).equals(`${browser.options.baseUrl}/`); //returns the baseurl in the config (insted of hardcode we use this browser.options.baseUrl)
       expect(browser.getUrl()).equals("https://the-internet.herokuapp.com/");

    });

    it("should click checkbox",function (){

       browser.url('https://the-internet.herokuapp.com/');
       internetpage.clickOnLink(6);
       internetpage.h3Header.waitForDisplayed();
       internetpage.clickOnCheckBox(1);
       //browser.pause(5000);

        //prints boolean value
       console.log('checkbox selected',internetpage.getCheckBoxElement(1).isSelected())

       //chai assert
       expect(internetpage.getCheckBoxElement(1).isSelected()).equals(true);
    });

    
    it("check checkbox page header",function(){
        browser.url('https://the-internet.herokuapp.com/');
        internetpage.clickOnLink(6);
        internetpage.h3Header.waitForDisplayed();
        const text = internetpage.h3Header.getText();
        expect(text).equals("Checkboxes");

    });

    it("check checkbox page url",function(){
        browser.url('https://the-internet.herokuapp.com/');
        internetpage.clickOnLink(6);
       // expect(browser.getUrl()).equals(`${browser.options.baseUrl}/checkboxes`); //instead of hardcoding browser.options need to be used
        expect(browser.getUrl()).equals("https://the-internet.herokuapp.com/checkboxes");

    });




});