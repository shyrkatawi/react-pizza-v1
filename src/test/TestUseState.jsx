import React from 'react';

// class TestUseState extends React.Component {
//   state = {
//     counter: 0,
//   };
//
//   render() {
//     const li = [];
//     for (let i = 0; i < this.state.counter; i++) {
//       li.push(i + 1);
//     }
//     return (
//       <div>
//         <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>click me</button>
//         <ul>
//           {li.map((element) => (
//             <li key={element}>{element}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

const TestUseState = () => {
  const [values, setValues] = React.useState([]);

  const addValues = () => {
    const lastElementFromValues = values[values.length - 1];
    if (!lastElementFromValues) {
      values.push(1);
    } else {
      values.push(lastElementFromValues + 1);
    }
    setValues([...values]);
  };
  return (
    <div>
      <button onClick={() => addValues()}>click me</button>
      <div>{values}</div>
      <ul>
        {values.map((element) => (
          <li key={element}>{element}</li>
        ))}
      </ul>
    </div>
  );
};

export default TestUseState;
