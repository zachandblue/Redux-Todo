import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteItem } from "../actions/actions";

class DeleteButton extends Component {
  constructor() {
    super();

    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(id) {
    this.props.deleteItem(id);
  }
  render() {
    return (
      <button
        className="fa fa-trash delete-button"
        onClick={() => this.deleteItem(this.props.id)}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteItem }, dispatch);
}

export default connect(null, mapDispatchToProps)(DeleteButton);
