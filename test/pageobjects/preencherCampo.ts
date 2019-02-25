var Page = require('./Page')

var PreencherCampo = Object.create(Page,{

    
    preencher: { value: function(campo,valor){
    	campo.addValue(valor)
    	this.waitReloadOpcoes();

		browser.waitForVisible('//ul[@class="select2-results"]//span[@title="900000 - null"]');
		opcao = browser.element('div>ul>li>div>SPAN[contains(@title,"'+valor+'")]:first-child');

		opcao.click();

    }},

    //Após inserir valores no input devemos esperar esta função passar para garantir que as informações do DropdDown estão atualizadas
    waitReloadOpcoes: { value: function(){
    	if(browser.isExisting('//*[@class="select2-input select2-focused select2-active"]')==true)
		{browser.waitForExist('//*[@class="select2-input select2-focused select2-active"]',2000,true);}
    }}    

    




});
module.exports = PreencherCampo;