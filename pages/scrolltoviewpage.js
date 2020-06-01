class ScrollToViewPage{


    get forgotPasswordLink(){
        return $('=Forgot Password?'); //= link text *= partial link text
    }

    moveToElement(element){
        element.moveTo();
    }


}

module.exports = new ScrollToViewPage();
