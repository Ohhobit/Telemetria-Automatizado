var assert = require('assert');
import { Grid } from "../pageobjects/grid.page";
export module filtro {
    export function verificarColunaGrid(gridname: string, coluna: string) {
        let grid: Grid = new Grid(gridname);
        grid.gridColuna(coluna).waitForVisible();
        assert.equal(grid.gridColuna(coluna).isVisible(), true)
    }

    export function habilitarColunaGrid(colunmName: string, gridTitle: string) {
        if (colunmName != 'vazio' && gridTitle != 'vazio') {
            let grid: Grid = new Grid(gridTitle);
            grid.btnGridMenu.waitForVisible()
            grid.btnGridMenu.click();
            grid.btnMenuOption(colunmName).waitForVisible()
            grid.btnMenuOption(colunmName).click();
        }
    }
}