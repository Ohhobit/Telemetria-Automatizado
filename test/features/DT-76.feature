@TestExecution
@Testkey=DTT-76
@TestExcutionKey=DTT-84
@DTT-84
@DT-76
Feature: Realizar uma consulta no dashboard Geral utilizando todos os filtros


	@DTT-89 @DTT-75
    Scenario Outline:  Realizar uma consulta no dashboard Geral utilizando todos os filtros
	Given Estou no dashboard "Geral" do setor "Bimer"
	When Habilito o filtro de "<filtro>"
	And Seleciono a base "<base>"
	And Seleciono o produto "<produto>"
	And Seleciono o cliente "<cliente>"
	And Seleciono o CNAE Cliente "<cnae>"
	And Seleciono a data inicial "01/12/2018"
	And Seleciono a data final "31/12/2018"
	And Clico em consultar
	Then O sistema demonstrará as informações de acordo com os filtros utilizados
	Examples:
	|#  | filtro              |base  | cliente| produto  |cnae                       |
	|1  | Cliente             |vazio | 000002 | vazio    |vazio                      |
	|2  | Cliente             |900000| 000002 | vazio    |vazio                      |
	# |3  | Cliente,CNAE        |900000| 000002 | vazio    |treinamento em informática |
	# |4  | Cliente,CNAE        |vazio | 000002 | vazio    |treinamento em informática |
	# |5  | Cliente,Produto     |900000| 000002 | finapagar|vazio                      |
	# |6  | Cliente,Produto     |vazio | 000002 | finapagar|vazio                      |
	# |7  | Cliente,Produto,CNAE|vazio | 000002 | finapagar|treinamento em informática |
	# |8  | Cliente,Produto,CNAE|900000| 000002 | finapagar|treinamento em informática |
	# |9  | CNAE                |vazio | vazio  | vazio    |treinamento em informática |
	# |10 | CNAE                |900000| vazio  | vazio    |treinamento em informática |
	# |11 | Produto             |900000| vazio  | finapagar|vazio                      |
	# |12 | Produto             |vazio | vazio  | finapagar|vazio                      |
	# |13 | Produto,CNAE        |900000| vazio  | finapagar|treinamento em informática |
	# |14 | Produto,CNAE        |vazio | vazio  | finapagar|treinamento em informática |