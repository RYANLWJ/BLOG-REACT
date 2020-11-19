import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import * as actions from '../../redux/actions/repo';
import './repo.scss';

class Repo extends Component {
  render() {
    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        {this.props.list.map(item => (
          <Card className="mb-20">
            <Card.Header
              title={item.id}
              thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
              extra={<span>this is extra</span>}
            />
            <Card.Body>
              <div>This is content of `Card`</div>
            </Card.Body>
            <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
          </Card>
        ))}

        <WhiteSpace size="lg" />
      </WingBlank>
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
