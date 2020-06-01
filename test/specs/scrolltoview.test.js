const scrollPage = require('../../pages/scrolltoviewpage')

describe("scroll to element", function(){

    //it.skip - skip this test

    it.skip('should scroll to forgot password link', function(){

        browser.url("https://classic.freecrm.com/");

        //returns false
        console.log('Forgot password link in  view port', scrollPage.forgotPasswordLink.isDisplayedInViewport());

       scrollPage.forgotPasswordLink.scrollIntoView();

       //returns true after scrolling
       console.log('Forgot password link in  view port', scrollPage.forgotPasswordLink.isDisplayedInViewport());

       browser.pause(3000)
       scrollPage.forgotPasswordLink.click();

    });


    it('should scroll to forgot password link, move and click', function(){

       browser.url("https://classic.freecrm.com/");
       scrollPage.forgotPasswordLink.scrollIntoView();
       scrollPage.moveToElement(scrollPage.forgotPasswordLink);
       browser.pause(3000)
       scrollPage.forgotPasswordLink.click();
    });




});