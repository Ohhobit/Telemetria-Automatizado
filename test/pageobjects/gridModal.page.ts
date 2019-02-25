
import {Page,WebElement} from './Page';
import { Grid } from './grid.page';

export class GridModal extends Grid  {
  
    public gridSelector: string
    constructor(title:string){
        super(title)
        this.gridSelector = '//div[@id="grid1" and ../..//h3[text()="' + title + '"]]'

    }
    get btnClose(): WebElement {return browser.$('//div[@class="modal-header ng-scope"]/button[@aria-label="Close"]')}
    get btnModalMenu(): WebElement {return browser.element('//div[@class="modal-body ng-scope"]//div[@ng-click="toggleMenu()"]')}
}


