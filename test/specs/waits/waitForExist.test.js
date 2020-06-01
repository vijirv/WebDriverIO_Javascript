describe('wait for delete button', () =>{

    it('should wait for delete button', () =>{

        browser.url('https://the-internet.herokuapp.com/add_remove_elements/')

        const addElement = $(`//button[text()='Add Element']`) // `` xpath

        const deleteBtn = $(`//button[text() ='Delete']`)

        addElement.waitForDisplayed()
        addElement.click()

        deleteBtn.waitForExist(4000)
        assert.equal(true,deleteBtn.isExisting())

        deleteBtn.click()
        assert.equal(false,deleteBtn.isExisting())
        browser.pause(4000)



    })


    it('should wait for delete button', () =>{

        browser.url('https://app.hubspot.com/login')

        const email = $('#username') 
        const password = $('#password')
        const loginBtn =$('#loginBtn')


        //login process
        email.waitForDisplayed()
        email.setValue('viji2903@gmail.com')
        password.setValue('26Ind1942')
        loginBtn.click()

        //contacts page

        $('#nav-primary-contacts-branch').waitForDisplayed()
        $('#nav-primary-contacts-branch').click()

        $('#nav-secondary-contacts').waitForDisplayed()
        $('#nav-secondary-contacts').click()

        const previewBtn =$(`//span[text()='VijiTest RamTest']//ancestor::a//following-sibling::span/button`)
        previewBtn.moveTo()
        previewBtn.waitForExist(3000)
        previewBtn.waitForDisplayed()
        previewBtn.click()

        browser.pause(4000)

    })




})