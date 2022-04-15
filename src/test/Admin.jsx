import React, { PureComponent } from 'react';

class Admin extends PureComponent {
  componentDidMount() {
    console.log(1);
    console.log(this);
    console.log(`Admin DID MOUNT ${this.props.name}`);
    console.log(1);
  }

  componentDidUpdate(prevProps) {
    console.log(1);
    console.log(this);
    console.log(`Admin DID UPDATE ${prevProps.name} to ${this.props.name}`);
    console.log(1);
  }

  componentWillUnmount() {
    console.log(1);
    console.log(this);
    console.log(`Admin WILL UNMOUNT ${this.props.name}`);
    console.log(1);
  }

  render() {
    return <div>{this.props.name} : {this.props.age}</div>;
  }
}

export default Admin;
