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
    }
    //Botões
    get btnDetalhesFuncionario(): WebElement { return browser.element('//div[@title="Detalhes do funcionário"]'); }
    get btnTodasFuncionalidade(): WebElement { return browser.element('//div[@title="Visualizar todas as funcionalidades"]'); }
    get btnAcessoFuncionario(): WebElement { return browser.element('//div[@title="Funcionários que utilizaram a funcionalidade"]'); }
    
}


