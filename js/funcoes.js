$(function(){
	$.getJSON("js/automoveis.json", function(data) {

      	for(var i = 0; i <  data['automoveis'].length; i++){
      		$("#TableData").append("<tr>");
			$("#TableData").append("<td scope='col'>" + data['automoveis'][i]['MARCA'] + "</td>");
			$("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CARRO'] + "</td>");
			$("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_DIANTEIRO_MIN'] + "</td>");
			$("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_DIANTEIRO_MAX'] + "</td>");
			$("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CASTER_DIANTEIRO_MIN'] + "</td>");
			$("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CASTER_DIANTEIRO_MAX'] + "</td>");
			$("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MIN'] + "</td>");
			$("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MAX'] + "</td>");
			$("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_TRASEIRA_MIN'] + "</td>");
			$("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_TRASEIRA_MAX'] + "</td>");
			$("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MIN'] + "</td>");
			$("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MAX'] + "</td>");
			$("#TableData").append("</tr>");
		}

  	});
});

$(function () {

	// Configura um manipulador de eventos para o formulário com o id "pesquisa" quando é enviado
    $("#pesquisa").submit(function (event) { 

		// Impede o comportamento padrão de recarregar a página ao enviar o formulário
        event.preventDefault(); 

		// Obtém os valores dos campos de entrada e converte para maiúsculas
        var nome = $("#nome").val().toUpperCase();
        var marca = $("#marca").val().toUpperCase();

		// Limpa o conteúdo da tabela antes de adicionar os novos resultados
        $("#TableData").empty(); 

		// Faz uma solicitação para obter o conteúdo do arquivo JSON
        $.getJSON("js/automoveis.json", function (data) { 

			// Itera sobre cada objeto na lista 'automoveis' do JSON
            data['automoveis'].forEach(function (automovel) {

				// Verifica se o nome e a marca fornecidos correspondem aos dados do automóvel
                if ((nome === '' || automovel['CARRO'].includes(nome)) &&
                    (marca === '' || automovel['MARCA'].includes(marca))) {

					// Adiciona uma nova linha à tabela
                    $("#TableData").append("<tr>");

					// Itera sobre cada propriedade do objeto automóvel
                    for (var prop in automovel) {
						// Adiciona uma célula à linha da tabela com o valor da propriedade
                        $("#TableData").append("<td scope='col'>" + automovel[prop] + "</td>");
                    }
					// Fecha a linha da tabela
                    $("#TableData").append("</tr>");
                }
            });
        });
    });  
});

			   			






				