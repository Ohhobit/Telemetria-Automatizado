var assert = require('assert');
import { Grafico } from "../pageobjects/grafico.page";
export module Graficos {

    export function removerFimSemana(graficoNome: string) {
        let grafico: Grafico = new Grafico(graficoNome);
        grafico.btnFimSemana.waitForVisible()
        grafico.btnFimSemana.click()
    }

}