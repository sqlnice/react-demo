import React from 'react';
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    console.log('生命周期挂载');
    this.timerId = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    console.log('生命周期卸载');
    clearInterval(this.timerId);
  }
  tick() {
    // 1.不要直接修改state
    // 2.state的更新可能是异步的
    // Wrong
    // this.setState({
    //   counter: this.state.counter + this.props.increment,
    // });
    // Correct
    // this.setState((state, props) => ({
    //   counter: state.counter + props.increment
    // }));
    // 3.state的更新会被合并
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
