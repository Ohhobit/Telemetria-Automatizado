import { VisaoGeral } from '../pageobjects/visaogeral.page';
import { DashBoard } from '../pageobjects/dashboard.page';
import { Geral } from '../pageobjects/dashboardGeral.page';

var assert = require('assert');
 let viewport:any

// export function vvalidargraficos(){
//     let visaogeral= new VisaoGeral()

//     //@ts-ignore
//     assert.equal(browser.checkElement('#top10-produtos-bar-chart'),true)

// }

export function ValidaGraficoDashboardGeral(DashBoard){
    let geral= new Geral()
    switch(DashBoard){

        case 'top10prod':
        
             //@ts-ignore
             assert.equal(browser.checkElement(geral.graftop10prod),true)
             break
        case 'top10client':
             //@ts-ignore
             assert.equal(browser.checkElement(geral.top10client),true )
             break
        case 'top10func':
             //@ts-ignore
             assert.equal(browser.checkElement(geral.top10func),true )
             break
        case 'top10client':
             //@ts-ignore
             assert.equal(browser.checkElement(geral.top10client),true )
             break             
    }
}