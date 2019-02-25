import { MenuLateral } from "../pageobjects/menuLateral.page";
import { DashBoard } from "../pageobjects/dashboard.page";
import { VisaoGeral } from "../pageobjects/visaogeral.page"
import { Setup } from "./setup";

const menulateral: MenuLateral = new MenuLateral();
const dashboard: DashBoard = new DashBoard()
const visaoGeral: VisaoGeral = new VisaoGeral()
export module navegacao {
    var assert = require('assert');

    export function selecionarSetor(produto: string) {
        menulateral.logo.waitForVisible();
        menulateral.opens();
        menulateral.dashboards.waitForVisible();
        browser.pause(500);
        if (!menulateral.btnProduto(produto).isVisible()) {
            menulateral.dashboards.click();
            menulateral.btnProduto(produto).waitForVisible();
        }
        browser.pause(500);
        menulateral.btnProduto(produto).click();
        menulateral.btnFechar.click();
        browser.pause(500);
        return assert.equal(browser.getText('//div[@class="page-title"]/span'), produto)
    }

    export function IrParaVisaoGeral(){
        visaoGeral.waitSearch()       
        if (browser.getText('//div[@class="page-title"]/span') !==  'Visão Geral') {
            menulateral.logo.waitForVisible();
            menulateral.opens();
            menulateral.visaoGeral.waitForVisible();
            menulateral.visaoGeral.click();
            menulateral.btnFechar.click(); 
            browser.pause(500);
            return assert.equal(browser.getText('//div[@class="page-title"]/span'), 'Visão Geral')
        }    
    }

    export function IrParaSetorNaVisaoGeral(setor: string) {
        setor = setor.toUpperCase();
        if (browser.getText('//div[@class="page-title"]/span') !==  'Visão Geral'){
            navegacao.IrParaVisaoGeral();}
            visaoGeral.waitSearch();

        switch (setor) {

            case 'IMMOBILE':
                visaoGeral.btnImmobile.waitForVisible();
                visaoGeral.btnImmobile.click();
                break;

            case 'BIMER':
                visaoGeral.btnBimer.waitForVisible();
                visaoGeral.btnBimer.click();
                break;

            case 'CIRRUS':
                visaoGeral.btnCirrus.waitForVisible();
                visaoGeral.btnCirrus.click();
                break;

            case 'PACK':
                visaoGeral.btnPack.waitForVisible();    
                visaoGeral.btnPack.click();
                break;

            case 'SHOP':
                visaoGeral.btnShop.waitForVisible();    
                visaoGeral.btnShop.click();

                break;
        }
        browser.pause(500);
    }

    export function selecionarDashboard(DashName: string) {
        DashName = DashName.toUpperCase();

        if (DashName == dashboard.currentDashboard.getText().toUpperCase()) {
            return true;
        }
        switch (DashName) {

            case 'PRODUTO':
                dashboard.btnProduto.click();
                break;

            case 'GERAL':
                dashboard.btnGeral.click();
                break;

            case 'CLIENTE':
                dashboard.btnCliente.click();
                break;

            case 'FUNCIONALIDADE':
                dashboard.btnFuncionalidade.click();
                break;

            case 'COLABORADORES':
                dashboard.btnColaboradores.click();
                break;
        }

        browser.pause(500);
        return assert.equal(dashboard.currentDashboard.getText().toUpperCase(), DashName);

    }

    export function pg(){ 
        let x = Setup.pg('tavares.dsn.cir', false)
        return x
    }

    export function AbrirMenuLateral(){
        menulateral.logo.waitForVisible();
        menulateral.opens();
        menulateral.dashboards.waitForVisible()
    }

    export function VerificarConfiguracaoMenuLateral(acao){
        if (acao.toUpperCase()=='DEVERÁ'){
            return assert.equal(menulateral.configuracoes.isVisible(),true)
        }
        if (acao.toUpperCase()=='NÂO DEVERÁ'){
            return assert.equal(menulateral.configuracoes.isVisible(),false)
        }
        
    }
    
}