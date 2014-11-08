var core = require('./core/index.js');
var userConfigurations = require('./content/configurations.js');
var insiderNews;

// Utiliza o "core" do iniderNews para criar uma nova instância
// com as configurações definidas pelo usuário.
insiderNews = core(userConfigurations);
insiderNews.start();