import TestData from '../../TestData';
import API from '../../utils/API';

const TYPE_SEARCH = "TYPE_SEARCH";
const SEARCH = "SEARCH";
const SEARCH_PENDING = "SEARCH_PENDING";
const SEARCH_FULFILLED = "SEARCH_FULFILLED";
const SEARCH_REJECTED = "SEARCH_REJECTED";

const initialState = {
  searchingKeyword: "",
  searchResult: {
    total: 0,
    totalPages: 0,
    results: []
  },
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPE_SEARCH:
      return {
        ...state, searchingKeyword: action.keyword
      }
    case SEARCH_PENDING:
      return {
        ...state, loading: true
      }
    case SEARCH_FULFILLED:
      let data = action.payload.data;
      return {
        ...state,
        searchResult: {
          total: data.total,
          totalPages: data.total_pages,
          results: data.results.map(e=>({
            desc: e.description,
            src: e.urls.regular
          }))
        },
        loading: false
      }
    case SEARCH_REJECTED:
      return {
        ...state, loading: false
      }
    default:
      return state;
  }
}

export const typeSearch = (keyword) => ({
  type: TYPE_SEARCH,
  keyword
});

export const search = (keyword) => ({
  type: SEARCH_FULFILLED,
  // payload: API.get({
  //   path: "/search/photos",
  //   data: {
  //     query: keyword, page: 1, per_page: 12
  //   },
  //   success: response => response
  // })
  payload: {
    data: TestData
  }
});
