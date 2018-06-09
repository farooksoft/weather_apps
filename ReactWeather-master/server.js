var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;

//Redirecionando para tráfego http
app.use(function(req, res, next){

  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://'+req.hostname+req.url);
  }else {
    next();
  }

});

//Diretorio que será público e acessível pelo browser
app.use(express.static('public'));

//Levantando o servidor na porta 3000
app.listen(PORT, function(){
  console.log('Express is running at port '+PORT+'!');
});
