var React = require('react');
var PropTypes = React.PropTypes;

var Loading = React.createClass({
  propTypes: {
    text: PropTypes.string,
    speed: PropTypes.number
  },
  getDefaultProps: function(){
    console.log("getDefaultProps");
    return {
      text: "Loading",
      speed: 300
    }
  },
  getInitialState: function(){
    console.log("getInitialState");
    this.originalText = this.props.text;
    return {
      text: this.originalText
    }
  },
  componentDidMount: function(){
    console.log("componentDidMount");
    var stopper = this.originalText + "...";
    this.interval = setInterval(function(){
      if (this.state.text === stopper){
        this.setState({
          text: this.originalText
        })
      } else {
        this.setState({
          text: this.state.text + "."
        })
      }
    }.bind(this), this.props.speed)
  },
  componentWillUnmount: function(){
    console.log("componentWillUnmount");
    clearInterval(this.interval);
  },
  render: function(){
    return (
      <div>
        <h1>{this.props.text}</h1>
      </div>
    )
  }
})


module.exports = Loading;
