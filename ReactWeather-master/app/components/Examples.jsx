var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
  render:function(){
    return (
      <div>
        <h1 className="text-centered page-title">Examples Page</h1>
        <p>Here are a few example locations to try out</p>
        <ol>
          <li><Link to='/?location=Piladelphia'>Piladelphia</Link></li>
          <li><Link to='/?location=London'>London</Link></li>
          <li><Link to='/?location=Rio'>Rio</Link></li>
        </ol>
      </div>
    );
  }
});

module.exports = Examples;
