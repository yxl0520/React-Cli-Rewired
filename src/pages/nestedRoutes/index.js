import React, { Component } from 'react';

class NestedRouter extends Component {
  render() {
    console.log('this.props----', this.props)
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default NestedRouter;