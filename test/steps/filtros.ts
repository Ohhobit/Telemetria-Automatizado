var assert = require('assert');

import { DashBoard } from "../pageobjects/dashboard.page";
import { fail } from "assert";

const dashboard: DashBoard = new DashBoard();
export module filtro {
    export function selecionarBase(base: string) {
        if (base.toLowerCase()!='vazio'){
            if (dashboard.base.isVisible()) {            
                dashboard.base.waitForVisible()
                dashboard.base.addValue(base);
                dashboard.waitSearch();
                dashboard.base.addValue('\n')
                dashboard.waitSearch();
            }
            else {
                dashboard.filtros.waitForVisible()
                this.habilitarFiltros('base')
                dashboard.base.waitForVisible()
                dashboard.base.addValue(base);
                dashboard.waitSearch();
                dashboard.base.addValue('\n')
                dashboard.waitSearch();
            }   
        }    
    }

    export function selecionarCaminho(caminho: string) {
        if (dashboard.caminho.isVisible()) {
            dashboard.caminho.addValue(caminho);
            dashboard.waitSearch();
            dashboard.caminho.addValue('\n')
            dashboard.waitSearch();
        }
        else {
            dashboard.filtros.waitForVisible()
            this.habilitarFiltros('caminho')
            dashboard.caminho.waitForVisible()
            dashboard.caminho.addValue(caminho);
            dashboard.waitSearch();
            dashboard.caminho.addValue('\n')
            dashboard.waitSearch();
        }
    }

    export function selecionarCaracteristica(caracteristica: string) {
        if (dashboard.caracteristica.isVisible()) {
            dashboard.caracteristica.addValue(caracteristica);
            dashboard.waitSearch();
            dashboard.caracteristica.addValue('\n')
            dashboard.waitSearch();
        }
        else {
            dashboard.filtros.waitForVisible()
            this.habilitarFiltros('característica')
            dashboard.caracteristica.waitForVisible()
            dashboard.caracteristica.addValue(caracteristica);
            dashboard.waitSearch();
            dashboard.caracteristica.addValue('\n')
            dashboard.waitSearch();
        }
    }

    export function selecionarCategoria(categoria: string) {
        if (dashboard.categoria.isVisible()) {            
            dashboard.categoria.addValue(categoria);
            dashboard.waitSearch();
            dashboard.categoria.addValue('\n')
            dashboard.waitSearch();
        }
        else {
            dashboard.filtros.waitForVisible()
            this.habilitarFiltros('categoria')
            dashboard.categoria.waitForVisible()
            dashboard.categoria.addValue(categoria);
            dashboard.waitSearch();
            dashboard.categoria.addValue('\n')
            dashboard.waitSearch();
        }
    }

    export function selecionarCliente(cliente: string) {
        if (cliente.toLowerCase() != 'vazio') {
            if ('Cliente' == dashboard.currentDashboard.getText()) {
                dashboard.clienteFull.addValue(cliente);
                dashboard.waitSearch();
                browser.keys('\uE007');
                browser.pause(1000)
            }
            else {
                if(dashboard.cliente.isVisible()){
                    dashboard.cliente.addValue(cliente);
                    dashboard.waitSearch();
                    dashboard.cliente.addValue('\n')
                    dashboard.waitSearch();
                }
                else {
                    dashboard.filtros.waitForVisible();
                    this.habilitarFiltros('cliente');
                    dashboard.cliente.waitForVisible();
                    dashboard.cliente.addValue(cliente);
                    dashboard.waitSearch();
                    dashboard.cliente.addValue('\n')
                    dashboard.waitSearch();
                }
                

            }
        }
    }

    export function selecionarClienteInterno(clienteInterno: string) {
        if (dashboard.clienteInterno.isVisible()) {
            dashboard.clienteInterno.setValue(clienteInterno);
            dashboard.waitSearch();
            browser.keys('\uE007');
        }
        else {
            dashboard.filtros.waitForVisible()
            this.habilitarFiltros('incluir cliente interno')
            dashboard.clienteInterno.waitForVisible()
            dashboard.clienteInterno.setValue(clienteInterno);
            dashboard.waitSearch();
            browser.keys('\uE007');
        }
    }

    export function selecionarCnaeFuncionalidade(cnae: string) {
        
        if (cnae.toLowerCase()!='vazio'){
            
            if (dashboard.cnaeFuncionalidade.isVisible()) {
                dashboard.cnaeFuncionalidade.addValue(cnae);
                dashboard.waitSearch();
                dashboard.cnaeFuncionalidade.addValue('\n')
                dashboard.waitSearch();
            }
            else {
                dashboard.filtros.waitForVisible();
                this.habilitarFiltros('cnae funcionalidade');
                dashboard.cnaeFuncionalidade.waitForVisible();
                dashboard.cnaeFuncionalidade.addValue(cnae);
                dashboard.waitSearch();
                dashboard.cnaeFuncionalidade.addValue('\n')
                dashboard.waitSearch();
        }   }
    }

