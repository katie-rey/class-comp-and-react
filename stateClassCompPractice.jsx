import React from 'react'

/**
 * Challenge: Convert this stateful function component
 * to a stateful class component. At the end, everything
 * should work exactly the way it does now.
 *
 * 1. Change the syntax to a class component
 * 2. Declare state in the class component that
 *    can hold the value of `count`
 * 3. Update the add and subtract methods so you won't
 *    get the error about calling `setState` on undefined
 * 4. Update the values in the render method to account
 *    for the changeover to a class component
 */

export default class App extends React.Component {
  render() {
    // const [count, setCount] = React.useState(0)

    state = {
      count: 0,
    }

    add = () => {
      this.setState((prevState) => {
        return {
          count: prevState.count + 1,
        }
      })
    }

    subtract = () => {
      // implicit return, surround object with parenthesis which will trigger the implicit return and return the object
      this.setState((prevState) => ({ count: prevCount - 1 }))
    }

    return (
      <div className="counter">
        <button className="counter--minus" onClick={this.subtract}>
          –
        </button>
        <div className="counter--count">
          <h1>{this.state.count}</h1>
        </div>
        <button className="counter--plus" onClick={this.add}>
          +
        </button>
      </div>
    )
  }
}
