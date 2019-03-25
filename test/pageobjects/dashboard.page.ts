
import { Page, WebElement } from './Page';
import { MenuLateral } from './menuLateral.page'
import { fail } from 'assert';
export class DashBoard extends Page {
    /**
    * define elements
    */
    //Dashboard Menu
    get btnGeral(): WebElement { return browser.element('//a/div/div[@class="title" and text()="Geral"]'); }
    get btnFuncionalidade(): WebElement { return browser.element('//a/div/div[@class="title" and text()="Funcionalidade"]'); }
    get btnProduto(): WebElement { return browser.element('//a/div/div[@class="title" and text()="Produto"]'); }
    get btnCliente(): WebElement { return browser.element('//a/div/div[@class="title" and text()="Cliente"]'); }
    get btnColaboradores(): WebElement { return browser.element('//a/div/div[@class="title" and text()="Colaboradores"]'); }
    get btnConsultar(): WebElement { return browser.element('//button[@class="btn btn-size ng-scope btn-primary btn-block"]'); }

    //inputs
    get dataInicial(): WebElement { return browser.element('//div[@id="start_date_filterSelect2"]//input') }
    get dataFinal(): WebElement { return browser.element('//div[@id="end_date_filterSelect2"]//input') }
    get base(): WebElement { return browser.element('//*[@id="s2id_nome_base_multi_uis2_filterSelect2"]//input') }
    get cliente(): WebElement { return browser.element('//*[@id="s2id_nome_cliente_multi_uis2_filterSelect2"]//input') }
    get clienteFull(): WebElement { return browser.element('//*[@id="s2id_cliente_full_single_uis2_filterSelect2"]//input'); }
    get produto(): WebElement { return browser.element('//*[@id="s2id_nome_produto_multi_uis2_filterSelect2"]//input') }
    get caminho(): WebElement { return browser.element('//*[@id="s2id_nome_funcionalidade_multi_uis2_filterSelect2"]//input') }
    get funcionalidade(): WebElement { return browser.element('//*[@id="s2id_nome_agrupamento_multi_uis2_filterSelect2"]//input') }
    get caracteristica(): WebElement { return browser.element('//*[@id="s2id_nome_caracteristica_multi_uis2_filterSelect2"]//input') }
    get funcionario(): WebElement { return browser.element('//*[@id="s2id_nome_funcionario2_multi_uis2_filterSelect2"]//input') }
    get semUso(): WebElement { return browser.element('//*[@id="s2id_sem_uso_single_uis2_filterSelect2"]//input') }
    get clienteInterno(): WebElement { return browser.element('//*[@id="s2id_incluir_cliente_interno_single_uis2_filterSelect2"]//input') }
    get novaFuncionalidade(): WebElement { return browser.element('//*[@id="s2id_novas_funcionalidades_single_uis2_filterSelect2"]//input') }
    get versao(): WebElement { return browser.element('//*[@id="s2id_versao_multi_uis2_filterSelect2"]//input') }
    get categoria(): WebElement { return browser.element('//*[@id="s2id_nome_categoria_multi_uis2_filterSelect2"]//input') }
    get cnaeFuncionalidade(): WebElement { return browser.element('//*[@id="s2id_cnae_funcionalidade_multi_uis2_filterSelect2"]//input') }
    get cnaeCliente(): WebElement { return browser.element('//*[@id="s2id_cnae_empresa_multi_uis2_filterSelect2"]//input') }
    get pesoAcima(): WebElement { return browser.element('//*[@id="s2id_peso_acima_single_uis2_filterSelect2"]//input') }
    get pesoAbaixo(): WebElement { return browser.element('//*[@id="s2id_peso_abaixo_single_uis2_filterSelect2"]//input') }
    get dataAtual(): WebElement { return browser.element('//i[@class="fa fa-clock-o"]') }
    get resultadoPesquisa(): WebElement { return browser.element('//div[@class="row app-model-row"]') }
    get filtros(): WebElement { return browser.element('//*[@bootstrap-select="configAddFilters"]'); }
    get filtrosSearch(): WebElement { return browser.element('//*[@class="dropdown-menu open"]//input'); }
    pesquisaField(pesquisa: string): WebElement { return browser.element('//div[@class="select2-sizer" and text()="' + pesquisa + '"]') }
    pesquisaResult(result: string): WebElement { return browser.element('//ul/li[@class="select2-no-results" and text()="' + result + '"]') }
    //
    get cardResultados(): WebElement { return browser.element('//div[@class="row app-model-row"]') }

    
    confimrcaracter(carac:string):WebElement{return browser.element('span[title="' + carac +'"]')  }



    // Erros e Avisos
    get avisoMsg(): WebElement { return browser.$('//div[@class="toast toast-warning"]') }
    get erroMsg(): WebElement { return browser.$('//div[@class="toast toast-error"]') }
    /**
   * define or overwrite page methods
   */
    get currentDashboard(): WebElement { return browser.element('//div[@class="card-title active"]/div') }

    checkForMsgs(): boolean {
        return this.avisoMsg.isVisible() || this.erroMsg.isVisible()
    }
    waitForPageLoad() {
        this.btnGeral.waitForVisible();
    }

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

    campo(campoNome: string): WebElement {
        campoNome = campoNome.toLowerCase();
        campoNome = campoNome.trim()
        switch (campoNome) {
            case 'cliente':
                if (this.currentDashboard.getText().toLowerCase() == 'cliente') {
                    return this.clienteFull
                }
                else {
                    return this.cliente;
                }

            case 'produto':
                return this.produto;

            case 'caminho':
                return this.caminho;

            case 'funcionalidade':
                return this.funcionalidade;

            case 'base':
                return this.base;

            case 'característica':
                return this.caracteristica;

            case 'sem uso':
                return this.semUso;

            case 'incluir cliente interno':
                return this.clienteInterno;

            case 'novas funcionalidades':
                return this.novaFuncionalidade;

            case 'versão':
                return this.versao

            case 'funcionário':
                return this.funcionario

            case 'categoria':
                return this.categoria

            case 'cnae funcionalidade':
                return this.cnaeFuncionalidade

            case 'cnae cliente':
                return this.cnaeCliente    

            case 'peso acima de':
                return this.pesoAcima

            case 'peso abaixo de':
                return this.pesoAbaixo
            default:
                // console.log(campoNome)
                break
        }
    }
}

