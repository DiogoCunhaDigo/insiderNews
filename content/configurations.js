var configurations = {};

// CONFIGURAÇÕES DO USUÁRIO
// Altere os valores abaixo para configurar o sistema como desejar.

	configurations.name = "insiderNews 2.0 Alpha";
	
	// SERVIDOR WEB
	// Configure abaixo o Host e Porta desejada
	configurations.webServerHost = process.env.INSIDER_HOST || process.env.HOST || '0.0.0.0';
	configurations.webServerPort = process.env.INSIDER_PORT || process.env.PORT || 80;

// CONFIGURAÇÕES DO USUÁRIO [fim]

module.exports = configurations;