    export function selecionarCnaeCliente(cnae: string) {
     
        if (cnae.toLowerCase()!='vazio'){

            if (dashboard.cnaeCliente.isVisible()) {
                dashboard.cnaeCliente.addValue(cnae);
                dashboard.waitSearch();
                dashboard.cnaeCliente.addValue('\n')
                dashboard.waitSearch();
            }
            else {
                dashboard.filtros.waitForVisible();
                this.habilitarFiltros('cnae cliente');
                dashboard.cnaeCliente.waitForVisible();
                dashboard.cnaeCliente.addValue(cnae);
                dashboard.waitSearch();
                dashboard.cnaeCliente.addValue('\n')
                dashboard.waitSearch();
            }
        }
    }

    export function selecionarDataFinal(data: string) {
        if (data.toLowerCase() != 'vazio') {
            dashboard.dataFinal.setValue(data + '\n')

            while (checarFiltroData(data,'end_date_filter')==false) {
                dashboard.dataFinal.clearElement();
                dashboard.dataFinal.setValue(data + '\n')
            }
        
        }
    }

    export function selecionarDataInicial(data: string) {
        if (data.toLowerCase() != 'vazio') {
            dashboard.dataInicial.waitForVisible()
            dashboard.dataInicial.setValue(data + '\n')

            while (checarFiltroData(data,'start_date_filter')==false) {
                dashboard.dataInicial.clearElement();
                dashboard.dataInicial.setValue(data + '\n')
            }
            
        }
    }

    export function selecionarFuncionalidade(funcionalidade: string) {
        if (dashboard.funcionalidade.isVisible()) {
            dashboard.funcionalidade.addValue(funcionalidade);
            dashboard.waitSearch();
            dashboard.funcionalidade.addValue('\n')
            dashboard.waitSearch();
        }
        else {
            dashboard.filtros.waitForVisible();
            this.habilitarFiltros('funcionalidade');
            dashboard.funcionalidade.waitForVisible();
            dashboard.funcionalidade.addValue(funcionalidade);
            dashboard.waitSearch();
            dashboard.funcionalidade.addValue('\n')
            dashboard.waitSearch();
        }
    }

    export function selecionarFuncionario(funcionario: string) {
        if (dashboard.funcionario.isVisible()) {
            dashboard.funcionario.addValue(funcionario);
            dashboard.waitSearch();
            dashboard.funcionario.addValue('\n')
            dashboard.waitSearch();
        }
        else {
            dashboard.filtros.waitForVisible();
            this.habilitarFiltros('funcionário');
            dashboard.funcionario.waitForVisible();
            dashboard.funcionario.addValue(funcionario);
            dashboard.waitSearch();
            dashboard.funcionario.addValue('\n')
            dashboard.waitSearch();
        }
    }

    export function selecionarNovaFuncionalidade(novaFuncionalidade: string) {
        if (dashboard.novaFuncionalidade.isVisible()) {
            dashboard.novaFuncionalidade.setValue(novaFuncionalidade);
            dashboard.waitSearch();
            browser.keys('\uE007');
        }
        else {
            dashboard.filtros.waitForVisible();
            this.habilitarFiltros('novas funcionalidades');
            dashboard.novaFuncionalidade.waitForVisible();
            dashboard.novaFuncionalidade.addValue(novaFuncionalidade);
            dashboard.waitSearch();
            browser.keys('\uE007');
        }
    }

    export function selecionarPesoAbaixo(peso: string) {
        if (dashboard.pesoAbaixo.isVisible()) {
            dashboard.pesoAbaixo.setValue(peso);
            dashboard.waitSearch();
            browser.keys('\uE007');
        }else {
            dashboard.filtros.waitForVisible();
            this.habilitarFiltros('peso abaixo de');
            dashboard.pesoAbaixo.waitForVisible();
            dashboard.pesoAbaixo.addValue(peso);
            dashboard.waitSearch();
            browser.keys('\uE007');
        }
    }

    export function selecionarPesoAcima(peso: string) {
        if (dashboard.pesoAcima.isVisible()) {
            dashboard.pesoAcima.setValue(peso);
            dashboard.waitSearch();
            browser.keys('\uE007');
        }
        else {
            dashboard.filtros.waitForVisible();
            this.habilitarFiltros('peso acima de');
            dashboard.pesoAcima.waitForVisible();
            dashboard.pesoAcima.addValue(peso);
            dashboard.waitSearch();
            browser.keys('\uE007');
        }
    }

