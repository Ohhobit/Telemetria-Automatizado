
import { defineSupportCode } from 'cucumber';
import { should }   from 'chai-as-promised'
import {filtro}  from '../steps/filtros'
import {Setup}  from '../steps/setup'


/////Sentenças //////////
import { navegacao } from '../steps/navegacao'
import { login } from '../steps/login'


defineSupportCode(function({ Given }) {

  Given(/^Estou logado no sistema com um usuário administrador$/, function(){
    login.UsuarioAdm()
  });

  Given(/^Estou logado no sistema com um usuário representante$/, function(){
    login.UsuarioComum()
  });

  Given(/^Uma consulta com resultados foi feita$/, function(){
    filtro.consultaSimples()
  });

  Given(/^Estou no dashboard (?:de |)"([^"]*)" do setor "([^"]*)"$/, function(dashboard,setor){
    navegacao.selecionarSetor(setor);
    navegacao.selecionarDashboard(dashboard);
  });
  
  Given(/^Estou no dashboard Visão Geral$/, function(){
    navegacao.IrParaVisaoGeral();    
  });

  Given(/^Estou logado com um usuário de representação$/, function(){

    Setup.pg('tavares.dsn.cir',false)
    browser.refresh()
    //Como alteramos a permissão do usuário , marcamos essa flag como true para que no final do teste possamos redefinir a permissão do usuário
    this.usuarioAlterado = true
    
  });
  
  Given (/^Estou logado no Telemetria com um usuário "([^"]*)"$/,function(usuario){
    if (usuario.toUppercase =='ADMINISTRADOR')
    {
        login.UsuarioAdm()

    }
    else (usuario.toUppercase=='COMUM')
    {
        login.UsuarioComum()
    };

  });

  Given(/^estou na tela de login do Telemetria$/,function(){
     login.UsuarioAdm()   
  
   });

  Given(/^Estou no painel de configuração$/,function(){
     navegacao.acessarconfiguracao();

  });
  

});


