import React, { Component } from 'react';
import '../styles/components/task.scss';
import Status from './status';

const statusTypes = [
  'to do',
  'done',
  'cancelled',
  'delete task'
];

export default class Task extends Component {

  render() {
    return (
      <div className='task'>
        <div><input type="checkbox" /></div>
        <div className='title'>{ this.props.children }</div>
        { this.props.status && <Status options={statusTypes} selected={this.props.status} />}
      </div>
    );
  }
}

// task ->
