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
    public selectorGrafUsoDiario:any
    public selectorTotaldeclientespelocaminho:any
    public selectordetalhamentodosclientescomuso: any
    public selectorclientesquenaoutilizaram:any
    public selectorclientesquedeixaramdeutilizarafuncionalidade:any
    public selectorfuncionalidadesquedeixaramdeserutilizadapelocliente:any
    public selectorfuncionalidadesquedeixaramdeserutilizadapeloclientemodal:any

    constructor() {
        super()
        this.gridClientesNuncaUtilizaram = new Grid('funcionalidade-clientes-nunca-utilizaram-grid')
        this.gridMaisClientes = new GridModal('Funcionalidades que deixaram de ser utilizadas pelo cliente:')
        this.gridClientesDeixaram = new Grid('funcionalidade-clientes-deixaram-utilizar-grid')
        this.gridClientesComUso = new Grid('funcionalidade-clientes-com-uso-grid')
        this.grafUsoDiario = new Grafico('Uso Diário da Funcionalidade pelo Caminho') 
        this.grafTotalClientes = new Grafico('Total de Clientes pelo Caminho')
        
        //selector
        this.selectorGrafUsoDiario='#funcionalidade-uso-funcionalidades-line-chart > div'
        this.selectorTotaldeclientespelocaminho='#funcionalidade-total-clientes-line-chart > div'
        this.selectordetalhamentodosclientescomuso='#funcionalidade-clientes-com-uso-grid'
        this.selectorclientesquenaoutilizaram='#funcionalidade-clientes-nunca-utilizaram-grid'
        this.selectorclientesquedeixaramdeutilizarafuncionalidade='#funcionalidade-clientes-deixaram-utilizar-grid'
        this.selectorfuncionalidadesquedeixaramdeserutilizadapelocliente='.modal-content.modal-custom-size.opened'
        this.selectorfuncionalidadesquedeixaramdeserutilizadapeloclientemodal='div > div .modal-content.modal-custom-size.opened'

    }
    //Botões
    get btnMaisFuncionalidades(): WebElement { return browser.element('//*[@ng-click="grid.appScope.btnModalSemUso(row)"]') }

}
