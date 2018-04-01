import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as Action from './redux';
class Search extends Component {
  render() {
    return (
      <div>
        Search
      </div>
    );
  }
}

export default connect(state => state, Action)(Search);
