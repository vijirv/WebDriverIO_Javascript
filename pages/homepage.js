class HomePage{

    //$ - find element
    //"" - use double quotes for xpath

    get pageHeader() { return $('h1') }

    get subHeader() { return $('div.banner-text-content > p.sub-text') }

    get customerLink() {return $("//a[text()='Customers']") }

}

module.exports = new HomePage();