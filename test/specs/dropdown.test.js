describe("drop down handling",()=>{

    it.skip("select dropdown by visible text",() => {

        browser.url("https://en-gb.facebook.com/");
        const day = $('#day');
        day.selectByVisibleText('29')
        const month = $('#month');
        month.selectByVisibleText('May')
        const year = $('#year');
        year.selectByVisibleText('1990')

        browser.pause(2000)

    })

    it.skip("select dropdown by index",() => {

        browser.url("https://en-gb.facebook.com/");
        const day = $('#day');
        day.selectByIndex(3)
        const month = $('#month');
        month.selectByIndex(9)
        const year = $('#year');
        year.selectByIndex(13)

        browser.pause(2000)

    })

    it.skip("select dropdown by attribute",() => {

        browser.url("https://en-gb.facebook.com/");
        const day = $('#day');
        day.selectByAttribute('value','3')
        const month = $('#month');
        month.selectByAttribute('value','10')
        const year = $('#year');
        year.selectByAttribute('value','2020')

        browser.pause(2000)

    })

    it.skip("get all values from dropdown", function(){

        browser.url("https://en-gb.facebook.com/");
       let list =  $$('#day option');
       console.log('length is', list.length)

        for(let i = 0; i<list.length; i++){
            const element = list[i];
            console.log(element.getText())
        }
    })

    it("get all values from dropdown", function(){

        browser.url("https://en-gb.facebook.com/");
       let list =  $$('#month option');
       console.log('length is', list.length)

        for(let i = 0; i<list.length; i++){
            const element = list[i];
            console.log(element.getText())

            if(element.getText() === 'Mar'){
                element.click();
                break;
            }
        }
        browser.pause(5000)

    })
   


});