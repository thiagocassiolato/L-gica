/**
 * 
 */
//Função verifica campo numérico
function isNumeric(str, restricao)
{
	//Loop para verificação de cada caracter digitado
	for (var c = 0; c < str.length; c++)
	{
		//busca o caracter digitado
		var chr = str.charAt(c);
		//Se não for numérico
		if (chr != '0' & chr != '1' & chr != '2' & chr != '3' & chr != '4' & chr != '5' & chr != '6' & chr != '7' & chr != '8' & chr != '9')

			if(restricao == '0'){
				//Mensagem de erro
				alert ('Favor insira apenas caract\u00e9res v\u00e1lidos (0123456789)')
				//Retorna falso
				return false
			}
	}
	//Se não retorna verdadeiro
	return true
}


//Cria indices para busca de correnpondência
function Level(i, v, x, z)
{
	this.i = i;
	this.v = v;
	this.x = x;
	this.z = z
}

//Criação dos arrays
levels = new Array();

levels[0] = new Level('I', 'V', 'X');
levels[1] = new Level('X', 'L', 'C');
levels[2] = new Level('C', 'D', 'M');
levels[3] = new Level('I', 'V', 'X', 'M');
levels[4] = new Level('X', 'L', 'C');
levels[5] = new Level('C', 'D', 'M');
levels[6] = new Level('M');


//Busca caracter romano de referência de acordo com o digito
function calcDigit(d, l)
{

	if (d == 1){
		if (l == 3){

			return levels[l].z;

		}else{

			return levels[l].i;
		}
	}else
		if (d == 2)
			return levels[l].i + levels[l].i;
		else
			if (d == 3)
				return levels[l].i + levels[l].i + levels[l].i;
			else
				if (d == 4)
					return levels[l].i + levels[l].v;
				else
					if (d == 5)
						return levels[l].v;
					else
						if (d == 6)
							return levels[l].v + levels[l].i;
						else
							if (d == 7)
								return levels[l].v + levels[l].i + levels[l].i;
							else
								if (d == 8)
									return levels[l].v + levels[l].i + levels[l].i + levels[l].i;
								else
									if (d == 9)
										return levels[l].i + levels[l].x;
									else 
										return '';
}


//Funcação de conversão para romanos
function f_transforma_romanos(valor){

	var r = ''
		//Loop passando caracter por caracter para conversão 
		for (var c = 0; c < valor.length; c++)
			r += calcDigit(eval(valor.charAt(c)), valor.length - c - 1);
	return r        

}

//Funcação de conversão para numéricos
function f_tranforma_numericos(valor){

	var r = 0
	var ponteiro

	//Loop busca separador (valores maiores que dez mil)
	for (var c = 0; c < valor.length ; c++)

		if ( valor.charAt(c) == '-'){
			ponteiro = valor.length - c;
			break
		}


	// Loop caracter
	for (var c = 0; c < valor.length; c++)
	{

		//Transforma os caracteres para minusculo
		var chr = valor.charAt(c).toLowerCase();
		if (c < valor.length - 1){

			//Retorna caracter posterior
			var next = valor.charAt(c + 1).toLowerCase()
		}else{

			var next = '';

		}

		if (c > 0){

			//Retorna caracter anterior
			var prev = valor.charAt(c - 1).toLowerCase()

		}else{

			var prev = '';
		}

		//Se o caracter for "I"
		if (chr == 'i')
		{
			if ((valor.length - c) > ponteiro){
				if (next == 'x'){

					r += 9000;

				}else{
					if (next == 'v'){

						r += 4000;

					}else{
						if ((valor.length - c) > ponteiro)

							r += 1000;}

				}
			}
			else{
				if (next == 'x'){

					r += 9

				}else{
					if (next == 'v'){

						r += 4;

					}else{

						r += 1;

					}
				}
			}
			continue
		}

		//Se o caracter for "V"
		if (chr == 'v') 
		{

			if ((valor.length - c) > ponteiro){
				if (prev == ''){

					r += 5000;

				}
			}else{
				if (prev != 'i')

					r += 5;

			}
			continue
		}

		//Se o caracter for "X"
		if (chr == 'x')
		{
			if ((valor.length - c) > ponteiro){

				if (next == 'c'){

					r += 90000;

				}else{
					if (next == 'l'){

						r += 40000;

					}else{
						if (prev == '')

							r += 10000;

					}
				}
			} else{


				if (prev != 'i'){
					if (next == 'c'){

						r += 90;

					}else{
						if (next == 'l'){

							r += 40;

						}else{

							r += 10;

						}
					}
				}
			}
			continue
		}

		//Se o caracter for "L"
		if (chr == 'l')
		{
			if ((valor.length - c) > ponteiro){
				if (prev != 'x')

					r += 50000;

			}
			else{
				if (prev != 'x')

					r += 50;

			}
			continue
		}

		//Se o caracter for "C"
		if (chr == 'c')
		{
			if ((valor.length - c) > ponteiro){
				if (next == 'm')

					r += 900000;

				else 
					if (next == 'd')

						r += 400000;

					else
						if (prev == '')

							r += 100000;
			}else{
				if (prev != 'x'){

					if (next == 'm'){

						r += 900;

					}else{
						if (next == 'd'){

							r += 400;

						}else{

							r += 100;}
					}

				}
			}
			continue
		}

		//Se o caracter for "D"
		if (chr == 'd')
		{

			if (prev != 'c'){
				if (valor.length-c > ponteiro){

					r += 500000;

				}else{

					r += 500;
					continue

				}
			}
		}

		//Se o caracter for "M"
		if (chr == 'm')
		{
			if ((valor.length - c) > ponteiro){
				if (prev != 'c')
					r += 1000000;
			}
			else{
				if (prev != 'c')
					r += 1000;
			}

			continue

		}
	}

	return r

}

function verifica_escolha(f){

	var retorno
	var valor = f.Valor.value;
	var selected_index = f.elements["conversao"].selectedIndex;


	//Verifica se o valor é numérico
	if (!isNumeric(valor,selected_index))
	{
		//Caso não seja verifica caracteres romanos
		for (var c = 0; c < valor.length; c++)
		{
			var chr = valor.charAt(c).toLowerCase();
			if (chr != 'i' & chr != 'v' & chr != 'x' & chr != 'l' & chr != 'c' & chr != 'd' & chr != 'm' & chr != '-')
			{
				//Mensagem de erro
				alert ('Favor insira apenas caract\u00e9res v\u00e1lidos (IVXLCDM) e "-" para valores a partir de quatro mil');
				return false
			}
		}
	}
	else{

		if (selected_index == '0'){

			retorno = f_transforma_romanos(valor)

		}else{ 
			if (selected_index == '1')

				retorno = f_tranforma_numericos(valor);
		}


		if (retorno != '')
		{
			//Mensagem com a conversão
			alert("O valor correspondente \u00e9:" + retorno );
		}
	}


}


