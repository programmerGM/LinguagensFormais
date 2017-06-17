var Producao = function(estado, prod, isInicial){
	this.estado = estado;
	this.prod = prod;
	this.isInicial = isInicial;
}

function removeProducoesUnitarias(nTerminais, producoes){
	
	// Mostra no console as produções antes de remover unitárias
	console.log('Procuções antes de remover os unitárias: ');
	imprime(producoes);

	var producoesAux = [];
	// Procura se existe alguma produção com um não terminal unitário
	for(var i = 0; i < producoes.length; i++){
		for (var j = 0; j < nTerminais.length; j++){
			if(producoes[i].prod === nTerminais[j]){
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
	for (var i = 0; i < producoes.length; i++){
		for (var j = i + 1; j < producoes.length; j++){
			if (producoes[i].estado === producoes[j].estado && producoes[i].prod === producoes[j].prod){
				producoes.splice(j, 1);
			}
		}
	}			
	
	// Mostra no console as produções após remover unitárias
	console.log('Procuções após remover os unitárias: ');
	imprime(producoes);
}

function imprime(producoes){
	for (var i = 0; i < producoes.length; i++){
		console.log(producoes[i].estado + ' ' + producoes[i].prod + ' ' + producoes[i].isInicial);			
	}
}