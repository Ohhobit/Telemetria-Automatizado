Feature: Realizar uma consulta no dasboard Produto utilizando todos os filtro​​s

    
     Scenario Outline: Realizar uma consulta no dasboard Produto utilizando todos os filtro​​s.Cena:<n>
	Given Estou no dashboard "Produto" do setor "Shop"
     When Habilito o filtro de "<filtro>"
     And Seleciono a base "<base>"
     And Seleciono o produto "<produto>"
     And Seleciono o caminho "<caminho>"
     And Seleciono a funcionalidade "<funcionalidade>"
     And Seleciono a característica "<caracteristica>"
     And Seleciono a versão "<versao>"
     And Seleciono o cliente "<cliente>"
     And Seleciono a categoria "<categoria>"
     And Seleciono o CNAE Cliente "<CNAE Cliente >"
     And Seleciono o CNAE Funcionalidade "<CNAE Funcionalidade>"
     And Seleciono o sem uso como "<semuso>"
     And Seleciono as novas funcionalidades como "<novasfun>"
     And Seleciono incluir cliente interno como "<interno>"
     And Seleciono o peso abaixo de "<pesoabaixo>"
     And Seleciono o peso acima de "<pesoacima>"
     And Seleciono a data inicial "01/12/2017"
     And Seleciono a data final "31/12/2017"
     And Clico em consultar
     Then O sistema demonstrará as informações de acordo com os filtros utilizados
     Examples:
     |n |filtro                                                                                                                                                                                        |base  |produto  |caminho                      |funcionalidade      |caracteristica|versao |cliente|categoria|CNAE Cliente               |CNAE Funcionalidade       |semuso|novasfun|interno |pesoabaixo|pesoacima|
     |1 |caminho, funcionalidade, característica, versão, cliente, categoria, CNAE Cliente, CNAE Funcionalidade, sem uso, novas funcionalidades, incluir cliente interno, Peso abaixo de, Peso acima de|900485|Wshop    |Principal>Vendas>Vender>Venda|MOVIMENTO DE ESTOQUE|POSTGRE       |6.1336 |470267 |relatório|treinamento em informática|vazio                     |não   |não     |não     |10        |5        |
  