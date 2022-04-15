import React from 'react';
import classNames from 'classnames';

// <button className={`button button--cart ${this.props.outline ? 'button--outline' : ''}`}>
//  {this.props.children}
// </button>

// class Button2 extends React.Component {
//  render() {
//    return (
//      <button
//        className={classNames('button', 'button--cart', {
//          'button--outline': this.props.outline,
//        })}
//      >
//        {this.props.children}
//      </button>
//    );
//  }
// }

// eslint-disable-next-line react/prop-types
function Button({ onClick, outline, children, className }) {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, { 'button--outline': outline })}
    >
      {children}
    </button>
  );
}

export default Button;
