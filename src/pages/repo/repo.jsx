import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions/repo";
import "./repo.scss";

class Repo extends Component {


  render() {
    return (
      <div id="repo">
        {this.props.list.map(item => (
          <div className="text">{item.id}</div>
        ))}
      </div>
    );
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
