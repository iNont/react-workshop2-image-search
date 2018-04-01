import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as Actions from './redux';
import './Search.css';

import ImageCard from './ImageCard/ImageCard';
import LoadingOverlay from '../../common/LoadingOverlay';

export class Search extends Component {
  typeSearch(event) {
    this.props.typeSearch(event.target.value);
  }

  search() {
    this.props.search(this.props.searchingKeyword);
  }

  onKeyPress(event) {
    if(event.key === 'Enter') {
			this.search();
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="field has-addons">
            <div className="control is-expanded">
              <input className="input" type="text" placeholder="Search images"
                onChange={this.typeSearch.bind(this)}
                onKeyPress={this.onKeyPress.bind(this)} />
            </div>
            <div className="control">
              <a className="button is-info" onClick={this.search.bind(this)}>
                Search
              </a>
            </div>
          </div>
          <div className="Search-result-container">
            {this.props.searchResult.results.map((e,i)=><ImageCard {...e} key={i} />)}
          </div>
          <LoadingOverlay show={this.props.loading} />
        </div>
      </section>
    );
  }
}

export default connect(state => state, Actions)(Search);
