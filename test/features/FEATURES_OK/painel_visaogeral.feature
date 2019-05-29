Feature: Acessar o dashboard Visão geral

    
     Scenario: Realizar uma consulta no dashboard Visão geral
		Given Estou no dashboard Visão Geral
		When a página carregar
		Then Os gráficos devem carregar os dados dos últimos 30 dias