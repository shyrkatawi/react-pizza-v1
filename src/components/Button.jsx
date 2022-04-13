import React from 'react';
import classNames from 'classnames';

// <button className={`button button--cart ${this.props.outline ? 'button--outline' : ''}`}>
//  {this.props.children}
// </button>

class Button2 extends React.Component {
  render() {
    return (
      <button
        className={classNames('button', 'button--cart', {
          'button--outline': this.props.outline,
        })}
      >
        {this.props.children}
      </button>
    );
  }
}

function Button(props) {
  return (
    <button className={classNames('button', 'button--cart', { 'button--outline': props.outline })}>
      {props.children}
    </button>
  );
}

export default Button;
