
import {Page,WebElement} from './Page';

export class Canvas extends Page {
    
    private azul:any =  [124,181,236,255]; 
    private vermelho:any = [140,0,0,255];
    private verde:any = [144, 237, 125, 255]; 
    private laranja:any = [247,163,92,255]
    private lilas:any = [128,133,233,255]
    private rosa:any = [229,87,122,255] 
    private amarelo:any = [228,211,84,255]
    private verdeEscuro:any = [43,144,143,255]
    private roxo:any = [60,22,139,255]
    private preto:any = [67,67,72,255]
    public canvasSelector:string
    
    constructor(id:string){
        super()

        this.canvasSelector = id

    }

    ClicarNaCor(cor:string): Boolean {

        let rgba

        switch (cor) {
            
            case 'azul':
               rgba = this.azul 
               break             
            case 'vermelho':
               rgba = this.vermelho
               break
            case 'verde':
               rgba = this.verde
               break
            case 'laranja':
               rgba = this.laranja
               break
            case 'lilas':
               rgba = this.lilas
               break
            case 'rosa':
               rgba = this.rosa
               break             
            case 'amarelo':
               rgba = this.amarelo
               break             
            case 'verde escuro':
               rgba = this.verdeEscuro
               break             
            case 'roxo':
               rgba = this.roxo
               break
            case 'preto':
               rgba = this.preto
            default:
               console.error('Cor informada não existe')                              
            } 
        
        let script = browser.execute(function(rgba,canvasSelector){
        let element = <HTMLCanvasElement> document.getElementById(canvasSelector)
        let ctx = element.getContext('2d');
        let x:number = 0;
        let y:number = 0;            
  
        for(let i=0; i<351; i++){
          for(let j=0; j<580; j++){
            let canvasColor = ctx.getImageData(x+j, y+i, 1, 1).data;
            let result = (canvasColor[0] == rgba[0]) && (canvasColor[1] == rgba[1]) && (canvasColor[2] == rgba[2])
            if(result){
              x = x+j;
              y = y+i
             return [x,y]
            }
          }
        }
        return [x,y];
        },rgba,this.canvasSelector)
        if (script.value[0] == 0) {
            return false
        } 
        else {
            browser.leftClick('#' + this.canvasSelector,script.value[0], script.value[1])
            return true
        }     
    }     
}
