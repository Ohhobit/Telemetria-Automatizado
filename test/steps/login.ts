import { Passaporte } from "../pageobjects/login.page";


const passaporte : Passaporte = new Passaporte()
const settings = require('../../settings.json')
let assert = require('assert');
export module login {

    export function UsuarioAdm() {
        if (!verificarLogin()) {
            fazerLogin(settings.usuario_matriz.usuario,settings.usuario_matriz.senha)
        }
        else {
            if (!verificarUsuario() == settings.usuario_matriz.usuario) {
                browser.deleteCookie()
                fazerLogin(settings.usuario_matriz.usuario,settings.usuario_matriz.senha)
            }
        }

    }
    export function UsuarioComum() {
        if (!verificarLogin()) {
            fazerLogin(settings.usuario_representacao.usuario,settings.usuario_representacao.senha)
        }
        else {
            if (!verificarUsuario() == settings.usuario_representacao.usuario) {
                browser.deleteCookie()
                fazerLogin(settings.usuario_representacao.usuario,settings.usuario_representacao.senha)
            }
        }

    }

}

function verificarLogin(): boolean {
    let cookies = browser.cookie();
    for (var j = 0; j < cookies['value'].length; j++) {
        if ((cookies['value'][j].name = 'auth_data')) {
            if (cookies['value'][j].value != '' && cookies['value'][j].value != undefined) {
                return true
            }
        }
    }
    return false
}

function verificarUsuario(): string {
    return browser.getText('//span[@ng-bind="current_user.username"]')
}

function fazerLogin(usuario:string,senha:string){
    browser.url('')
    passaporte.username.waitForVisible();
    passaporte.waitForPageLoad()
    passaporte.username.setValue(usuario)
    passaporte.password.setValue(senha)
    passaporte.btnEntrar.waitForEnabled()
    passaporte.btnEntrar.click()
}