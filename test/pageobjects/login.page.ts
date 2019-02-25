import { Page, WebElement } from './Page';


export class Passaporte extends Page {
    title: string = 'Passarporte';

    get loadingModal(): WebElement { 
        return browser.element('//*[contains(@class,"modal")]') 
    };

    get username(): WebElement { 
        return browser.element('//input[@id="email-login"]') 
    };
    get password(): WebElement { 
        return browser.element('//input[@type="password"]') 
    };
    get btnEntrar(): WebElement { 
        return browser.element('//button[@id="login-passaporte"]') 
    };

    get subTitle(): WebElement { 
        return browser.element('//p[@class="mensagem-produto-redirecionamento visible-sm visible-md visible-lg"]/span[@class="ng-scope"]') 
    };

    waitForPageLoad(){ 
        return  browser.waitForExist('//div[@id="modal-passaporte-loading" and @class="modal fade"]',30000)

    };


}
/*
var LoginPage = Object.create(Page, {

    username: { get: function ()    { return browser.element('#email-login');} },
    password: { get: function ()    { return browser.element('//input[@type="password"]'); }},
    btnEntrar:     { get: function ()    { return browser.element('#login-passaporte'); }},
    loadingModal:    { get: function ()    { return browser.element('//*[@class="modal-title text-center"]'); }},

    open: { value: function() {
        Page.open.call(this, settingsjson.url);
    } },

    terminarLoad: { value: function() {
       this.loadingModal.waitForVisible()
       this.loadingModal.waitForVisible(20000,true)
       
    } }



});
module.exports = LoginPage;
*/
