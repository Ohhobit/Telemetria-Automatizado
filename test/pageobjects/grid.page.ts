
import {Page,WebElement} from './Page';
import {MenuLateral} from './menuLateral.page'

export class Grid extends Page  {
  
    public gridSelector: string
    constructor(id:string){
        super()

        this.gridSelector = '//div[@id="' + id + '"]'

    }
    get btnGridMenu():WebElement {return browser.element(this.gridSelector + '//div[@ng-click="toggleMenu()"]');}
    btnMenuOption(optionName):WebElement {return browser.element(this.gridSelector + '//ul//li/button[@class="ui-grid-menu-item ng-binding" and text()=" '+optionName+'"]');}
    gridColuna(colunName):WebElement {return browser.element(this.gridSelector + '//div[@role="columnheader" and div/span[text()="'+colunName+'"]]');}
   

    

    
}

