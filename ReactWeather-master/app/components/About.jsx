var React = require('react');

var About = React.createClass({
  render:function(){
    return (
      <div>
        <h1 className="text-center page-title">About</h1>
        <p>Here are some of the tools I have used to built this WebAp.</p>
        <ul>
          <li> <a href="https://facebook.github.io/react/">React.js</a></li>
          <li> <a href="http://openweathermap.org/">Open Weather Map</a></li>
          <li> <a href="http://foundation.zurb.com/">Foundation Sites</a></li>
        </ul>
      </div>
    );
  }
});

module.exports = About;
