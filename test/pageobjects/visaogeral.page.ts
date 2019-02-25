import {Page,WebElement} from './Page';
import {MenuLateral} from './menuLateral.page'
import { Grid } from './grid.page';
import { Grafico } from './grafico.page';
import { GridModal } from './gridModal.page';
import { fail } from 'assert';

export class VisaoGeral extends Page  { 

    public grafTopProdutos: Grafico
    public grafPercentualDeUso: Grafico
  
    constructor(){
        super()
        this.grafTopProdutos = new Grafico('Top 10 Produtos nos Últimos 30 Dias')
        this.grafPercentualDeUso = new Grafico('Percentual de Uso nos Últimos 30 Dias')     
    }

    get btnPack():WebElement   { return browser.element('//div[@ng-bind="app.name" and text()="Pack"]'); }
    get btnShop():WebElement  { return browser.element('//div[@ng-bind="app.name" and text()="Shop"]'); }
    get btnImmobile():WebElement  { return browser.element('//div[@ng-bind="app.name" and text()="Immobile"]'); }
    get btnBimer():WebElement  { return browser.element('//div[@ng-bind="app.name" and text()="Bimer"]'); }
    get btnCirrus():WebElement  { return browser.element('//div[@ng-bind="app.name" and text()="Cirrus"]'); }

    get avisoMsg(): WebElement { return browser.$('//div[@class="toast toast-warning"]') }
    get erroMsg(): WebElement { return browser.$('//div[@class="toast toast-error"]') }

    waitSearch() {
        if (browser.isExisting('//*[@class="select2-input select2-focused select2-active"]') == true) {
            browser.waitForExist('//*[@class="select2-input select2-focused select2-active"]', 10000, true)
        }
        else {
            try {
                browser.waitForExist('//*[@class="loader-container text-center ng-scope"]', 1500)
                browser.waitForExist('//*[@class="loader-container text-center ng-scope"]', 60000, true)
            }
            catch (err) {
                try {                 
                    browser.waitForExist('//*[@class="loader-container text-center ng-scope"]', 60000, true)
                }
                catch (err) {
                    fail('O(s) gráfico(s) não carregaram dentro do tempo')
                }
            }
        }
    }

    checkForMsgs(): boolean {
        return this.avisoMsg.isVisible() || this.erroMsg.isVisible()
    }

    open() {
        browser.url('http://172.16.72.18:8000/#/app')
        this.waitForPageLoad();
    }
    waitForPageLoad(){
        this.btnPack.waitForVisible();
    }

}

