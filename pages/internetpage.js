class InternetPage{

    get h3Header(){
        return $('h3');
    }

    // we need to use ` special character since we are passing index(parameter) to findElements $
    getLinkElement(index){
        return $(`ul>li:nth-child(${index}) a`);
    }

    clickOnLink(index){
        this.getLinkElement(index).waitForDisplayed();
        this.getLinkElement(index).click();
    }

    getCheckBoxElement(index){
        return $(`form#checkboxes>input:nth-child(${index})`);
    }

    clickOnCheckBox(index){
        this.getCheckBoxElement(index).waitForDisplayed();
        this.getCheckBoxElement(index).click();
    }
    

}

module.exports = new InternetPage();