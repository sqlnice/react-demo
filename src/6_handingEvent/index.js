import React from 'react';
export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };
  }
  handleClick = (id) => {
    console.log(id);
    this.setState((preState) => ({
      isToggleOn: !preState.isToggleOn,
    }));
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this, 1)}>{this.state.isToggleOn ? 'On' : 'Off'}</button>
      </div>
    );
  }
}
