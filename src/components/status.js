import React, { Component } from 'react';

export default class Status extends Component {

  constructor(props) {
    super(props);

    this.state = {
      optionsOpen: false,
    }

    this.handleOpen = this.handleOpen.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleOpen() {
    this.setState({ optionsOpen: true });
    console.log('open options');
  }
  
  handleSelect() {
    
    this.setState({ optionsOpen:false });
  }

  renderOptions() {
    console.log(this.props.options);
    return this.props.options.map(option => (
      <li key={option}>{option}</li>
    ));
  }

  render() {
    return (
      <div className="status">
        <div className="status-selected" onClick={this.handleOpen}>
          {this.props.selected}
        </div>
        { this.state.optionsOpen &&
          <div className="status-options" onClick={this.handleSelect}>
            <ul>{ this.renderOptions() }</ul>
          </div>
        }
      </div>
    );
  }
}
