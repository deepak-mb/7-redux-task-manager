import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTask, editTask } from "../../actions/taskActions";

class EditTask extends Component {
  state = {
    id: "",
    title: ""
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    // console.log(id)
    this.props.getTask(id);
  }
  componentWillReceiveProps(nextProps, nextState) {
    const { id, title } = nextProps.task;
    // console.log(id, title);
    this.setState({ id: id, title: title });
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const { title } = this.state;
    const { id } = this.props.match.params;
    const updTask = {
      id: id,
      title: title
    };
    // console.log(updTask);
    this.props.editTask(updTask);
    this.props.history.push("/");
  };
  render() {
    const { title } = this.state;
    return (
      <div className="container">
        <h1 className="display-4">
          <span className="text-danger">Edit </span>
          Task
        </h1>
        <form onSubmit={this.onSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control d-block w-100 my-2"
              name="title"
              placeholder="Enter task here..."
              onChange={this.onChange}
              value={title}
            />
            <input
              type="submit"
              value="Edit Task"
              className="btn btn-success my-2"
            />
          </div>
        </form>
      </div>
    );
  }
}

EditTask.propTypes = {
  getTask: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  task: state.task.task
});

export default connect(
  mapStateToProps,
  { getTask, editTask }
)(EditTask);
