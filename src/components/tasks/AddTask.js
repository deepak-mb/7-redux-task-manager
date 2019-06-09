import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTask } from "../../actions/taskActions";

class AddTask extends Component {
  state = {
    task: ""
  };
  onChange = e => {
    this.setState({ task: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const { task } = this.state;
    const newTask = {
      task: task
    };
    this.props.addTask(newTask);
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="container">
        <h1 className="display-4">
          <span className="text-danger">Add </span>
          Task
        </h1>
        <form onSubmit={this.onSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control d-block w-100 my-2"
              name="addtask"
              placeholder="Enter task here..."
              onChange={this.onChange}
            />
            <input
              type="submit"
              value="Add Task"
              className="btn btn-success my-2"
            />
          </div>
        </form>
      </div>
    );
  }
}

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired
};

export default connect(
  null,
  { addTask }
)(AddTask);
