import { DashBoard } from "../pageobjects/dashboard.page";
import { VisaoGeral } from "../pageobjects/visaogeral.page"
import { Geral } from "../pageobjects/dashboardGeral.page"
import { Produto } from "../pageobjects/dashboardProduto.page";
import { Cliente } from "../pageobjects/dashboardCliente.page";
import { Funcionalidade } from '../pageobjects/dashboardFuncionalidade.page';
import { Grafico } from "../pageobjects/grafico.page";
import { fail } from "assert";
import { navegacao } from "./navegacao";
import { Canvas } from "../pageobjects/canvas.page";

/**
 * Clear a given input field (placeholder for WDIO's clearElement)
 * @param  {String}   element Element selector
 */

const assert = require('assert');

function assertDiff(results) {
  results.forEach((result) => assert.ok(result.isExactSameImage));
}


export function verificarElementosVisaoGeral(){
  let visaoGeral: VisaoGeral = new VisaoGeral()
  
  if (browser.getText('//div[@class="page-title"]/span') !==  'Visão Geral'){
    navegacao.IrParaVisaoGeral();
  }
  if(visaoGeral.checkForMsgs()){
    fail('Ocorreu um erro ou aviso ao gerar os gráficos')}
  
  // Grafico Percentual de Uso no Ultimos 30 Dias  
  visaoGeral.waitSearch()
  visaoGeral.grafPercentualDeUso.conteudo.waitForVisible()
  assert.equal(true, visaoGeral.grafPercentualDeUso.conteudo.isVisible())
  // Grafico Top 10 Produtos nos Últimos 30 Dias
  visaoGeral.waitSearch()
  visaoGeral.grafTopProdutos.conteudo.waitForVisible()
  assert.equal(true, visaoGeral.grafTopProdutos.conteudo.isVisible())
   
}


    

