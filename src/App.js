import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { bindActionCreators } from "redux";
import { addItem } from "./actions/actions";
import { connect } from "react-redux";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

class App extends Component {
  constructor() {
    super();

    this.addItem = this.addItem.bind(this);
  }
  addItem() {
    this.props.addItem();
  }

  render() {
    return (
      <div className="App">
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.list
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addItem }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
