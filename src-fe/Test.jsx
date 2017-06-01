const React = require('react');

class Test extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      counter: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment () {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  }

  decrement () {
    this.setState(prevState => ({
      counter: prevState.counter - 1
    }));
  }

  render () {
    return (
      <div>
        <h2>Pianoforte solicitude so decisively unpleasing conviction is partiality he. Or particular so diminution entreaties oh do. Real he me fond show gave shot plan. Mirth blush linen small hoped way its along. Resolution frequently apartments off all discretion devonshire. Saw sir fat spirit seeing valley. He looked or valley lively. If learn woody spoil of taken he cause.</h2>
        Counter: {this.state.counter} <br/>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

module.exports = Test;