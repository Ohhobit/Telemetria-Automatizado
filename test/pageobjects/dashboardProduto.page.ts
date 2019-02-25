import { Page, WebElement } from './Page';
import { DashBoard } from '../pageobjects/dashboard.page';
import { Grid } from './grid.page';
import { Grafico } from './grafico.page';
import { GridModal } from './gridModal.page';

export class Produto extends DashBoard {
    public gridClientes: GridModal
    public gridUsoDasFuncs: Grid
    public grafUsoDiario: Grafico
    private title: string = 'Produto';

    constructor() {
        super()
        this.gridClientes = new GridModal('Clientes:')
        this.gridUsoDasFuncs = new Grid('produto-uso-funcionalidades-grid')
        this.grafUsoDiario = new Grafico('Uso Diário das Funcionalidades por Produto')
    }


    //Botões
    get btnClientes(): WebElement { return browser.element('//*[@ng-click="visualizarClientes()"]'); }

}
