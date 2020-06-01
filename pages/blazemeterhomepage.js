class BlazePage{
    

    //in getter method we cant pass parameters 

    //$ rturns single element


    get mainHeader(){
        return $('h2.home_title');
    }

    get requestDemoLink(){

        return $('a.home_request_demo_link');
    }

    get productLink(){

        return $("ul.list-nav-links > li:nth-child(1) a");

    }

    clickOnProductLink(){
       
       if(this.productLink.isDisplayed()){

            this.productLink.click();
       }

    }


    get parent() { 
        
        return $('ul.list-nav-links');
     }


    // $$ returns multiple elements

    get childElemets() {

        return this.parent.$$('li');
    }

    //then get text of elements - filter is like for loop

    get getTextForLI() {

        return this.childElemets.filter(element => {
            console.log(element.getText());
        })
    }

    // directly access list of elements instead of creating parent and child (above method)

    get useCasesElements(){

        return $$('div#main_b_footer_second_block>ul>li')
    }

    get useCasesElementsText(){
        return this.useCasesElements.filter(element =>{
            console.log(element.getText());
        })

    }

    //special character ` need to be used to pass parameter
    specificChildElement(index){

        return this.parent.$(`li:nth-child(${index})`)

    }

    getSpecificChildElementText(index){

        // use return or console.log

       //  return this.specificChildElement(index).getText();

        console.log('The Child element is :' ,this.specificChildElement(index).getText());

    }

}

module.exports = new BlazePage();