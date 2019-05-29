Feature: Realizar uma consulta no dasboard funcionalidade utilizando todos os filtro​​s

    
     Scenario Outline: Realizar uma consulta no dasboard funcionalidade  utilizando todos os filtro​​s.Cena:<n>
		Given Estou no dashboard "Funcionalidade" do setor "Shop"
		When Habilito o filtro "<filtro>"
		And Seleciono a base "<base>"
		And Seleciono o produto "<produto>"
		And Seleciono o caminho "<caminho>"
		And Seleciono a funcionalidade "<funcionalidade>"
		And Seleciono a característica "<caracteristica>"
		And Seleciono a versão "<versao>"
		And Seleciono o cliente "<cliente>"
		And Seleciono o CNAE Cliente "<cnae>"
		And Seleciono a data inicial "01/01/2019"
		And Seleciono a data final "31/01/2019"
		And Clico em consultar
		Then O sistema demonstrará as informações de acordo com os filtros utilizados
		Examples:
			| n | filtro                                         | base   | produto   | caminho                                        | funcionalidade       | caracteristica | versao  | cliente | cnae      |
			# | 1 | característica, versão, cliente, cnae cliente  | 900000 | wshop     | Principal>Estoque>Estoque>Movimento de Estoque | Movimento de Estoque | POSTGRE        | 6.1336  | 138746  | 4639-7/01 |
            # |1 | característica                                 | vazio  | wshop     | Principal>Estoque>Estoque>Movimento de Estoque | vazio                | vazio          | vazio   | vazio   | vazio     |
			| 1 | característica                                 | vazio  | vazio     | vazio                                          | movimento de estoque | POSTGRE        | vazio   | vazio   | vazio     |
		    # | 4 | cnae                                           | vazio  | vazio     | vazio                                          | movimento de estoque | vazio          | vazio   | vazio   | 4639-7/01 |
	 	    # | 1 | versão,cliente,caminho                         | vazio  | vazio     | Principal>Estoque>Estoque>Movimento de Estoque | vazio                | vazio          | 6.1336  | 138746  | vazio     |
		
		
		
		
		
		
		
		
		
		
		
		
			# | 5 | cliente                               | vazio  | vazio     | vazio              | movimento de estoque | vazio          | vazio   | 000002  | vazio                      |
			# | 6 | versão                                | vazio  | vazio     | movimento de estoque | vazio              | vazio          | 1.0.0.0 | vazio   | vazio                      |
			# | 7 | cliente, cnae                         | 900000 | finapagar | vazio              | movimento de estoque | vazio          | vazio   | 000002  | treinamento em informática |
			# | 8 | versão, cliente, cnae                 | 900000 | finapagar | movimento de estoque | vazio              | vazio          | 1.0.0.0 | 000002  | treinamento em informática |
