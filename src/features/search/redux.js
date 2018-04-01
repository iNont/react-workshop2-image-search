import TestData from '../../TestData';

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
        ...state,
        searchingKeyword: action.keyword
      }
    case SEARCH_PENDING:
      return {
        ...state,
        loading: true
      }
    case SEARCH_FULFILLED:
      return {
        ...state,
        searchResult: {
          total: TestData.total,
          totalPages: TestData.total_pages,
          results: TestData.results
        },
        loading: false
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
  type: SEARCH,
  payload: new Promise((resolve, reject) =>{
    setTimeout(()=>resolve(), 1000);
  })
});
