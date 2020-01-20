import React, { Component } from "react";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { connect } from "react-redux";
import * as actionType from "../../store/actions";

class Counter extends Component {
  state = {
    counter: 0
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState(prevState => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState(prevState => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 15"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Show Result
        </button>
        <ul>
          {this.props.storedResults.map(strResult => {
            return (
              <li
                key={strResult.id}
                onClick={() => this.props.onDeleteResult(strResult.id)}
              >
                {strResult.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () =>
      dispatch({
        type: actionType.INCREMENT
      }),
    onDecrementCounter: () =>
      dispatch({
        type: actionType.DECREMENT
      }),
    onAddCounter: () =>
      dispatch({
        type: actionType.ADD,
        val: 10
      }),
    onSubtractCounter: () =>
      dispatch({
        type: actionType.SUBTRACT,
        val: 15
      }),
    onStoreResult: result =>
      dispatch({
        type: actionType.STORE_RESULT,
        result: result
      }),
    onDeleteResult: id =>
      dispatch({
        type: actionType.DELETE_RESULT,
        elementId: id
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
