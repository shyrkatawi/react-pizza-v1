import React from 'react';

const Categories = ({ items }) => {
  const [indexOfActiveElement, setIndexOfActiveElement] = React.useState(0);

  const createArrayOfLiElements = () => {
    if (!items) {
      return [];
    }
    return items.map((item, index) => {
      const key = `${index}`; // TODO refactor?
      return (
        <li
          className={indexOfActiveElement === index ? 'active' : ''} // TODO change magic value 'active' to import
          key={key}
          onClick={() => setIndexOfActiveElement(index)}
        >
          {item}
        </li>
      );
    });
  };

  return (
    <div className="categories">
      <ul>{createArrayOfLiElements()}</ul>
    </div>
  );
};

// class Categories extends React.Component {
//   state = {
//     active: 0,
//   };
//
//   render() {
//     const { items } = this.props;
//     const liElements = items.map((item, index) => {
//       const key = `${index}`; // TODO refactor?
//       return (
//         <li
//           className={this.state.active === index ? 'active' : ''}
//           key={key}
//           onClick={() => this.setState({ active: index })}
//         >
//           {item}
//         </li>
//       );
//     });
//     return (
//       <div className="categories">
//         <ul>{liElements}</ul>
//       </div>
//     );
//   }
// }

export default Categories;
