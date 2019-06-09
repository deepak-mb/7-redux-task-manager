import React, { Component } from "react";
import { connect } from "react-redux";
import { getTasks } from "../../actions/taskActions";
import PropTypes from "prop-types";
import Task from "./Task";

class Tasks extends Component {
  componentDidMount() {
    this.props.getTasks();
  }
  render() {
    const { tasks } = this.props;
    // console.log(tasks);
    if (!tasks || tasks.length <= 0) {
      return (
        <div>
          <img
            src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
            alt=""
          />
        </div>
      );
    } else {
      return (
        <div className="container">
          <h1 className="display-4">
            <span className="text-danger">Task </span>
            Manager
          </h1>
          {tasks.map(task => (
            <Task key={task.id} task={task} />
          ))}
        </div>
      );
    }
  }
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  getTasks: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tasks: state.task.tasks
});

export default connect(
  mapStateToProps,
  { getTasks }
)(Tasks);
