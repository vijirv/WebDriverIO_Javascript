const alertPage = require('../../../pages/alertpage')

describe("handle alert popup", () => {

    it('accept alert', () =>{

        browser.url("https://the-internet.herokuapp.com/javascript_alerts")
        alertPage.clickOnAlertButton(1)
        const alertText = browser.getAlertText()
        console.log('Alert text is ', alertText)
        assert.equal('I am a JS Alert', alertText) //assert.equal() , expect - equals()
        browser.acceptAlert()
        console.log(alertPage.getResultText)
        assert.equal('You successfuly clicked an alert',alertPage.getResultText())
        browser.pause(3000)

    })

    it('dismiss alert', () =>{

        browser.url("https://the-internet.herokuapp.com/javascript_alerts")
        alertPage.clickOnAlertButton(2)
        browser.dismissAlert()
        console.log(alertPage.getResultText)
        assert.equal('You clicked: Cancel',alertPage.getResultText())
        browser.pause(3000)

    })

    it('enter text on alert and accept alert', () =>{

        browser.url("https://the-internet.herokuapp.com/javascript_alerts")
        alertPage.clickOnAlertButton(3)
        browser.sendAlertText('Viji')
        browser.acceptAlert()
        console.log(alertPage.getResultText)
        assert.equal('You entered: Viji',alertPage.getResultText())
        browser.pause(3000)

    })

    it('rediffmail accept alert', () =>{

        browser.url("https://mail.rediff.com/cgi-bin/login.cgi")
        $(`//input[@type='submit']`).waitForDisplayed();
        $(`//input[@type='submit']`).click();
        const alerttext = browser.getAlertText()
        console.log(alerttext)
        assert.equal('Please enter a valid user name',alerttext)
        browser.acceptAlert()
        browser.pause(3000)

    })

})