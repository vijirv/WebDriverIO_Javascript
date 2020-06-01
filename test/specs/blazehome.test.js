const blazemeterhomepage = require('../../pages/blazemeterhomepage');


describe('blaze page elements handle', function(){

    it('get text of all top nav links',function (){

        browser.url('https://www.blazemeter.com/');

      //  blazemeterhomepage.getTextForLI;
      //  blazemeterhomepage.useCasesElementsText;

      //, is concatination
        console.log('Third link is : ', blazemeterhomepage.specificChildElement(3).getText());

        blazemeterhomepage.getSpecificChildElementText(4);

    })

    //isDisplayed, isEnabled, isExisting, isDisplayedInViewport - returns boolean

    it('name heading exists?', function(){

       console.log('Main header displayed : ', blazemeterhomepage.mainHeader.isDisplayed());

    })

    it('name heading enabled?', function(){

        console.log('Main header enabled : ', blazemeterhomepage.mainHeader.isEnabled());
 
     })

     it('name heading exists?', function(){

        console.log('Main header exists : ', blazemeterhomepage.mainHeader.isExisting());
 
     })

     it('name heading displayed in Viewport?', function(){

        console.log('Main header displayed in viewport : ', blazemeterhomepage.mainHeader.isDisplayedInViewport());

        console.log('Request Demo button displayed in viewport : ', blazemeterhomepage.requestDemoLink.isDisplayedInViewport());
 
     })

     it("click on product link if it is displayed", function(){

        blazemeterhomepage.clickOnProductLink();
        browser.pause(5000);
        console.log('product tiltle is', browser.getTitle());
 
     })




})