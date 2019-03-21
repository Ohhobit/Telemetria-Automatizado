@TestExecution
@Testkey=DTT-76
@TestExcutionKey=DTT-84
@DTT-84
@DT-76
Feature: Realizar uma consulta no dashboard Geral utilizando todos os filtros


	@DTT-89 @DTT-75
    Scenario Outline:  Realizar uma consulta no dashboard Geral utilizando todos os filtros: Cena <n>
	Given Estou no dashboard "Geral" do setor "Shop"
	When Habilito o filtro de "<filtro>"
	And Seleciono a base "<base>"
	And Seleciono o produto "<produto>"
	And Seleciono o cliente "<cliente>"
	And Seleciono o CNAE Cliente "<cnae>"
	And Seleciono a data inicial "01/01/2019"
	And Seleciono a data final "31/01/2019"
	And Clico em consultar
	Then O sistema demonstrará as informações de acordo com os filtros utilizados
	Examples:
	|n  | filtro                      |base  | cliente| produto  |cnae       |
	|1  | Cliente                     |vazio | 096218 | vazio    |vazio      |
    |2  | Cliente                     |900485| 096218 | vazio    |vazio      |
	|3  | Cliente,CNAE Cliente        |900485| 096218 | vazio    |4751-2/01  |
	|4  | Cliente,CNAE Cliente        |vazio | 096218 | vazio    |4751-2/01  |
	|5  | Cliente,Produto             |900485| 096218 | wshop    |vazio      |
	|6  | Cliente,Produto             |vazio | 096218 | wshop    |vazio      |   
	|7  | Cliente,Produto,CNAE Cliente|vazio | 096218 | wshop    |4751-2/01  |
	|8  | Cliente,Produto,CNAE Cliente|900485| 096218 | wshop    |4751-2/01  |
	|9  | CNAE Cliente                |vazio | vazio  | vazio    |4751-2/01  |
	|10 | CNAE Cliente                |900485| vazio  | vazio    |4751-2/01  |
    |11 | Produto                     |900485| vazio  | wshop    |vazio      |
	|12 | Produto                     |vazio | vazio  | ishop    |vazio      |
	|13 | Produto,CNAE Cliente        |900485| vazio  | wshop    |4751-2/01  |
	|14 | Produto,CNAE Cliente        |vazio | vazio  | wshop    |4751-2/01  |