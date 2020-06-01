const actionsPage = require('../../../pages/actions.page');


describe("page actions features", function(){

    //move to elements

    it("move to element",function (){

        browser.url('https://www.spicejet.com/default.aspx');

        actionsPage.moveToElement(actionsPage.loginSignUpLink);
        actionsPage.moveToElement(actionsPage.spiceClubMember);
        actionsPage.clickElement(actionsPage.memberLogin);
        browser.pause(2000);


    });


    //Key Press

    it("KEYS action perform tab", function(){

        browser.url("https://the-internet.herokuapp.com/key_presses");
        actionsPage.enterSearch("Tab");
        const text = actionsPage.getResultLabelText();
        console.log('Key pressed', text);
        assert.equal('You entered: TAB',text);
        browser.pause(2000);

    });

    it("KEYS action perform shift", function(){

        browser.url("https://the-internet.herokuapp.com/key_presses");
        actionsPage.enterSearch("Shift");
        const text = actionsPage.getResultLabelText();
        console.log('Key pressed', text);
        assert.equal('You entered: SHIFT',text);
        browser.pause(2000);

    });

    it("KEYS action perform F1", function(){

        browser.url("https://the-internet.herokuapp.com/key_presses");
        actionsPage.enterSearch("F1");
        const text = actionsPage.getResultLabelText();
        console.log('Key pressed', text);
        assert.equal('You entered: F1',text);
        browser.pause(2000);

    });



    



});