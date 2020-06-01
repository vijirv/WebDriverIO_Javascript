

describe("interaction with web elements", function(){

    it("enter value in a field", function(){

        browser.url('/'); //baseurl mentioned in config
        const search = $('#twotabsearchtextbox');
        search.setValue('Apple Mac book');
        browser.pause(5000);
    });

    it('click on a filed',function(){
        browser.url('/')
        const searchIcon = $('input.nav-input');
        searchIcon.click();

    })

    it("get header text", function(){
        browser.url('https://webdriver.io/docs/api.html'); 
        const header = $('h1.postHeaderTitle');
        let text = header.getText();
        console.log(text);
        assert.strictEqual(browser.getTitle(), "API Docs · WebdriverIO");
       
    });







});