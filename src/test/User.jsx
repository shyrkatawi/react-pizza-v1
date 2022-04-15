import React, { PureComponent } from 'react';

class User extends PureComponent {
  componentDidMount() {
    console.log(1);
    console.log(this);
    console.log(`DID MOUNT ${this.props.name}`);
    console.log(1);
  }

  componentDidUpdate(prevProps) {
    console.log(1);
    console.log(this);
    console.log(`DID UPDATE ${prevProps.name} to ${this.props.name}`);
    console.log(1);
  }

  componentWillUnmount() {
    console.log(1);
    console.log(this);
    console.log(`WILL UNMOUNT ${this.props.name}`);
    console.log(1);
  }

  render() {
    return <div>{this.props.name} : {this.props.age}</div>;
  }
}

export default User;