    export function selecionarProduto(produto: string) {
        
      if (produto.toLowerCase()!='vazio' ){
        
        if (dashboard.produto.isVisible()){
            dashboard.produto.addValue(produto);
            dashboard.waitSearch();
            browser.pause(50000)
            dashboard.produto.addValue('\n')
            dashboard.waitSearch();
        }
        else {
            dashboard.filtros.waitForVisible();
            this.habilitarFiltros('produto');
            dashboard.produto.waitForVisible();
            dashboard.produto.addValue(produto);
            dashboard.waitSearch();
            dashboard.produto.addValue('\n')
            dashboard.waitSearch();
        }
      }   
    }

    export function selecionarSemUso(semUso: string) {
        if (dashboard.semUso.isVisible()) {
            dashboard.semUso.waitForVisible();
            dashboard.semUso.setValue(semUso);
            dashboard.waitSearch();
            browser.keys('\uE007');
        }
        else {
            dashboard.filtros.waitForVisible();
            this.habilitarFiltros('sem uso');
            dashboard.semUso.waitForVisible();
            dashboard.semUso.addValue(semUso);
            dashboard.waitSearch();
            browser.keys('\uE007');
        }
    }

    export function selecionarVersao(versao: string) {
        if (dashboard.versao.isVisible()) {
            let dashboard: DashBoard = new DashBoard();
            dashboard.versao.waitForVisible()
            dashboard.versao.addValue(versao);
            dashboard.waitSearch();
            dashboard.versao.addValue('\n')
            dashboard.waitSearch();
        }
        else {
            dashboard.filtros.waitForVisible();
            this.habilitarFiltros('versão');
            dashboard.versao.waitForVisible();
            dashboard.versao.addValue(versao);
            dashboard.waitSearch();
            dashboard.versao.addValue('\n')
            dashboard.waitSearch();
        }
    }

    export function habilitarFiltros(filtro: string) {
        if (filtro.toLowerCase() != 'vazio') {
            let filtros = filtro.split(',');
            dashboard.filtros.waitForVisible();
            dashboard.filtros.click();
            dashboard.filtrosSearch.waitForVisible();
            filtros.forEach((filtro) => {
                dashboard.filtrosSearch.setValue(filtro)
                browser.pause(500);
                dashboard.filtrosSearch.addValue('\n');
                dashboard.campo(filtro).waitForVisible();
            })
            //Este clique serve apenas para fechar o campo de pesquisa
            dashboard.dataAtual.click();
        }
    }

    export function pesquisarInput(campo: string, pesquisa: string) {
        if (campo != 'vazio' && pesquisa != 'vazio') {
            dashboard.campo(campo).waitForVisible();
            dashboard.campo(campo).setValue(pesquisa)
            dashboard.waitSearch();
           // assert.equal(dashboard.pesquisaField(pesquisa).isExisting(), true)
        }
    }

    export function clicarConsultar() {
        dashboard.btnConsultar.waitForEnabled();
        browser.pause(500)
        dashboard.btnConsultar.click();
        dashboard.waitSearch();
    }

    function checarFiltroData(data: string, idName: string): boolean {
        let result:boolean = browser.selectorExecute('/body', function (body, data, idName) {
            let x: any = document.getElementById(idName)
            return data === x.value.toString();
        }, data, idName)
        return result
    }

    export function resultadoPesquisa(aviso:string) {
        return dashboard.pesquisaResult(aviso).waitForVisible(5000)
    }

    export function consultaSimples() {
        let currentDasboard = dashboard.currentDashboard.getText()
        switch (currentDasboard.toLowerCase()){
            case 'geral':
                selecionarDataInicial('01/01/2017')
                selecionarDataFinal('31/01/2017')
            break
            case 'funcionalidade':
                selecionarDataInicial('01/01/2017')
                selecionarDataFinal('31/01/2017')
                selecionarCaminho('AuditoriaDoSistema')
            break
            case 'produto':
                selecionarDataInicial('01/01/2017')
                selecionarDataFinal('31/01/2017')
            break
            case 'cliente':
                selecionarCliente('000002')
                selecionarDataInicial('01/01/2017')
                selecionarDataFinal('31/01/2017')
                
            break
        }
        clicarConsultar()
        if(dashboard.checkForMsgs()){
            fail('Houve um erro ao carregar os gráficos')
        }
    }
}