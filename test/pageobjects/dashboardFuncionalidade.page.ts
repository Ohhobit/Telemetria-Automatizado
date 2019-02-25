import { Page, WebElement } from './Page';
import { DashBoard } from '../pageobjects/dashboard.page';
import { Grid } from './grid.page';
import { Grafico } from './grafico.page';
import { GridModal } from './gridModal.page';


export class Funcionalidade extends DashBoard {
    public gridClientesNuncaUtilizaram: Grid
    public gridMaisClientes: GridModal
    public gridClientesDeixaram: Grid
    public gridClientesComUso: Grid
    public grafUsoDiario: Grafico
    public grafTotalClientes: Grafico
    private title: string = 'Produto';

    constructor() {
        super()
        this.gridClientesNuncaUtilizaram = new Grid('funcionalidade-clientes-nunca-utilizaram-grid')
        this.gridMaisClientes = new GridModal('Funcionalidades que deixaram de ser utilizadas pelo cliente:')
        this.gridClientesDeixaram = new Grid('funcionalidade-clientes-deixaram-utilizar-grid')
        this.gridClientesComUso = new Grid('funcionalidade-clientes-com-uso-grid')
        this.grafUsoDiario = new Grafico('Uso Diário da Funcionalidade pelo Caminho') 
        this.grafTotalClientes = new Grafico('Total de Clientes pelo Caminho')
    }
    //Botões
    get btnMaisFuncionalidades(): WebElement { return browser.element('//*[@ng-click="grid.appScope.btnModalSemUso(row)"]'); }

}
