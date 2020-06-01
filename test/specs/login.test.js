const loginPage = require('../../pages/loginpage');
const loginData = require("../../testdata/logindata")


describe("handle application login", function(){

it("enter username",function(){

    browser.url(`${browser.options.baseUrl}/login`) //getting the base url value from config baseUrl
   //loginPage.enterUserName('tomsmith');
    //assert.equal('tomsmith',loginPage.username.getValue());

    //using Testdat from js file
    loginPage.enterUserName(loginData.username);
    assert.equal(loginData.username,loginPage.username.getValue());
});

it("enter password",function(){
    
    // loginPage.enterPassword('SuperSecretPassword');
    // assert.equal('SuperSecretPassword',loginPage.password.getValue());

     loginPage.enterPassword(loginData.password);
     assert.equal(loginData.password,loginPage.password.getValue());
 });
 

 it("click on login button",function(){
     loginPage.clickOnLogin();

 });

 it.skip("should clear username value",function(){
   loginPage.username.click();
   loginPage.username.clearValue();
   assert.equal('',loginPage.username.getValue()); //clearing value and comparing with blank

});

it.skip("should clear password value",function(){
    loginPage.password.click();
    loginPage.password.clearValue();
    assert.equal('',loginPage.password.getValue()); //clearing value and comparing with blank
 
 });


});