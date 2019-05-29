import { defineSupportCode } from 'cucumber';
import { filtro }  from '../steps/filtros'
import { navegacao } from '../steps/navegacao'
import { Graficos } from '../steps/graficos';
import { fail } from 'assert';
import { DashBoard } from "../pageobjects/dashboard.page";
import{ Configuracao} from "../steps/configuracao.step"


defineSupportCode(function({ When }) {


  When(/^Habilito os? filtros? (?:de |)"([^"]*)"$/, function(arg1) {
    filtro.habilitarFiltros(arg1);
  });

  When(/^Pesquiso por "([^"]*)" no campo "([^"]*)"$/, function(pesquisa,campo) {
    filtro.pesquisarInput(campo,pesquisa);
    this.campo = campo
  });

  When(/^Seleciono os? clientes? "([^"]*)"$/, function(cliente) {
    filtro.selecionarCliente(cliente);
  });

  When(/^Clico no botão "([^"]*)"$/, function(setor){
    navegacao.IrParaSetorNaVisaoGeral(setor);
  })

  When(/^Faço uma consulta com "([^"]*)"$/, function(consulta) {
   consulta = consulta.split(',');
   consulta.forEach(element => {
     switch (element.toLowerCase().trim()){

      case 'cliente':
        filtro.selecionarCliente('096218')
        break
      case 'produto':
        filtro.selecionarProduto('wshop')
        break
      case 'base':
        filtro.selecionarBase('900485')
        break
      case 'cnae funcionalidade':
        filtro.selecionarCnaeFuncionalidade('')  
        break
      case 'cnae cliente':
        filtro.selecionarCnaeCliente('4751-2/01')
        break  
      case 'caminho':
        filtro.selecionarCaminho('MovEstoque>Nota Fiscal Eletronica>NFe>Reenviar XML')
        break
      case 'caracteristica':
        filtro.selecionarCaracteristica('POSTGRE')
        break
      case 'categoria':
        filtro.selecionarCategoria('ação')
        break       
      case 'cliente interno':
        filtro.selecionarClienteInterno('sim')
        break  
      case 'data inicial':
        filtro.selecionarDataInicial('29/06/2018')
        break 
      case 'data final':
        filtro.selecionarDataFinal('01/07/2018')
        break
      case 'funcionalidade':
        filtro.selecionarFuncionalidade('movimento de estoque')
        break         
      case 'funcionario':
        filtro.selecionarFuncionario('lilian Wanderley')
        break 
      case 'novas funcionalidades':
        filtro.selecionarNovaFuncionalidade('não')
        break     
      case 'peso abaixo de':
        filtro.selecionarPesoAbaixo('8')
        break   
      case 'peso acima de':
        filtro.selecionarPesoAcima('1')
        break 
      case 'sem uso':
        filtro.selecionarSemUso('não')
        break 
      case 'versao':
        filtro.selecionarVersao('6.13313')
        break
      default:
        fail('Filtro não encontrado')     
     }
    })
  });

  When(/^Seleciono os? produtos? "([^"]*)"$/, function(produto) {
    filtro.selecionarProduto(produto);
  });

  When(/^Seleciono as? funcionalidades? "([^"]*)"$/, function(funcionalidade) {
    filtro.selecionarFuncionalidade(funcionalidade);
  
  });

  When(/^Seleciono os? caminhos? "([^"]*)"$/, function(caminho) {
    filtro.selecionarCaminho(caminho);
  });

  When(/^Seleciono o CNAE Funcionalidade "([^"]*)"$/, function(cnae) {
    filtro.selecionarCnaeFuncionalidade(cnae);
  });

  When(/^Seleciono o CNAE Cliente "([^"]*)"$/, function(cnae) {
    filtro.selecionarCnaeCliente(cnae);
  });

  When(/^Seleciono (?:as?|os?) bases? "([^"]*)"$/, function(base) {
    filtro.selecionarBase(base);
  });

  When(/^Seleciono a data inicial "([^"]*)"$/, function(dataIni) {
    filtro.selecionarDataInicial(dataIni);
  });

  When(/^Seleciono a? característica? "([^"]*)"$/, function(caracteristica) {
    filtro.selecionarCaracteristica(caracteristica);
  });

   When(/^Seleciono as? (?:versão|versões) "([^"]*)"$/, function(versao) {
    filtro.selecionarVersao(versao);
  });

  When(/^Seleciono as? categorias? "([^"]*)"$/, function(categoria) {
    filtro.selecionarCategoria(categoria);
  });

  When(/^Seleciono (?:as?|os?) funcionári(?:as?|os?) "([^"]*)"$/, function(funcionario) {
    filtro.selecionarFuncionario(funcionario);
  });

  When(/^Seleciono a data final "([^"]*)"$/, function(dataFim) {
    filtro.selecionarDataFinal(dataFim);
  });

  When(/^Seleciono o peso acima de "([1-9]|10|vazio)"$/, function(peso) {
    filtro.selecionarPesoAcima(peso);
  });

  When(/^Seleciono o peso abaixo de "([1-9]|10|vazio)"$/, function(peso) {
    filtro.selecionarPesoAbaixo(peso);
  });

  When(/^Clico em consultar$/, function() {
    browser.pause(500)
    filtro.clicarConsultar();
  });

  When(/^Seleciono o sem uso como "(sim|não|vazio)"$/, function(semUso) {
    filtro.selecionarSemUso(semUso);
  });

  When(/^Seleciono as novas funcionalidades como "(sim|não|vazio)"$/, function(novaFuncionalidade) {
    filtro.selecionarNovaFuncionalidade(novaFuncionalidade);
  });

  When(/^Seleciono incluir cliente interno como "(sim|não|vazio)"$/, function(clienteInterno) {
    filtro.selecionarClienteInterno(clienteInterno);
  });

  When(/^habilito a coluna de "([^"]*)" no grid "([^"]*)"$/, function(colunmName,gridTitle) {
      colunmName = colunmName.charAt(0).toUpperCase() + colunmName.slice(1).toLowerCase();
      grids.habilitarColunaGrid(colunmName,gridTitle)
  });

  When(/^Clico em remover o final de semana do grafico "([^"]*)"$/, function(grafico) {
    this.grafico = grafico
    Graficos.removerFimSemana(grafico)
  });

  When(/^pg testado$/, function() {
    browser.debug()
  });

  When(/^Acessar o menu lateral$/,function(){
    navegacao.AbrirMenuLateral()

  });

 
  When (/^fizer a consulta com o filtro de data$/,function(){
    const data_inicial='22/02/2019' 
    const data_final='22/02/2019' 
    filtro.selecionarDataInicial(data_inicial)
    filtro.selecionarDataFinal(data_final)
    filtro.clicarConsultar()


  });

  

  When (/^a página carregar$/,function(){
    const dashboard = new DashBoard();
          dashboard.waitfortitleload()


  });

  When(/^selecionar o produto "([^"]*)"$/,function(Produto){
    
     
    Configuracao.Selecionarprodutoconfiguracao(Produto)
     
  });
  
  When(/^selecionar o setor "([^"]*)"$/,function(setor){
    
      Configuracao.Selecionarsetorconfiguracao(setor)
    
 }); 


});