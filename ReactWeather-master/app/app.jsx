var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//Loading foundation css
require('style!css!foundation-sites/dist/css/foundation.min.css');
//Ativar o Foundation com jQuery
$(document).foundation();

//Loading custom css
require('style!css!sass!applicationStyles');

//Renderizando o conteúdo
ReactDOM.render(
  <div>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Weather}/>
        <Route path="/about" component={About}/>
        <Route path="/examples" component={Examples}/>
      </Route>
    </Router>
  </div>
  ,
  document.getElementById('app') //Where to render
);
