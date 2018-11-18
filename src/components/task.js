import React, { Component } from 'react';

export default class Task extends Component {

  render() {
    return (
      <div>
        <input type="checkbox" />
        { this.props.children }
      </div>
    );
  }
}

// task ->
