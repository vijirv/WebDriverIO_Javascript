class AlertPage{

    get result(){
        return $('#result')
    }

    getResultText(){
        return this.result.getText()
    }


    //`` parameter index passed so we need to use`` symbol
    getAlertButton(index){
        return $(`ul>li:nth-child(${index})>button`)
    }

    clickOnAlertButton(index){
        this.getAlertButton(index).waitForDisplayed()
        this.getAlertButton(index).click();

    }




}
module.exports = new AlertPage();
