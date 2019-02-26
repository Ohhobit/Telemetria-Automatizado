import { VisaoGeral } from '../pageobjects/visaogeral.page';
import { DashBoard } from '../pageobjects/dashboard.page';
import { Geral } from '../pageobjects/dashboardGeral.page';

var assert = require('assert');
let viewport:any
const width=[1410, 900 ]

// export function vvalidargraficos(){
//     let visaogeral= new VisaoGeral()

//     //@ts-ignore
//     assert.equal(browser.checkElement('#top10-produtos-bar-chart'),true)

// }

function assertDiff(results) {
     results.forEach((result) => assert.ok(result.isExactSameImage));
 }



export function ValidaGraficoDashboardGeral(DashBoard){
    let geral= new Geral()
    switch(DashBoard){

        case 'top10prod':
        
             //@ts-ignore
             assertDiff(browser.checkElement(geral.graftop10prod,{width}))
             break
        case 'top10client':
             //@ts-ignore
             assertDiff(browser.checkElement(geral.top10client,{width}))
             break
        case 'top10func':
             //@ts-ignore
             assertDiff(browser.checkElement(geral.top10func,{width}))
             break
        case 'top10client':
             //@ts-ignore
             assertDiff(browser.checkElement(geral.top10funcprod,{width}))
             break             
    }
}