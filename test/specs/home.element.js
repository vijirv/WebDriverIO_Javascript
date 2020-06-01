
//like import statment we use require

// $ - find element - return single element

// $$ - find elements - returns an array with element results

const homePage = require("../../pages/homepage")

describe("home page element handle", function(){

    it("verify home page element", function(){

        browser.url("https://www.freshworks.com/");
       let headertext = homePage.pageHeader.getText();
       console.log(headertext);

       let subheadertext = homePage.subHeader.getText();
       console.log(subheadertext);

       homePage.customerLink.click();
       console.log(browser.getTitle());
       browser.pause(5000);
      

    })



});