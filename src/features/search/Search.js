import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as Actions from './redux';

import LoadingOverlay from '../../common/LoadingOverlay';

export class Search extends Component {
  render() {
    return (
      <section className="section">
        <p onClick={()=>this.props.setState({loading: true})}>Search</p>
        <LoadingOverlay show={this.props.loading} />
      </section>
    );
  }
}

export default connect(state => state, Actions)(Search);
