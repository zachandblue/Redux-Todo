import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { addItem } from "../actions/actions";
import { connect } from "react-redux";

class AddTodo extends Component {
  constructor() {
    super();

    this.state = { value: "" };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const value = e.target.value;
    this.setState({ value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.state.value);
    this.setState({ value: "" });
  }
  render() {
    return (
      <div className="form-container">
        <form className="todo-form" onSubmit={this.onSubmit}>
          <input
            className="todo-input"
            type="text"
            onChange={this.onChange}
            value={this.state.value}
            placeholder="What To Do..."
          />

          <button
            className="fa fa-chevron-right todo-input-button"
            type="submit"
          />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addItem }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
