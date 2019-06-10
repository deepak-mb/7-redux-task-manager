import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteTask } from "../../actions/taskActions";
import { Link } from "react-router-dom";

class Task extends Component {
  onDeleteClick = id => {
    this.props.deleteTask(id);
  };
  render() {
    // console.log(this.props.task);
    const { id, title } = this.props.task;
    return (
      <div className="card my-1">
        <div
          className="card-body d-flex"
          style={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <p className="m-0" style={{ textTransform: "capitalize" }}>
            {title}
          </p>
          <div>
            <Link to={`contact/edit/${id}`}>
              <i className="fas fa-pencil-alt mx-1 btn btn-primary" />
            </Link>
            <i
              className="fas fa-times mx-1 btn btn-danger"
              onClick={this.onDeleteClick.bind(this, id)}
            />
          </div>
        </div>
      </div>
    );
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteTask }
)(Task);
