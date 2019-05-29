Feature: Realizar uma consulta no dasboard Cliente utilizando todos os filtro​​s

    
     Scenario Outline: Realizar uma consulta no dasboard Cliente utilizando todos os filtro​​s.Cena:<n>
	Given Estou no dashboard "Cliente" do setor "Shop"
     When Habilito o filtro de "<filtro>"
     And Seleciono a base "<base>"
     And Seleciono o produto "<produto>"
     And Seleciono o cliente "096218"
     And Seleciono o caminho "<caminho>"
     And Seleciono a funcionalidade "<funcionalidade>"
     And Seleciono a versão "<versao>"
     And Seleciono a categoria "<categoria>"
     And Seleciono o CNAE Funcionalidade "<CNAE Funcionalidade>"
     And Seleciono o funcionário "<funcionario>"
     And Seleciono o peso abaixo de "<pesoabaixo>"
     And Seleciono o peso acima de "<pesoacima>"
     And Seleciono a data inicial "01/01/2019"
     And Seleciono a data final "31/01/2019"
     And Clico em consultar
     Then O sistema demonstrará as informações de acordo com os filtros utilizados
     Examples:
     |n |filtro                                                                                                                |base  |produto  |caminho                                               |funcionalidade          |versao |categoria   |CNAE Funcionalidade|funcionario |pesoabaixo|pesoacima|
     |1 |caminho, funcionalidade, versão,  categoria, produto, CNAE Funcionalidade, Funcionário, Peso abaixo de, Peso acima de |900485|Wshop    |Principal>Acesso Rapido>Favoritos>Movimento de Estoque|MOVIMENTO DE ESTOQUE    |6.1334 |vazio       |vazio              | VIRGILIO   |10        |1        |
     |2 |caminho, funcionalidade, versão,  categoria, produto, CNAE Funcionalidade, Funcionário, Peso abaixo de, Peso acima de |vazio |vazio    |vazio                                                 |vazio                   |vazio  |vazio       |vazio              |     vazio  |vazio     |vazio    |
