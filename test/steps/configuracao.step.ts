import {Configuracaopage} from '../pageobjects/configuracao.page'

const assert = require('assert');




const configuracao = new Configuracaopage()


export module Configuracao{


    export function Selecionarprodutoconfiguracao(Produto){
        Produto=Produto.toUpperCase()   
        configuracao.abrirproduto.waitForVisible();
        configuracao.abrirproduto.click();
        configuracao.inputproduto.waitForVisible()
        configuracao.inputproduto.addValue(Produto);
        configuracao.waitsearch(Produto).waitForVisible();
        configuracao.inputproduto.addValue('\n')
        
    }



    export function Selecionarsetorconfiguracao (setor){
        setor=setor.toUpperCase()
        configuracao.abrirsetor.waitForVisible();
        configuracao.abrirsetor.click();
        configuracao.inputsetor.waitForVisible();
        configuracao.inputsetor.addValue(setor);
        configuracao.waitsearch(setor).waitForVisible();
        configuracao.inputsetor.addValue('\n')           
    }


   export function VerificarGridfuncionalidade(){
        configuracao.gridFuncionalidade.waitForVisible()
        assert.equal(configuracao.gridFuncionalidade.isVisible(),true );
   
   }





}