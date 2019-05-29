import { Page, WebElement } from './Page';
import { DashBoard } from '../pageobjects/dashboard.page';
import { Grid } from './grid.page';
import { Grafico } from './grafico.page';
import { GridModal } from './gridModal.page';
import { Canvas } from '../pageobjects/canvas.page'

export class Cliente extends DashBoard {
    title: string = 'Cliente';

    public grafUsoDiarioFunc: Grafico
    public grafUtilizacaoDosProdutos: Grafico
    public grafTopProdutos: Grafico
    public gridDetalheUsoDosProdutos: Grid
    public grafTopUsuarios: Grafico
    public gridDetalheUdoDosUsuarios: Grid
    public gridDetalhesUsabilidadeFuncionario: GridModal
    public grafTopFuncPorUso: Grafico
    public gridFuncionalidadesUso: GridModal
    public gridAcessoFuncionarioCaminho: GridModal
    public grafTpoFuncPorPermanencia: Grafico
    public gridDetalheUsoDasFunc: Grid
    public gridFuncNuncaUtilizadas: Grid
    public gridFuncionalidadesNaoMaisUtilizadas: Grid
    public canvasAcessoAosFuncionarios: Canvas
    public selectorgrafUsoDiarioFunc:any
    public selectorInformacoescliente:any;
    public selectorgrafUtilizacaoDosProdutos:any
    public selectortop10produtosmaiorpercentual:any
    public selectordetalhamentodeusodosprodutos:any
    public selectortop10usuariosmaiorpercentual:any
    public selectordetalhamentodeusodosusuarios:any
    public selectortopfuncionalidadesporuso:any
    public selectortopfuncionalidadeporpermanecia:any
    public selectordetalhamentodeusodasfuncionalidadespelocaminho:any
    public selectorfuncionalidadenaoutilizada: any
    public selectordetalhesdausabilidadedofuncionario:any
    public selectoracessodosfuncionariosafuncionalidade:any
    public gridAcessodosFuncionariosafuncionalidade: GridModal
    public selectorfiltrocaminhosendoutilizado:any
    public selectorfuncionalidadequedeixaramdeserutilizada:any

    constructor(){
        super()
        this.grafUsoDiarioFunc = new Grafico('Uso Diário das Funcionalidades por Produto')
        this.grafUtilizacaoDosProdutos = new Grafico('Utilização dos Produtos por Usuário')
        this.grafTopProdutos = new Grafico('Top 10 Produtos - Maior Percentual de Uso')
        this.gridDetalheUsoDosProdutos = new Grid('cliente-uso-produtos-grid')
        this.grafTopUsuarios = new Grafico('Top 10 Usuários - Maior Percentual de Uso')
        this.gridDetalheUdoDosUsuarios = new Grid('cliente-uso-usuarios-grid')
        this.gridDetalhesUsabilidadeFuncionario = new GridModal('Detalhes da Usabilidade do Funcionário:')
        this.grafTopFuncPorUso = new Grafico('Top Funcionalidades por Uso')
        this.gridFuncionalidadesUso = new GridModal('Funcionalidades por Uso')
        this.gridAcessoFuncionarioCaminho = new GridModal('Acesso dos Funcionários ao Caminho:')
        this.grafTpoFuncPorPermanencia = new Grafico('Top Funcionalidades por Permanência')
        this.gridDetalheUsoDasFunc = new Grid('cliente-uso-funcionalidades-grid')
        this.gridFuncNuncaUtilizadas = new Grid('cliente-funcionalidades-nunca-utilizadas-grid')
        this.gridFuncionalidadesNaoMaisUtilizadas = new Grid('cliente-funcionalidades-deixaram-utilizadas-grid')       
        this.canvasAcessoAosFuncionarios = new Canvas('top-funcionalidade-uso-bar-chart')
        this.gridAcessodosFuncionariosafuncionalidade=new GridModal('Acesso dos Funcionários a Funcionalidade:')
        //selector
        this.selectorgrafUsoDiarioFunc ='#cliente-uso-funcionalidades-line-chart >div.card.primary.ng-scope'
        this.selectorInformacoescliente='#info-cliente > div > div >div';
        this.selectorgrafUtilizacaoDosProdutos='#cliente-utilizacao-produto-line-chart>div.card.primary.ng-scope';
        this.selectortop10produtosmaiorpercentual='#cliente-top-produtos-pie-chart>div.card.primary.ng-scope';
        this.selectordetalhamentodeusodosprodutos='#cliente-uso-produtos-grid>.card.primary.ng-scope';
        this.selectortop10usuariosmaiorpercentual='#cliente-uso-usuarios-pie-chart>.card.primary.ng-scope';
        this.selectordetalhamentodeusodosusuarios='#cliente-uso-usuarios-grid>.card.primary.ng-scope';
        this.selectortopfuncionalidadesporuso='#cliente-top-funcionalidade-uso-bar-chart>.card.primary.ng-scope';
        this.selectortopfuncionalidadeporpermanecia='#cliente-top-funcionalidades-permanencia-bar-chart> .card.primary.card-top-usuarios.ng-scope';
        this.selectordetalhamentodeusodasfuncionalidadespelocaminho='#cliente-uso-funcionalidades-grid';
        this.selectorfuncionalidadenaoutilizada='#cliente-funcionalidades-nunca-utilizadas-grid';
        this.selectordetalhesdausabilidadedofuncionario='div >.modal-content.modal-custom-size.opened';
        this.selectoracessodosfuncionariosafuncionalidade='div.modal-backdrop + div.modal-content.opened';
        this.selectorfiltrocaminhosendoutilizado='span[title="Principal>Acesso Rapido>Favoritos>Movimento de Estoque"]';
        this.selectorfuncionalidadequedeixaramdeserutilizada='#cliente-funcionalidades-deixaram-utilizadas-grid';

    }

    conteudo(conteudo):WebElement{return browser.element(conteudo)};

    //Botões
    get btnDetalhesFuncionario(): WebElement { return browser.element('//div[@title="Detalhes do funcionário"]'); }
    get btnTodasFuncionalidade(): WebElement { return browser.element('//div[@title="Visualizar todas as funcionalidades"]'); }
    get btnAcessoFuncionario(): WebElement { return browser.element('//div[@title="Funcionários que utilizaram a funcionalidade"]'); }
    
}


