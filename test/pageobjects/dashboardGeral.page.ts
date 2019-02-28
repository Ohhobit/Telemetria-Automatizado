import { Page, WebElement } from './Page';
import { DashBoard } from '../pageobjects/dashboard.page';
import { Grid } from './grid.page';
import { Grafico } from './grafico.page';
import { GridModal } from './gridModal.page';

export class Geral extends DashBoard {
    title: string = 'Geral';
    private todosProdutos: string  = '//div[@ng-if="labelsTopProdutos.length"]'
    private semRecorrencia: string = 'Funcionalidades Utilizadas Sem Recorrência'
    private media: string = 'Média das Funcionalidades Utilizadas pelos Usuários'
    private total: string = 'Total das Funcionalidades Utilizadas'
    private topProd: string = 'Top 10 Produtos - Funcionalidades Utilizadas'
    private topFunc: string = 'Top 10 Funcionalidades'
    private usoFunc: string = 'Uso Diário das Funcionalidades por Produto'

    public gridProduto: GridModal
    public grafSemRecorrencia: Grafico
    public grafMedia: Grafico
    public grafTotal: Grafico
    public grafTopProd: Grafico
    public grafTopFunc: Grafico
    public grafUsoFunc: Grafico
    public x: string
    public selectorGrafTop10roduto:any
    public selecttorGraftop10clienteTotal:any
    public selecttorGraftop10clienteSemrecorrencia:any
    public selecttorGraftop10clientemedia:any
    public selectorGraftop10funcionalidades:any    
    public selectorTop10funcionalidadeProduto:any
    public selectorGrafTop10rodutoGridTodosProdutos :any



    constructor(){
        super()
        this.gridProduto = new GridModal('Produtos:')
        this.grafMedia = new Grafico(this.media)
        this.grafTotal = new Grafico(this.total)
        this.grafSemRecorrencia = new Grafico(this.semRecorrencia)
        this.grafTopProd = new Grafico(this.topProd)
        this.grafTopFunc = new Grafico(this.topFunc)
        this.grafUsoFunc = new Grafico(this.usoFunc)

        ////alteração Paulo selector(Coloquei o selector dessa forma pois o visualregresion não aceita xpath)
          ///Grafícos do dashboard geral
        this.selectorGrafTop10roduto='#geral-top10-produtos-bar-chart > div > div'
        this.selecttorGraftop10clienteTotal='#geral-top10-clientes-bar-chart > div > div:nth-child(2)'
        this.selecttorGraftop10clienteSemrecorrencia='#geral-top10-clientes-bar-chart > div > div:nth-child(3)'
        this.selecttorGraftop10clientemedia='#geral-top10-clientes-bar-chart > div > div:nth-child(4)'
        this.selectorGraftop10funcionalidades='#top10-funcionalidades-bar-chart'
        this.selectorTop10funcionalidadeProduto='#geral-uso-diario-line-chart > div'
      
        ///// 

        this.selectorGrafTop10rodutoGridTodosProdutos='#body > div.modal-wrapper > div > div.modal-dialog.ng-scope > div.modal-content.modal-custom-size.opened > div.modal-body.ng-scope'


         



    }
    //Botões
    get btnTotal(): WebElement { return browser.element('//*[@id="total"]'); }
    get btnSemRecorrencia(): WebElement { return browser.element('//*[@id="sem recorrencia"]'); }
    get btnMedia(): WebElement { return browser.element('//*[@id="media"]'); }
    get btnTodosProdutos(): WebElement { return browser.element('//div[@title="Visualizar todos os produtos"]'); }
}


