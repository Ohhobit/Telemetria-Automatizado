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
    public graftop10prod:any
    public top10client:any
    public top10func:any
    public top10funcprod:any

    constructor(){
        super()
        this.gridProduto = new GridModal('Produtos:')
        this.grafMedia = new Grafico(this.media)
        this.grafTotal = new Grafico(this.total)
        this.grafSemRecorrencia = new Grafico(this.semRecorrencia)
        this.grafTopProd = new Grafico(this.topProd)
        this.grafTopFunc = new Grafico(this.topFunc)
        this.grafUsoFunc = new Grafico(this.usoFunc)

        ////alteração Paulo
        this.graftop10prod='#geral-top10-clientes-bar-chart > div > div:nth-child(2) > div > div'
        this.top10client='#geral-top10-clientes-bar-chart > div > div:nth-child(2)'
        this.top10func='#top10-funcionalidades-bar-chart'
        this.top10funcprod='#geral-uso-diario-line-chart > div'
    }
    //Botões
    get btnTotal(): WebElement { return browser.element('//*[@id="total"]'); }
    get btnSemRecorrencia(): WebElement { return browser.element('//*[@id="sem recorrencia"]'); }
    get btnMedia(): WebElement { return browser.element('//*[@id="media"]'); }
    get btnTodosProdutos(): WebElement { return browser.element('//div[@title="Visualizar todos os produtos"]'); }
}


