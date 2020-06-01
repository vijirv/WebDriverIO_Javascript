describe("interaction with web elements", function(){

    it("get header value", function(){

        browser.url('https://www.freshworks.com/'); 
        const header = $('h1');
        let text = header.getText();
        console.log(text);
        
    });



    
});