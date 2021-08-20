var qtdeBalde3 = 0;
var qtdeBalde5 = 0;
var tempo = false;

function executar()
{
	var i;
	var comando;
	var texto = $("#texto").val();
	var linhas = texto.split("\n");
	//alert(texto);
	//alert(linhas.length);

	qtdeBalde3 = 0;
	qtdeBalde5 = 0;

	if(texto == "")
	{
		$("#msg").html("<strong>Mensagem:</strong> Nenhum comando encontrado!");
	}

	tempo = $("#tempo").is(':checked');
	//if(tempo) 
	//{
	//	alert(tempo);
	//	setTimeout(executarComTempo(linhas,0),1000);
	//	return;
	//}
	//alert(tempo);

	for(i=0; i < linhas.length; i++)
	{	
		comando = linhas[i];

		if(comando != "")
		{
			if(comando == "EncheBalde5")
				encheBalde5();
			else if(comando == "EncheBalde3")
				encheBalde3();
			else if(comando == "EsvaziaBalde5")
				esvaziaBalde5();
			else if(comando == "EsvaziaBalde3")
				esvaziaBalde3();
			else if(comando == "DespejaBalde3Em5")
				despejaBalde3Em5();
			else if(comando == "DespejaBalde5Em3")
				despejaBalde5Em3();
			else
			{
				$("#msg").html("Mensagem: Comando ["+comando+"] inválido!");
				break;
			}
			if(tempo) alert("Passo "+(i+1)+": "+comando);
			alteraBaldes();
		}
	}
}

function alteraBaldes()
{
	$("#balde5").html('<img src="imagens/balde5-'+qtdeBalde5+'.png" width=200 alt="">');
	$("#balde3").html('<img src="imagens/balde3-'+qtdeBalde3+'.png" width=200 alt="">');
}

function encheBalde5()
{
	qtdeBalde5 = 5;
}

function encheBalde3()
{
	qtdeBalde3 = 3;
}

function esvaziaBalde5()
{
	qtdeBalde5 = 0;
}

function esvaziaBalde3()
{
	qtdeBalde3 = 0;
}

function despejaBalde3Em5()
{
	var maximo = 5 - qtdeBalde5;
	if(qtdeBalde3 <= maximo)
	{
		qtdeBalde5 = qtdeBalde5 + qtdeBalde3;
		qtdeBalde3 = 0;
	}
	else
	{
		qtdeBalde3 = qtdeBalde3 - maximo;
		qtdeBalde5 = 5;
	}
	//alert("B3="+qtdeBalde3+" B5="+qtdeBalde5);
}

function despejaBalde5Em3()
{
	var maximo = 3 - qtdeBalde3;
	if(qtdeBalde5<= maximo)
	{
		qtdeBalde3 = qtdeBalde3 + qtdeBalde5;
		qtdeBalde5 = 0;
	}
	else
	{
		qtdeBalde5 = qtdeBalde5 - maximo;
		qtdeBalde3 = 3;
	}
	//alert("B3="+qtdeBalde3+" B5="+qtdeBalde5);
}

