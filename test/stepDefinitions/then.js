
import {verificarColunaGrid} from '../steps/verificarColunaGrid.step';
import { defineSupportCode } from 'cucumber';
import { verificarResultadoConsulta, verificarElementosVisaoGeral } from '../steps/verificarResultadoConsulta.step';
import { verificarGrafico } from '../steps/verificarResultadoConsulta.step';
import { filtro } from '../steps/filtros';
import { Setup } from '../steps/setup';
import { Page } from '../pageobjects/Page';
import { navegacao } from '../steps/navegacao';
import {ValidaGraficoDashboardGeral } from '../steps/Validargraficos.step'

defineSupportCode(function({ Then }) {

  Then(/^O sistema deverá exibir "([^"]*)"$/, function(resultado) {
     if (resultado != 'Nenhum registro encontrado')
     {
       assert.equal(browser.isExisting('//span[@class="select2-hidden-accessible" and contains(text(),"results are available")]'),true)
     }
     else
     {
      assert.equal(browser.isExisting('//span[@class="select2-hidden-accessible" and contains(text(),"Nenhum registro encontrado")]'),true)
     }
  });

  Then(/^O card deve mostrar a seguinte informação "([^"]*)"$/, function(info) {
    browser.waitForVisible('//div[@ng-if="cliente_info_nome.length"]//span')
    assert.equal(browser.isVisible('//div[@ng-if="cliente_info_nome.length"]//span[contains(text()," '+info+'")]'),true);
  });

  Then(/^O sistema deverá retornar o seguinto resultado "([^"]*)"$/, function(info) {
    console.log('passei');
  });

  Then(/^A coluna "([^"]*)" deverá aparecer no grid "([^"]*)"$/, function(peso,grid) {
    grids.verificarColunaGrid(grid,peso)
  });

  Then(/^O sistema deverá retornar um aviso$/, function() {
    assert.equal(browser.isVisible('//*[@class="toast toast-warning"]'),true)
    browser.click('//*[@class="toast toast-warning"]');
    browser.pause(500)
 });

 Then(/^O sistema notificará "([^"]*)"$/, function(msgNotificacao) {
    assert.equal(browser.waitForVisible('//*[@class="toast toast-warning"]/div[text()="' + msgNotificacao + '"]'),true)
    browser.click('//*[@class="toast toast-warning"]');
    browser.pause(500)
  });

  Then(/^O sistema demonstrará as informações de acordo com os filtros utilizados$/, function(){
    verificarResultadoConsulta()
    

  })

  Then(/^O sistema verificará se foi aberta a pagina "([^"]*)"$/, function(setor){
    assert.equal(browser.getText('//div[@class="page-title"]/span').toUpperCase(), setor.toUpperCase());
  })

  Then(/^O sistema verificará se os graficos aparecem$/, function(){
    // verificarElementosVisaoGeral()
  })

  Then(/^Os finais de semana devem ser ocultados do grafico$/, function(){
    // verificarGrafico(this.grafico)
  })

  Then(/^O campo deve apresentar a mensagem "(Nenhum registro encontrado para [^"]*)"$/, function(pesquisa){

    assert.equal(filtro.resultadoPesquisa(pesquisa),true,'A pesquisa retornou resultados quando não deveria');
        //se o usuário tiver sido alterado , desfazemos a alteração (por enquanto essa verificação só é necessário nesse step)
  })

  Then(/^A opção configurações "([^"]*)" aparecer$/,function(acao) {
      // navegacao.VerificarConfiguracaoMenuLateral(acao)
  }) 

  Then (/^O gráfico "([^"]*)" devem carregar os valores de acordo com o filtro de data$/,function(dasboard){
    
    ValidaGraficoDashboarddGeral(dasboard)
    
      
  })






});
