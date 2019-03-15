import { DashBoard } from "../pageobjects/dashboard.page";
import { VisaoGeral } from "../pageobjects/visaogeral.page"
import { Geral } from "../pageobjects/dashboardGeral.page"
import { Produto } from "../pageobjects/dashboardProduto.page";
import { Cliente } from "../pageobjects/dashboardCliente.page";
import { Funcionalidade } from "../pageobjects/dashboardFuncionalidade.page";
import { Grafico } from "../pageobjects/grafico.page";
import { fail } from "assert";
import { navegacao } from "./navegacao";
import { Canvas } from "../pageobjects/canvas.page";

/**
 * Clear a given input field (placeholder for WDIO's clearElement)
 * @param  {String}   element Element selector
 */

var assert = require('assert');

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
  const width=[1410, 900 ]
  let DashboardName = dashboard.currentDashboard.getText().toLowerCase()

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
      
      // Grafico top funcionalidades
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
      let produto:Produto = new Produto()
      //Pegando a imagem da tela resultados inteira
     
      // Printando todos os graficos e grids que precisam de algo mais para fica visivel
     
      // Grafico uso diario
      produto.waitSearch()
      produto.grafUsoDiario.conteudo.waitForVisible()
      assert.equal(true, produto.grafUsoDiario.conteudo.isVisible())
     
      // Grid uso das funcionalidades
      produto.waitSearch()
      produto.gridUsoDasFuncs.btnGridMenu.waitForVisible()
      assert.equal(true,produto.gridUsoDasFuncs.btnGridMenu.isVisible())

      // Grid Cliente
      produto.btnClientes.click();
      if(dashboard.checkForMsgs()){
        fail('Ocorreu um erro ou aviso ao carregar o modal Clientes no dashboard Produto')
      }
      produto.waitSearch()
      produto.gridClientes.btnGridMenu.waitForVisible();
      result = produto.gridClientes.btnGridMenu.isVisible()
      produto.gridClientes.btnClose.click()
      if(dashboard.checkForMsgs()){
        fail('Ocorreu um erro ou aviso ao carregar o modal Produtos no dashboard geral')
      }
      produto.gridClientes.btnClose.waitForVisible(5000,true)
      assert.equal(result,true,'O modal Clientes no dashboard Produto apresentou diferença')
      break;

    case 'funcionalidade':
      let funcionalidade: Funcionalidade = new Funcionalidade();
      
      // Grafico uso diario
      funcionalidade.waitSearch()
      funcionalidade.grafUsoDiario.conteudo.waitForVisible()
      assert.equal(true, funcionalidade.grafUsoDiario.conteudo.isVisible())    
      
      // Grafico Total de clientes
      funcionalidade.waitSearch()
      funcionalidade.grafTotalClientes.conteudo.waitForVisible()
      assert.equal(true, funcionalidade.grafTotalClientes.conteudo.isVisible())
      
      // Grid clientes com uso
      funcionalidade.waitSearch()
      funcionalidade.gridClientesComUso.btnGridMenu.waitForVisible()
      assert.equal(true, funcionalidade.gridClientesComUso.btnGridMenu.isVisible())

      // Grid clientes nunca utilizaram
      funcionalidade.waitSearch()
      funcionalidade.gridClientesNuncaUtilizaram.btnGridMenu.waitForVisible()
      assert.equal(true, funcionalidade.gridClientesNuncaUtilizaram.btnGridMenu.isVisible())

      // Grid clientes deixaram
      funcionalidade.waitSearch()
      funcionalidade.gridClientesDeixaram.btnGridMenu.waitForVisible()
      assert.equal(true, funcionalidade.gridClientesDeixaram.btnGridMenu.isVisible())

      // Grid Modal mais clientes      
      funcionalidade.btnMaisFuncionalidades.click()
      if(dashboard.checkForMsgs()){
        fail('Ocorreu um erro ou aviso ao carregar o modal Mais funcionalidades não usadas no dashboard Funcionalidade')
      }
      funcionalidade.waitSearch()
      funcionalidade.gridMaisClientes.btnModalMenu.waitForVisible(); 
      result = funcionalidade.gridMaisClientes.btnModalMenu.isVisible()    
      funcionalidade.gridMaisClientes.btnClose.click()
      if(dashboard.checkForMsgs()){
        fail('Ocorreu um erro ou aviso ao carregar o modal Mais funcionalidades não usadas no dashboard Funcionalidade')
      }
      funcionalidade.gridMaisClientes.btnClose.waitForVisible(5000,true); 
      assert.equal(result,true,'O modal Mais funcionalidades não usadas no dashboard Funcionalidade apresentou diferença')
      break;

    case 'cliente':
      let cliente: Cliente = new Cliente()
      // Pegando a imagem da tela resultados inteira
      
      // Grafico Uso Diario das Funcionalidades por Produto
      cliente.waitSearch()
      cliente.grafUsoDiarioFunc.conteudo.waitForVisible()
      assert.equal(cliente.grafUsoDiarioFunc.conteudo.isVisible(), true)
      
      // Grafico Utilizacao dos Produtos por Usuario
      cliente.waitSearch()
      cliente.grafUtilizacaoDosProdutos.conteudo.waitForVisible()
      assert.equal(cliente.grafUtilizacaoDosProdutos.conteudo.isVisible(), true)
      
      // Grafico Top 10 Produtos - Maior Percentual de Uso
      cliente.waitSearch()
      cliente.grafTopProdutos.conteudo.waitForVisible()
      assert.equal(cliente.grafTopProdutos.conteudo.isVisible(), true)

      // Grid Detalhamento de Uso dos Produtos
      cliente.waitSearch()
      cliente.gridDetalheUsoDosProdutos.btnGridMenu.waitForVisible()
      assert.equal(cliente.gridDetalheUsoDosProdutos.btnGridMenu.isVisible(), true)

      // Grafico Top 10 Usuários - Maior Percentual de Uso
      cliente.waitSearch()
      cliente.grafTopUsuarios.conteudo.waitForVisible()
      assert.equal(cliente.grafTopUsuarios.conteudo.isVisible(), true)

      // Grid Detalhamento de Uso dos Usuários
      cliente.waitSearch()
      cliente.gridDetalheUdoDosUsuarios.btnGridMenu.waitForVisible()
      assert.equal(cliente.gridDetalheUdoDosUsuarios.btnGridMenu.isVisible(), true)

      // Grid Modal Detalhes da Usabilidade do Funcionário
      cliente.btnDetalhesFuncionario.click();
      if(dashboard.checkForMsgs()){
        fail('Ocorreu um erro ou aviso ao carregar o modal Detalhes da Usabilidade do Funcionário no dashboard Cliente')
      }
      cliente.waitSearch()
      cliente.gridDetalhesUsabilidadeFuncionario.btnClose.waitForVisible()
      result = cliente.gridDetalhesUsabilidadeFuncionario.btnGridMenu.isVisible()
      cliente.gridDetalhesUsabilidadeFuncionario.btnClose.click()
      if(dashboard.checkForMsgs()){
        fail('Ocorreu um erro ou aviso ao carregar o modal Detalhes da Usabilidade do Funcionário no dashboard Cliente')
      }
      cliente.gridDetalhesUsabilidadeFuncionario.btnClose.waitForVisible(5000,true)
      assert.equal(result,true,'O modal Detalhes da Usabilidade do Funcionário no dashboard Cliente apresentou diferença')

      // Grafico Top Funcionalidades por Uso
      cliente.waitSearch()
      cliente.grafTopFuncPorUso.conteudo.waitForVisible()
      assert.equal(cliente.grafTopFuncPorUso.conteudo.isVisible(), true)

      // Grid Modal Acesso dos Funcionários ao Caminho
      cliente.canvasAcessoAosFuncionarios.ClicarNaCor('azul')
      if(dashboard.checkForMsgs()){
        fail('Ocorreu um erro ou aviso ao carregar o modal Funcionalidades por Uso no dashboard Cliente')
      }
      cliente.waitSearch()
      cliente.gridAcessoFuncionarioCaminho.btnClose.waitForVisible()
      result = cliente.gridAcessoFuncionarioCaminho.btnGridMenu.isVisible()
      cliente.gridAcessoFuncionarioCaminho.btnClose.click()
      assert.equal(result, true)

      // Grid Modal Funcionalidades por Uso
      cliente.btnTodasFuncionalidade.click();
      if(dashboard.checkForMsgs()){
        fail('Ocorreu um erro ou aviso ao carregar o modal Funcionalidades por Uso no dashboard Cliente')
      }
      cliente.waitSearch()
      cliente.gridFuncionalidadesUso.btnClose.waitForVisible()
      result = cliente.gridFuncionalidadesUso.btnGridMenu.isVisible()
      assert.equal(true,result)
      
      // Sub Modal Acesso dos Funcionários ao Caminho
      cliente.btnAcessoFuncionario.click()
      if(dashboard.checkForMsgs()){
        fail('Ocorreu um erro ou aviso ao carregar o modal Acesso dos Funcionários ao Caminho no dashboard Cliente')
      }
      cliente.waitSearch()
      cliente.gridAcessoFuncionarioCaminho.btnClose.waitForVisible()
      result = cliente.gridAcessoFuncionarioCaminho.btnGridMenu.isVisible()
      cliente.gridAcessoFuncionarioCaminho.btnClose.click()
      if(dashboard.checkForMsgs()){
        fail('Ocorreu um erro ou aviso ao carregar o modal Acesso dos Funcionários ao Caminho no dashboard Cliente')
      }
      cliente.gridAcessoFuncionarioCaminho.btnClose.waitForVisible(5000,true)
      assert.equal(result,true,'O modal Funcionalidades por Uso e/ou o modal Acesso dos Funcionários  no dashboard Cliente apresentou diferença')

      // Grafico Top Funcionalidades por Permanência
      cliente.waitSearch()
      cliente.grafTpoFuncPorPermanencia.conteudo.waitForVisible()
      assert.equal(cliente.grafTpoFuncPorPermanencia.conteudo.isVisible(), true)

      // Grid Detalhamento de Uso das Funcionalidades pelo Caminho
      cliente.waitSearch()
      cliente.gridDetalheUsoDasFunc.btnGridMenu.waitForVisible()
      assert.equal(cliente.gridDetalheUsoDasFunc.btnGridMenu.isVisible(), true)

      // Grid Funcionalidades Nunca Utilizadas
      cliente.waitSearch()
      cliente.gridFuncNuncaUtilizadas.btnGridMenu.waitForVisible()
      assert.equal(cliente.gridFuncNuncaUtilizadas.btnGridMenu.isVisible(), true)

      // Grid Funcionalidades que deixaram de ser utilizadas
      cliente.waitSearch()
      cliente.gridFuncionalidadesNaoMaisUtilizadas.btnGridMenu.waitForVisible()
      assert.equal(cliente.gridFuncionalidadesNaoMaisUtilizadas.btnGridMenu.isVisible(), true)
      break;
      default:
      console.log('Este dashboard ainda não tem configuração pronto para este step')
      browser.debug()
  }
}