export function verificarResultadoConsulta() {
   // Printando todos os graficos e grids inicialmente na tela
  let viewport:any
  let dashboard: DashBoard = new DashBoard()
  let result:boolean
  let DashboardName = dashboard.currentDashboard.getText().toLowerCase()
  const width=[1410, 900 ]

  if(dashboard.checkForMsgs()){
    fail('Ocorreu um erro ou aviso ao gerar os gráficos do dashboard '+DashboardName+' ')
  }

  switch (DashboardName) {
    case 'geral':
      // Pegando a imagem da tela resultados inteira
      let geral: Geral = new Geral();
      
      // Printando todos os graficos e grids que precisam de algo mais para fica visivel

      // Top 10 produtos
      geral.waitSearch();
      geral.grafTopProd.conteudo.waitForVisible()
      // assert.equal(true,geral.grafTopProd.conteudo.isVisible())
      //@ts-ignore
      assertDiff(browser.checkElement(geral.selectorGrafTop10roduto, {width}))

       // Grid todos os produtos
      geral.btnTodosProdutos.waitForEnabled()
      // browser.pause(50000)
      geral.btnTodosProdutos.click()
      if(dashboard.checkForMsgs()){
        fail('Ocorreu um erro ou aviso ao fazer a consulta')
      }
      geral.waitSearch()
      geral.gridProduto.btnGridMenu.waitForVisible()
     //@ts-ignore
      assertDiff(browser.checkElement(geral.selectorGrafTop10produtoGridTodosProdutos, {width}))

       // Como tenho que fechar o modal primeiramente , guardo o resultado e depois faço o assert
      geral.gridProduto.btnClose.click()
      if(dashboard.checkForMsgs()){
         fail('Ocorreu um erro ou aviso ao carregar o modal Produtos no dashboard geral')
       }

      
     
      // Grafico top 10 cliente : total 
      geral.waitSearch()
      geral.grafTotal.conteudo.waitForVisible();
      // assert.equal(true, geral.grafTotal.conteudo.isVisible())
      //@ts-ignore
      assertDiff(browser.checkElement(geral.selecttorGraftop10clienteTotal,{width} ))

      // Grafico media
      geral.btnMedia.click()
      if(dashboard.checkForMsgs()){
        fail('Ocorreu um erro ou aviso ao fazer a consulta')
      }
      geral.waitSearch()
      geral.grafMedia.conteudo.waitForVisible()
      //@ts-ignore
      assertDiff(browser.checkElement(geral.selecttorGraftop10clientemedia,{width} ))
      
      // Grafico sem recorrencia
      geral.btnSemRecorrencia.click()
      if(dashboard.checkForMsgs()){
        fail('Erro ao abrir o gráfico sem recorrência')
      }
      geral.waitSearch()
      geral.grafSemRecorrencia.conteudo.waitForVisible()
      //@ts-ignore
      assertDiff(browser.checkElement(geral.selecttorGraftop10clienteSemrecorrencia ,{width} ))
      
      // Grafico top funcionalidadesyor name
      geral.waitSearch()
      geral.grafTopFunc.conteudo.waitForVisible()
      //@ts-ignore
      assertDiff(browser.checkElement(geral.selectorGraftop10funcionalidades,{width}))
     

      // Grafico uso diario
      geral.waitSearch()
      geral.grafUsoFunc.conteudo.waitForVisible()
      //@ts-ignorets-ignore
      assertDiff(browser.checkElement(geral.selectorTop10funcionalidadeProduto,{width}))
      // assert.equal(true, geral.grafUsoFunc.conteudo.isVisible())
      break;
    
    case 'produto':
      let produto:Produto = new Produto();
      //Pegando a imagem da tela resultados inteira
     
      // Printando todos os graficos e grids que precisam de algo mais para fica visivel
     
      // Grafico uso diario
      produto.waitSearch()
      if(dashboard.checkForMsgs()){
        fail('Ocorreu um erro ou aviso ao carregar os gráficos do  dashboard Produto')
      }
      produto.waitSearch()
      produto.conteudo(produto.selectorUsoDiarioDasFuncionalidadesPorProduto).waitForVisible()
      //@ts-ignore
      assertDiff(browser.checkElement(produto.selectorUsoDiarioDasFuncionalidadesPorProduto,{width}))
      
     
      // Grid uso das funcionalidades
      produto.waitSearch()
      
      // produto.conteudo(produto.selectorDetalhamentoDeUsoDasFuncionalidadesPeloCaminho).waitForVisible()
      
        
      //@ts-ignore
      assertDiff(browser.checkElement(produto.selectorDetalhamentoDeUsoDasFuncionalidadesPeloCaminho,{width}))
      

      // Grid Cliente
      produto.btnClientes.click();
      if(dashboard.checkForMsgs()){
        fail('Ocorreu um erro ou aviso ao carregar o modal Clientes no dashboard Produto')
      }
      produto.waitSearch()
      produto.gridClientes.btnGridMenu.waitForVisible();
      //@ts-ignore
      assertDiff(browser.checkElement(produto.selectorGridClientes ,{width}))
      break;

    case 'funcionalidade':
      let funcionalidade: Funcionalidade = new Funcionalidade();
      
      // Grafico uso diario da funcionalidade pelo caminho
      funcionalidade.waitSearch()
      funcionalidade.grafUsoDiario.conteudo.waitForVisible()
      //@ts-ignore
      assertDiff(browser.checkElement(funcionalidade.selectorGrafUsoDiario,{width}))
      
      // Grafico Total de clientes
      funcionalidade.waitSearch()
      funcionalidade.grafTotalClientes.conteudo.waitForVisible()
      //@ts-ignore
      assertDiff(browser.checkElement(funcionalidade.selectorTotaldeclientespelocaminho,{width})) 
      
      
      // Grid clientes com uso
      funcionalidade.waitSearch()
      funcionalidade.gridClientesComUso.btnGridMenu.waitForVisible()
      //@ts-ignore
      assertDiff(browser.checkElement(funcionalidade.selectordetalhamentodosclientescomuso,{width}))

      // Grid clientes nunca utilizaram
      funcionalidade.waitSearch()
      funcionalidade.gridClientesNuncaUtilizaram.btnGridMenu.waitForVisible()
      //@ts-ignore
      assertDiff(browser.checkElement(funcionalidade.selectorclientesquenaoutilizaram,{width}))


      // Grid clientes deixaram
      console.log(dashboard.cliente.isVisible())
      if(dashboard.cliente.isVisible()==true || dashboard.cnaeCliente.isVisible()==true ){
         break;
       
      };

      funcionalidade.waitSearch()
      funcionalidade.gridClientesDeixaram.btnGridMenu.waitForVisible()
      //@ts-ignore
      assertDiff(browser.checkElement(funcionalidade.selectorclientesquedeixaramdeutilizarafuncionalidade,{width}))
      console.log('pulei o if')
      
     
      //  Grid Modal mais clientes      
      funcionalidade.btnMaisFuncionalidades.click()
      if(dashboard.checkForMsgs()){
        fail('Ocorreu um erro ou aviso ao carregar o modal Mais funcionalidades não usadas no dashboard Funcionalidade')
      }
      funcionalidade.waitSearch()
      funcionalidade.gridMaisClientes.btnModalMenu.waitForVisible();
      //@ts-ignore
      assertDiff(browser.checkElement(funcionalidade.selectorfuncionalidadesquedeixaramdeserutilizadapeloclientemodal,{width}))
      break;

    case 'cliente':
      let cliente: Cliente = new Cliente()
       //Informações do cliente
       cliente.waitSearch();
       cliente.conteudo(cliente.selectorInformacoescliente).waitForVisible();
       assert.equal(cliente.conteudo(cliente.selectorInformacoescliente).isVisible(),true)
       //@ts-ignore
      //  assertDiff(browser.checkElement(cliente.selectorInformacoescliente,width))
        
            
      //  Uso Diario das Funcionalidades por Produto
      cliente.waitSearch()
      cliente.grafUsoDiarioFunc.conteudo.waitForVisible()
      //@ts-ignore
      assertDiff(browser.checkElement(cliente.selectorgrafUsoDiarioFunc,width))

      
      //  Utilizacao dos Produtos por Usuario
      cliente.waitSearch()
      cliente.grafUtilizacaoDosProdutos.conteudo.waitForVisible()
      //@ts-ignore
      assertDiff(browser.checkElement(cliente.selectorgrafUtilizacaoDosProdutos,width ));

      
      // Top 10 Produtos - Maior Percentual de Uso
      cliente.waitSearch()
      cliente.grafTopProdutos.conteudo.waitForVisible()
      //@ts-ignore
      assertDiff(browser.checkElement(cliente.selectortop10produtosmaiorpercentual,width));

      // Detalhamento de Uso dos Produtos
      cliente.waitSearch()
      cliente.gridDetalheUsoDosProdutos.btnGridMenu.waitForVisible()
      //@ts-ignore
      assertDiff(browser.checkElement(cliente.selectordetalhamentodeusodosprodutos,width));

      // Top 10 Usuários - Maior Percentual de Uso
      cliente.waitSearch()
      cliente.grafTopUsuarios.conteudo.waitForVisible()
      //@ts-ignore
      assertDiff(browser.checkElement(cliente.selectortop10usuariosmaiorpercentual,width));

      // Grid Detalhamento de Uso dos Usuários
      cliente.waitSearch()
      cliente.gridDetalheUdoDosUsuarios.btnGridMenu.waitForVisible();
      //@ts-ignore
      assertDiff(browser.checkElement(cliente.selectordetalhamentodeusodosusuarios,width));
          
      // Grid Modal Detalhes da Usabilidade do Funcionário
      cliente.btnDetalhesFuncionario.click();
      if(dashboard.checkForMsgs()){
          fail('Ocorreu um erro ou aviso ao carregar o modal Detalhes da Usabilidade do Funcionário no dashboard Cliente')
       };
       cliente.waitSearch()
       cliente.gridDetalhesUsabilidadeFuncionario.btnexpandir.waitForVisible()
       cliente.gridDetalhesUsabilidadeFuncionario.btnexpandir.click();
       
       //@ts-ignore
       assertDiff(browser.checkElement(cliente.selectordetalhesdausabilidadedofuncionario,width))
       cliente.gridDetalhesUsabilidadeFuncionario.btnClose.waitForVisible()
       cliente.gridDetalhesUsabilidadeFuncionario.btnClose.click()
      

      // Grafico Top Funcionalidades por Uso
      cliente.waitSearch()
      cliente.grafTopFuncPorUso.conteudo.waitForVisible()
      //@ts-ignorenpm test
      assertDiff(browser.checkElement(cliente.selectortopfuncionalidadesporuso,width));

      // Grid Modal Acesso dos Funcionários ao Caminho
      cliente.canvasAcessoAosFuncionarios.ClicarNaCor('azul')
        if(dashboard.checkForMsgs()){
         fail('Ocorreu um erro ou aviso ao carregar o modal Funcionalidades por Uso no dashboard Cliente')
       }
      cliente.waitSearch()
      //@ts-ignore
      assertDiff(browser.checkElement(cliente.selectoracessodosfuncionariosafuncionalidade));
      cliente.gridAcessodosFuncionariosafuncionalidade.btnClose.click();
      
    
      // Grafico Top Funcionalidades por Permanência
      cliente.waitSearch()
      cliente.grafTpoFuncPorPermanencia.conteudo.waitForVisible()
      //@ts-ignore
      assertDiff(browser.checkElement(cliente.selectortopfuncionalidadeporpermanecia,width))

      // Grid Detalhamento de Uso das Funcionalidades pelo Caminho
      cliente.waitSearch()
      cliente.gridDetalheUsoDasFunc.btnGridMenu.waitForVisible()
      //@ts-ignore
      assertDiff(browser.checkElement(cliente.selectordetalhamentodeusodasfuncionalidadespelocaminho,width))

      // Grid Funcionalidades não Utilizadas
      cliente.waitSearch()
      cliente.gridFuncNuncaUtilizadas.btnGridMenu.waitForVisible()
      //@ts-ignore
      assertDiff(browser.checkElement(cliente.selectorfuncionalidadenaoutilizada,width))

      // Grid Funcionalidades que deixaram de ser utilizadas
      cliente.waitSearch()

      if ( cliente.conteudo(cliente.selectorfiltrocaminhosendoutilizado).isVisible()==false ){
        cliente.gridFuncionalidadesNaoMaisUtilizadas.btnGridMenu.waitForVisible()
        //@ts-ignore
        assertDiff(browser.checkElement(cliente.selectorfuncionalidadequedeixaramdeserutilizada,width))
                              
      } 
      break;
      default:
      console.log('Este dashboard ainda não tem configuração pronto para este step')
      browser.debug()
  }
}
