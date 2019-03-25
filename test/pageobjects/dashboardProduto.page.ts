import { Page, WebElement } from './Page';
import { DashBoard } from '../pageobjects/dashboard.page';
import { Grid } from './grid.page';
import { Grafico } from './grafico.page';
import { GridModal } from './gridModal.page';

export class Produto extends DashBoard {
    public gridClientes: GridModal
    public gridUsoDasFuncs: Grid
    public grafUsoDiario: Grafico
    public selectorUsoDiarioDasFuncionalidadesPorProduto:any
    public selectorDetalhamentoDeUsoDasFuncionalidadesPeloCaminho:any
    public selectorGridClientes:any
    private title: string = 'Produto';

    constructor() {
        super()
        this.gridClientes = new GridModal('Clientes:')
        this.gridUsoDasFuncs = new Grid('produto-uso-funcionalidades-grid')
        this.grafUsoDiario = new Grafico('Uso Diário das Funcionalidades por Produto')
        //selector dos gráficos
        this.selectorUsoDiarioDasFuncionalidadesPorProduto='#produto-uso-funcionalidades-line-chart > div'
        this.selectorDetalhamentoDeUsoDasFuncionalidadesPeloCaminho='#produto-uso-funcionalidades-grid'
        this.selectorGridClientes='div.modal-content.modal-custom-size.opened'
    }
    conteudo(selector): WebElement {return browser.element(selector)}
    
    //PageObject
    get btnClientes(): WebElement { return browser.element('//*[@ng-click="visualizarClientes()"]'); }
    
}
