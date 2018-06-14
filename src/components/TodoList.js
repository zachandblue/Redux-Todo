import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TodoItem from "./TodoItem";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { showCompleted, showIncompleted, showAll } from "../actions/actions";

class TodoList extends Component {
  constructor() {
    super();

    this.showCompleted = this.showCompleted.bind(this);
    this.showIncompleted = this.showIncompleted.bind(this);
    this.showAll = this.showAll.bind(this);
  }

  showAll() {
    this.props.showAll();
  }

  showCompleted() {
    this.props.showCompleted();
  }

  showIncompleted() {
    this.props.showIncompleted();
  }
  render() {
    const state = this.props.todos;
    let visibleItems;
    switch (this.props.filter) {
      case "complete":
        visibleItems = state.filter(item => {
          if (item.completed === true) {
            return item;
          }
        });
        break;
      case "incomplete":
        visibleItems = state.filter(item => {
          if (item.completed !== true) {
            return item;
          }
        });
        break;
      default:
        visibleItems = state.filter(item => {
          if (item.id) {
            return item;
          }
        });
    }

    return (
      <div className="todo-list-container">
        <ul className="todo-list">
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {visibleItems.map(item => {
              console.log("render");
              return (
                <TodoItem
                  key={item.id}
                  id={item.id}
                  text={item.text}
                  completed={item.completed}
                />
              );
            })}
          </ReactCSSTransitionGroup>
        </ul>
        <button className="filter-button all" onClick={this.showAll}>
          All
        </button>
        <button className="filter-button complete" onClick={this.showCompleted}>
          Completed
        </button>
        <button
          className="filter-button incomplete"
          onClick={this.showIncompleted}
        >
          Incomplete
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    filter: state.filter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { showCompleted, showIncompleted, showAll },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
