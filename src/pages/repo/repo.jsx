import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions/repo";

class Repo extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return this.props.list.map(item => <div>${item.id}</div>);
  }

  componentDidMount() {
    this.props.actions.fetchRepoData();
  }
}

const mapStateToProps = state => ({
  list: state.repoState.data
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Repo);
