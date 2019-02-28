@TestExecution
@Testkey=DTT-76
@TestExcutionKey=DTT-84
@DTT-84
@DT-76
Feature: Filtrar utilizando filtro de Data


	@DTT-89 @DTT-75
    Scenario Outline:  Filtrar utilizando filtro de Data. Cena:<n>
	Given Estou no dashboard "Geral" do setor "Shop"
	When fizer a consulta com o filtro de data
	Then O gráfico "<grafico>" devem carregar os valores de acordo com o filtro de data
	Examples:
	|n|grafico      |
	|1|top10prod    |
	|2|top10client  |
	|3|top10func    |
	|4|top10funcprod|