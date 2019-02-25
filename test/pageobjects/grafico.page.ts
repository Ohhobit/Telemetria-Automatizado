
import {Page,WebElement} from './Page';

export class Grafico extends Page  {
  
    public graficoSelector: string
    constructor(title:string){
        super()

        this.graficoSelector = '//div[./*[normalize-space()="' + title +'"]]'

    }
    get conteudo(): WebElement {return browser.element(this.graficoSelector)}
    get btnFimSemana(): WebElement {return browser.element(this.graficoSelector +'//div[@title="Remover finais de semana"]')}
    get btnVisularTodos(): WebElement {return browser.element('')}
    
   

    

    
}

