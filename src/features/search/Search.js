import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as Action from './redux';

import LoadingOverlay from '../../common/LoadingOverlay';

class Search extends Component {
  render() {
    return (
      <section className="section">
        <p onClick={()=>this.props.setState({loading: true})}>Search</p>
        <LoadingOverlay show={this.props.loading} />
      </section>
    );
  }
}

export default connect(state => state, Action)(Search);
