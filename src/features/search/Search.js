import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as Actions from './redux';

import LoadingOverlay from '../../common/LoadingOverlay';

export class Search extends Component {
  typeSearch(event) {
    this.props.typeSearch(event.target.value);
  }

  render() {
    return (
      <section className="section">
        <input onChange={this.typeSearch.bind(this)} />
        <p onClick={()=>this.props.search("keyword")}>Search</p>
        <LoadingOverlay show={this.props.loading} />
      </section>
    );
  }
}

export default connect(state => state, Actions)(Search);
