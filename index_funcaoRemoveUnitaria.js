<!DOCTYPE html>
<html>
<head>
	<title>Teste</title>
</head>
	<script type="text/javascript">
		var Producao = function(estado, prod, isInicial){
			this.estado = estado;
			this.prod = prod;
			this.isInicial = isInicial;
		}
		function removeProducoesUnitarias(nTerminais, producoes){
			var prod0 = new Producao("S", "bS", true);
			var prod1 = new Producao("S", "A", true);
			var prod2 = new Producao("A", "aA", false);
			var prod3 = new Producao("A", "a", false);
			
			nTerminais = ["S", "A"];
			producoes = [prod0, prod1, prod2, prod3];
			
			var producoesAux = [];
			// Procura se existe alguma produção com um não terminal unitário
			for(var i = 0; i < producoes.length; i++){
				for (var j = 0; j < nTerminais.length; j++){
					console.log(producoes[i].prod + " === " + nTerminais[j]);
					if(producoes[i].prod === nTerminais[j]){
						console.log("Entrou no if");
						// Cria novas produções de acordo com a unitária eliminada
						for(var k = 0; k < producoes.length; k++){
							if (producoes[k].estado === nTerminais[j]){
								var novaProdObj = new Producao(producoes[i].estado, producoes[k].prod, producoes[i].isInicial);
								producoesAux.push(novaProdObj);
							}
						}
						// Elimina a produção unitária
						producoes.splice(i, 1);
					}
				}
			}
			// Coloca as novas produções criada no array principal.			
			if (producoesAux.length > 0){
				// Transfere para o array principal
				for (var i = 0; i < producoesAux.length; i++){
					producoes.push(producoesAux[i]);
				}
				// Limpa o array auxiliar
				producoesAux.splice(0, producoesAux.length - 1);
			}
			// Remove possíveis produções que ficarão repetidas
			//for (var i = 0; i < producoes.length; i++){
			//	for (var j = i + 1; j < producoes.length; j++){
			//		if (producoes[i].estado === producoes[j].estado && producoes[i].prod === producoes[j].prod){
			//			producoes.splice(j, 1);
			//		}
			//	}
			//}			
			// Mostra no console como ficou as produções
			for (var i = 0; i < producoes.length; i++){
				console.log(producoes[i].estado + " " + producoes[i].prod + " " + producoes[i].isInicial);
			}
		}
	</script>
<body>
	<input type="submit" name="asçdjaslçjdasljda" onclick="removeProducoesUnitarias();">
</body>
</html>
