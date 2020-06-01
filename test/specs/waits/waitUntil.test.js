describe('wait until sync for the elements', () =>{

  it('wait for home page',() =>{

        browser.url('https://app.hubspot.com/login')

        const email = $('#username') 
        const password = $('#password')
        const loginBtn =$('#loginBtn')

        //callback function , waiting for element to be displayed
        browser.waitUntil(function(){ 
            return email.isDisplayed() === true
        }, 5000, 'email is not displayed after the given time')

        email.setValue('viji2903@gmail.com')
        password.setValue('26Ind1942')
        loginBtn.click()


        const header = $('h1.dashboard-selector__title')
        browser.waitUntil(function(){
            return header.getText() === 'Marketing Dashboard'
        }, 5000, 'header is not displayed after the given time')

        console.log('Header is ',header.getText())
        assert.equal("Marketing Dashboard",header.getText())
        
    })

  })




