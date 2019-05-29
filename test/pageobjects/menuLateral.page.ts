
import {Page,WebElement} from './Page';

export class MenuLateral extends Page  {
  /**
  * define elements
  */    

  get logo():WebElement { return browser.element('//*[@class="fa fa-share-alt"]')};

  get visaoGeral():WebElement    { return browser.element('//a/span[text()="Visão Geral"]')} 

  get dashboards():WebElement   { return browser.element('//a/span[text()="Dashboards"]'); }

  get configuracoes():WebElement { return browser.element(('//a[@href="#/configuration"]//span[@class="title" and text()="Configurações"]')); }

  btnProduto(produtoNome:string):WebElement {return browser.element('//div[@id="dropdown-apps"]//a[text()="'+produtoNome+'"]')}



  get btnFechar():WebElement { return browser.element('//i[@class="fa fa-clock-o"]'); }
  /**
   * define or overwrite page methods
   */
    opens() {
        this.logo.scroll()
        this.logo.click();     //provide your additional URL if any. this will append to the baseUrl to form complete URL
        browser.pause(500);
    }


}

