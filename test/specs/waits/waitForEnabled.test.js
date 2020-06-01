describe('wait for enabled case', function(){

    it.skip('should wait for button  to be enabled', () =>{

        browser.url("https://classic.crmpro.com/register/")

        const checkBox = $(`//input[@name='agreeTerms']`) //`` symbol for xpath - agreeTerms needs to be with in single codes, so`` needs to be used
        const submitBtn = $('#submitButton')

        checkBox.click()
        browser.pause(3000)
        submitBtn.waitForEnabled(4000)

        assert.equal(true,submitBtn.isEnabled())

    })

    it('should wait for button  to be disabled', function(){

        browser.url("https://classic.crmpro.com/register/")

        const checkBox = $(`//input[@name='agreeTerms']`) //`` symbol for xpath - agreeTerms needs to be with in single codes, so`` needs to be used
        const submitBtn = $('#submitButton')
        checkBox.waitForDisplayed();
        checkBox.click()
        submitBtn.waitForEnabled(4000)
        assert.equal(true, submitBtn.isEnabled())

        checkBox.click()

        browser.pause(3000)

        submitBtn.waitForEnabled(4000,true) //reverse 

        console.log('button status',submitBtn.waitForEnabled())
      /*  submitBtn.waitForEnabled(4000, true) //wait for disable - not working */

        assert.equal(false, submitBtn.isEnabled())

    })







})