import React, { Component } from "react";
import DeleteButton from "./DeleteButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { markAsComplete, deleteItem } from "../actions/actions";

class TodoItem extends Component {
  constructor() {
    super();

    this.markAsComplete = this.markAsComplete.bind(this);
  }

  markAsComplete(id) {
    this.props.markAsComplete(id);
  }

  render() {
    return (
      <li
        className={`todo-list-item ${this.props.completed ? "completed" : ""}`}
        onClick={() => this.markAsComplete(this.props.id)}
      >
        {this.props.text}
        <DeleteButton id={this.props.id} />
      </li>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ markAsComplete, deleteItem }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
