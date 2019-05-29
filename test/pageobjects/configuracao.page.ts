import {Page,WebElement} from './Page';



export class Configuracaopage {
  
  get abrirsetor():WebElement{

     return browser.element('//*[@id="s2id_nome_setor_single_uis2_filterSelect2"]/a/span[2]/b');
  };
  get abrirproduto():WebElement{
    
    return browser.element('//*[@id="s2id_nome_produto_config_single_uis2_filterSelect2"]/a/span[2]/b');
  };

  get inputsetor():WebElement{
    
     return browser.element('//div[@id="select2-drop"]//input');

  };
  get inputproduto():WebElement{
    
    return browser.element('//div[@id="select2-drop"]//input');

  };
   
  get btnconsultar():WebElement{
  
    return browser.element('//button[@class="btn btn-size ng-scope btn-primary btn-block"]');
  
  };

  get gridfuncionalidade():WebElement{
    
    return browser.element('//div[@id="funcionalidade-clientes-nunca-utilizaram-grid"]')

  };
  
  waitsearch(setor:string):WebElement{
    setor=setor.toUpperCase()
    return browser.element('//div[@class="select2-result-label"]//span[text()="'+setor+'"]')

  };

  get gridFuncionalidade():WebElement{
     
     return browser.element('//div[@id="funcionalidade-clientes-nunca-utilizaram-grid"]');
  
  }

}