/*
export function verificarGrafico(tituloGrafico:string) {
  let grafico: Grafico = new Grafico(tituloGrafico);
  let viewport = grafico.conteudo
  assert.equal(browser.checkElement(viewport.selector)[0].isExactSameImage,true, 'Houve diferença no gráfico/grid "'+tituloGrafico+'"')
}
export function verificarResultadoConsulta() {
   //Printando todos os graficos e grids inicialmente na tela
  let viewport:any
  let dashboard: DashBoard = new DashBoard()
  let result:boolean
  let DashboardName = dashboard.currentDashboard.getText().toLowerCase()
  if(dashboard.checkForMsgs()){
    fail('Ocorreu um erro ou aviso ao gerar os gráficos do dashboard '+DashboardName+' ')
  }

  switch (DashboardName) {
    case 'geral':
     //Pegando a imagem da tela resultados inteira
      let geral: Geral = new Geral();
      viewport = geral.cardResultados
      assert.equal(browser.checkElement(viewport.selector, { "ignoreComparison": 'color'  })[0].isExactSameImage,true, 'Os gráficos do dashboard Geral apresentaram diferença')
     //Printando todos os graficos e grids que precisam de algo mais para fica visivel
      //grid todos os produtos
      geral.btnTodosProdutos.click()
      if(dashboard.checkForMsgs()){
        fail('Ocorreu um erro ou aviso ao fazer a consulta')
      }
      geral.waitSearch()
      geral.gridProduto.btnGridMenu.waitForVisible()
      //Como tenho que fechar o modal primeiramente , guardo o resultado e depois faço o assert
      result = browser.checkElement(geral.gridProduto.gridSelector , { "ignoreComparison": 'color'  })[0].isExactSameImage
      geral.gridProduto.btnClose.click()
      if(dashboard.checkForMsgs()){
        fail('Ocorreu um erro ou aviso ao carregar o modal Produtos no dashboard geral')
      }
      geral.gridProduto.btnGridMenu.waitForVisible(5000,true)
      assert.equal(result,true,'O modal Produtos no dashboard geral apresentou diferença')
     
      //grafico media
      geral.btnMedia.click()
      if(dashboard.checkForMsgs()){
        fail('Ocorreu um erro ou aviso ao fazer a consulta')
      }
      geral.waitSearch()
      geral.grafMedia.conteudo.waitForVisible()
      assert.equal(browser.checkElement(geral.grafMedia.graficoSelector , { "ignoreComparison": 'color'  })[0].isExactSameImage,true, 'O grafico de média apresentou diferença')
      

      //grafico sem recorrencia
      geral.btnSemRecorrencia.click()
      if(dashboard.checkForMsgs()){
        fail('Erro ao abrir o gráfico sem recorrência')
      }
      geral.waitSearch()
      geral.grafSemRecorrencia.conteudo.waitForVisible()
      assert.equal(browser.checkElement(geral.grafSemRecorrencia.graficoSelector , { "ignoreComparison": 'color'  })[0].isExactSameImage,true, 'O grafico sem recorrência apresentou diferença')

      break;
    
    case 'produto':
      let produto:Produto = new Produto()
      //Pegando a imagem da tela resultados inteira
      viewport = produto.cardResultados
      assert.equal(browser.checkElement(viewport.selector , { "ignoreComparison": 'color'  })[0].isExactSameImage,true, 'Os gráficos do dashboard Produto apresentaram diferença')
     
     //Printando todos os graficos e grids que precisam de algo mais para fica visivel
     //Grid Cliente
      produto.btnClientes.click();
      if(dashboard.checkForMsgs()){
        fail('Ocorreu um erro ou aviso ao carregar o modal Clientes no dashboard Produto')
      }
      produto.waitSearch()
      produto.gridClientes.btnGridMenu.waitForVisible();
      result = browser.checkElement(produto.gridClientes.gridSelector , { "ignoreComparison": 'color'  })[0].isExactSameImage
      produto.gridClientes.btnClose.click()
      produto.gridClientes.btnClose.waitForVisible(5000,true)
      assert.equal(result,true,'O modal Clientes no dashboard Produto apresentou diferença')
      break;

    case 'funcionalidade':
      let funcionalidade: Funcionalidade = new Funcionalidade();
      //Pegando a imagem da tela resultados inteira
      viewport = funcionalidade.cardResultados
      assert.equal(browser.checkElement(viewport.selector , { "ignoreComparison": 'color'  })[0].isExactSameImage,true, 'Os gráficos do dashboard Funcionalidade apresentaram diferença')
      //Grid mais clientes

      funcionalidade.btnMaisFuncionalidades.waitForVisible()
      funcionalidade.btnMaisFuncionalidades.click()
      if(dashboard.checkForMsgs()){
        fail('Ocorreu um erro ou aviso ao carregar o modal Mais funcionalidades não usadas no dashboard Funcionalidade')
      }
      funcionalidade.waitSearch()
      funcionalidade.gridMaisClientes.btnClose.waitForVisible();
      result = browser.checkElement(funcionalidade.gridMaisClientes.gridSelector , { "ignoreComparison": 'color'  })[0].isExactSameImage
      funcionalidade.gridMaisClientes.btnClose.click()
      if(dashboard.checkForMsgs()){
        fail('Ocorreu um erro ou aviso ao carregar o modal Mais funcionalidades não usadas no dashboard Funcionalidade')
      }
      funcionalidade.gridMaisClientes.btnClose.waitForVisible(5000,true)
      assert.equal(result,true,'O modal Mais funcionalidades não usadas no dashboard Funcionalidade apresentou diferença')
      break;

    case 'cliente':
      let cliente: Cliente = new Cliente()
      ////Pegando a imagem da tela resultados inteira
      viewport = cliente.cardResultados
      assert.equal(browser.checkElement(viewport.selector , { "ignoreComparison": 'color'  })[0].isExactSameImage,true, 'Os gráficos do dashboard Cliente apresentaram diferença')
      
      //Detalhes da Usabilidade do Funcionário://
      cliente.btnDetalhesFuncionario.click();
      if(dashboard.checkForMsgs()){
        fail('Ocorreu um erro ou aviso ao carregar o modal Detalhes da Usabilidade do Funcionário no dashboard Cliente')
      }
      cliente.waitSearch()
      cliente.gridDetalhesUsabilidadeFuncionario.btnClose.waitForVisible()
      result = browser.checkElement(cliente.gridDetalhesUsabilidadeFuncionario.gridSelector , { "ignoreComparison": 'color'  })[0].isExactSameImage
      cliente.gridDetalhesUsabilidadeFuncionario.btnClose.click()
      if(dashboard.checkForMsgs()){
        fail('Ocorreu um erro ou aviso ao carregar o modal Detalhes da Usabilidade do Funcionário no dashboard Cliente')
      }
      cliente.gridDetalhesUsabilidadeFuncionario.btnClose.waitForVisible(5000,true)
      assert.equal(result,true,'O modal Detalhes da Usabilidade do Funcionário no dashboard Cliente apresentou diferença')

      //Funcionalidades por Uso//
      cliente.btnTodasFuncionalidade.click();
      if(dashboard.checkForMsgs()){
        fail('Ocorreu um erro ou aviso ao carregar o modal Funcionalidades por Uso no dashboard Cliente')
      }
      cliente.waitSearch()
      cliente.gridFuncionalidadesUso.btnClose.waitForVisible()
      result = browser.checkElement(cliente.gridFuncionalidadesUso.gridSelector , { "ignoreComparison": 'color'  })[0].isExactSameImage

      //###sub modal Acesso dos Funcionários ao Caminho //
      cliente.btnAcessoFuncionario.click()
      if(dashboard.checkForMsgs()){
        fail('Ocorreu um erro ou aviso ao carregar o modal Acesso dos Funcionários ao Caminho no dashboard Cliente')
      }
      cliente.waitSearch()
      cliente.gridAcessoFuncionarioCaminho.btnClose.waitForVisible()
      result = browser.checkElement(cliente.gridAcessoFuncionarioCaminho.gridSelector , { "ignoreComparison": 'color'  })[0].isExactSameImage && result
      cliente.gridAcessoFuncionarioCaminho.btnClose.click()
      if(dashboard.checkForMsgs()){
        fail('Ocorreu um erro ou aviso ao carregar o modal Acesso dos Funcionários ao Caminho no dashboard Cliente')
      }
      cliente.gridAcessoFuncionarioCaminho.btnClose.waitForVisible(5000,true)
      assert.equal(result,true,'O modal Funcionalidades por Uso e/ou o modal Acesso dos Funcionários  no dashboard Cliente apresentou diferença')


      break;
      default:
      console.log('Este dashboard ainda não tem configuração pronto para este step')
      browser.debug()
  }*/
