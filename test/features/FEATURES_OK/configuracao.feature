Feature: Verificar grid Edição de funcionalidades

    
     Scenario Outline:Realizar uma consulta no dashboard Visão geral.
		Given Estou no painel de configuração
		When selecionar o setor "<setor>"
		When selecionar o produto "<produto>"
		When Clico em consultar
		Then A grid de funcionalidade será carregada
		Examples:
		|#|setor   |produto    |
		|1|SHOP    |WSHOP      |
		|2|Bimer   |Faturamento|
		|3|pack    |WDP        |
		|4|Immobile|caixa      |
     